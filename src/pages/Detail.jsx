import { useLocation } from "react-router-dom";
import "react-svg-map/lib/index.css";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import CountryPieChart from "../components/charts/CountryPieChart";
import WorldPieChart from "../components/charts/WorldPieChart";
import WorldColumnChart from "../components/charts/WorldColumnChart";
import WorldDeathChart from "../components/charts/WorldDeathChart";
import loadingGif from "../assets/loading.gif";
import { Container, Col } from "react-bootstrap";

const Detail = () => {
  const { state } = useLocation();
  const { covidList, loading } = useSelector((state) => state.covid);

  //? The function that finds the total number of deaths by adding the number of deaths from the states and cities of the country.
  const totalDeaths = state?.reduce((sum, item) => (sum += item.deaths), 0);

  //? The function that finds the total number of cases by adding the number of cases belonging to the states and cities of the country.
  const totalConfirmed = state?.reduce(
    (sum, item) => (sum += item.confirmed),
    0
  );

  //? The function that finds the country's recoveries by subtracting the total number of cases from the total number of deaths.
  const recovered = totalConfirmed - totalDeaths;

  //? The function that finds the number of deaths in the whole world by adding the death numbers of countries.
  const worldTotalDeaths = covidList?.reduce(
    (sum, item) => (sum += item.deaths),
    0
  );

  //? The function that finds the number of cases in the whole world by adding the number of cases of countries.
  const worldTotalConfirmed = covidList?.reduce(
    (sum, item) => (sum += item.confirmed),
    0
  );

  //? The function that finds the total number of recovered in the whole world by subtracting the number of deaths from the number of confirmed in the world.
  const worldRecovered = worldTotalConfirmed - worldTotalDeaths;

  const pieData = [
    { label: "Total Deaths", value: totalDeaths },
    { label: "Recovered", value: recovered },
  ];

  const worldPieData = [
    { label: "Total Deaths", value: worldTotalDeaths },
    { label: "Recovered", value: worldRecovered },
  ];

  //? The function that finds the top 5 countries with the highest number of confirmed in the world.
  const countriesData = covidList?.reduce((total, item) => {
    total[item.country] = { label: item.country, value: item.confirmed };
    return total;
  }, {});

  const worldColumnData = Object.values(countriesData)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  //? The function that finds the top 5 countries with the highest number of deaths in the world.
  const countriesDeathData = covidList?.reduce((total, item) => {
    total[item.country] = { label: item.country, value: item.deaths };
    return total;
  }, {});

  const worldDeathData = Object.values(countriesDeathData)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <div>
      {!state && (
        <h1 className="text-center text-danger m-5">
          Please select a country to see data
        </h1>
      )}
      {state?.length > 0 && (
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <Cards
            state={state}
            totalDeaths={totalDeaths}
            totalConfirmed={totalConfirmed}
            recovered={recovered}
          />

          <div className="w-80 mt-5">
            {recovered === 0 && totalDeaths === 0 ? (
              <h1 className="text-center text-primary">No data to display </h1>
            ) : (
              <CountryPieChart pieData={pieData} state={state} />
            )}
          </div>
        </div>
      )}

      <WorldPieChart worldPieData={worldPieData} />
      {loading && (
        <div className="d-flex flex-column align-items-center">
          <img src={loadingGif} alt="gif" width="50%" height="400px" />
          <h1 className="text-center">Loading...</h1>
        </div>
      )}
      {!loading && (
        <Container fluid className="d-flex justify-content-center flex-wrap">
          <Col xs={12} md={6}>
            <WorldColumnChart worldColumnData={worldColumnData} />
          </Col>
          <Col xs={12} md={6}>
            <WorldDeathChart worldDeathData={worldDeathData} />
          </Col>
        </Container>
      )}
    </div>
  );
};

export default Detail;
