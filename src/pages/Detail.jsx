import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "react-svg-map/lib/index.css";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import CountryPieChart from "../components/charts/CountryPieChart";
import WorldPieChart from "../components/charts/WorldPieChart";
import axios from "axios";
import { toastErrorNotify } from "../helpers/ToastNotify";

const Detail = () => {
  const [countryName, setCountryName] = useState([]);
  const [countryFlag, setCountryFlag] = useState("");

  const { state } = useLocation();
  // console.log(state);
  const { covidList } = useSelector((state) => state.covid);

  // console.log(covidList);

  const totalDeaths = state?.reduce((sum, item) => (sum += item.deaths), 0);
  const totalConfirmed = state?.reduce(
    (sum, item) => (sum += item.confirmed),
    0
  );
  const recovered = totalConfirmed - totalDeaths;

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

  // console.log(pieData);

  // const Turkey = covidList.find((item) => item.country === "Turkey");
  // console.log(Turkey);

  const getCountryFlag = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    try {
      const { data } = await axios.get(url);
      // console.log(data);
      data.forEach((e) => {
        const { common } = e.name;
        setCountryName(common);
      });

      console.log(countryName);
    } catch (err) {
      toastErrorNotify(err.message);
    }
  };

  useEffect(() => {
    getCountryFlag();
  }, []);

  return (
    <div>
      {!state && (
        <h1 className="text-center text-danger m-auto">
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
            <CountryPieChart pieData={pieData} state={state} />
          </div>
        </div>
      )}
      <WorldPieChart worldPieData={worldPieData} />
    </div>
  );
};

export default Detail;
