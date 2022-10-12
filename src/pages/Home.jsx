import React from "react";
import world from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const Home = () => {
  const [covid, setCovid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const API_KEY = "54ad24b710msha07c95426304036p1a62c0jsn814ebff60375";
  const url = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats/?rapidapi-key=${API_KEY}#downloadJSON=true`;

  const getCovidData = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const { data } = await axios.get(url);
      setCovid(data.data.covid19Stats);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(covid);

  useEffect(() => {
    getCovidData();
  }, []);

  const handleClick = (e) => {
    let CountryDetail;
    if (e === "United States") {
      CountryDetail = covid.filter((item) => item.country === "US");
    } else {
      CountryDetail = covid.filter((item) => item.country === e);
    }
    if (CountryDetail.length === 0) {
      CountryDetail.push({
        country: "Unknown Country",
        deaths: 0,
        confirmed: 0,
      });
    }
    setCountry(e);
    navigate("/detail", { state: CountryDetail });
  };
  return (
    <>
      <Header setCountry={setCountry} getCovidData={getCovidData}/>
      <SVGMap
        map={world}
        onLocationClick={(e) => {
          console.log(e.target.getAttribute("name"));
          handleClick(e.target.getAttribute("name"));
        }}
      />
    </>
  );
};

export default Home;
