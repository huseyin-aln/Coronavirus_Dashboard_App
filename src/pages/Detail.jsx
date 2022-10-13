import React from "react";
import { useLocation } from "react-router-dom";
import "react-svg-map/lib/index.css";
import Cards from "../components/Cards";

const Detail = () => {
  const { state } = useLocation();

  return (
    <div>
      <Cards state={state} />
    </div>
  );
};

export default Detail;
