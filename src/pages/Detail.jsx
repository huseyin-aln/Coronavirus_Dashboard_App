import React from "react";
import { useLocation } from "react-router-dom";
import "react-svg-map/lib/index.css";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import Pie from "../components/Pie";
import WorldPie from "../components/WorldPie";

const Detail = () => {
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

  const worldTotalDeaths = covidList?.reduce((sum, item) => (sum += item.deaths), 0);
  const worldTotalConfirmed = covidList?.reduce(
    (sum, item) => (sum += item.confirmed),
    0
  );
  const worldRecovered = worldTotalConfirmed - worldTotalDeaths;

  const pieData = [{label: "Total Deaths", value: totalDeaths}, {label: "Recovered", value: recovered}]

  const worldPieData = [{label: "Total Deaths", value: worldTotalDeaths}, {label: "Recovered", value: worldRecovered}]

  // console.log(pieData);
  
  // const Turkey = covidList.find((item) => item.country === "Turkey");
  // console.log(Turkey);

  return (
    <div>
      {!state && (
        <h1 className="text-center text-danger m-auto">
          Please select a country to see data
        </h1>
      )}
      {state?.length > 0 && (
        <>
        <Cards state={state} />
        <Pie pieData={pieData} state={state}/>
        <WorldPie worldPieData={worldPieData}/>
        </>
      )}
    </div>
  );
};

export default Detail;
