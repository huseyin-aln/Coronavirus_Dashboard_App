import React from "react";
import { useLocation } from "react-router-dom";
import "react-svg-map/lib/index.css";

const Detail = () => {
  const { state } = useLocation();

  console.log(state);

  const totalDeaths = state.reduce((sum, item) => (sum += item.deaths), 0);
  const totalConfirmed = state.reduce(
    (sum, item) => (sum += item.confirmed),
    0
  );
  // console.log(totalDeaths)
  // console.log(totalConfirmed)

  // const {country}=state[0]

  return (
    <div>
      <h1>{state[0].country}</h1>
      <h1>{totalConfirmed}</h1>
      <h1>{totalDeaths}</h1>
    </div>
  );
};

export default Detail;
