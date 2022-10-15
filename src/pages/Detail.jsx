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

  const totalDeaths = state?.reduce((sum, item) => (sum += item.deaths), 0);
  console.log(totalDeaths);
  
  const totalConfirmed = state?.reduce(
    (sum, item) => (sum += item.confirmed),
    0
  );
  const recovered = totalConfirmed - totalDeaths;
console.log(recovered);
  const worldTotalDeaths = covidList?.reduce(
    (sum, item) => (sum += item.deaths),
    0
  );
  const worldTotalConfirmed = covidList?.reduce(
    (sum, item) => (sum += item.confirmed),
    0
  );
  const worldRecovered = worldTotalConfirmed - worldTotalDeaths;

  const pieData = [
    { label: "Total Deaths", value: totalDeaths },
    { label: "Recovered", value: recovered },
  ];

  const worldPieData = [
    { label: "Total Deaths", value: worldTotalDeaths },
    { label: "Recovered", value: worldRecovered },
  ];
  // confirmed sayısı
  const countriesData = covidList?.reduce((total, item) => {
    total[item.country] = { label: item.country, value: item.confirmed };
    return total;
  }, {});

  const worldColumnData = Object.values(countriesData)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // ölüm sayısı
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
              <h1 className="text-center text-success">No data to display </h1>
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
