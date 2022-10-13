import React from "react";
import world from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import loadingGif from "../assets/loading.gif";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { clearCovidList, getCovidData } from "../features/covidSlice";

const Home = () => {

  const dispatch = useDispatch()
  const {covidList, loading} = useSelector(state => state.covid)
  const [country, setCountry] = useState("");

  const navigate = useNavigate();




  // const [covid, setCovid] = useState([]);
  // const [loading, setLoading] = useState(false);


  // const API_KEY = process.env.REACT_APP_API_KEY;

  // const url = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats/?rapidapi-key=${API_KEY}#downloadJSON=true`;

  // const getCovidData = async () => {
  //   setLoading(true);
  //   try {
  //     const { data } = await axios.get(url);
  //     setCovid(data.data.covid19Stats);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(covid);

  useEffect(() => {
    dispatch(getCovidData());
    return () =>{
      dispatch(clearCovidList())
    }
  }, []);

  const handleClick = (country) => {
    let CountryDetail;
    if (country === "United States") {
      CountryDetail = covidList.filter((item) => item.country === "US");
    } else {
      CountryDetail = covidList.filter((item) => item.country === country);
    }
    if (CountryDetail.length === 0) {
      CountryDetail.push({
        country: "The Country Can Not Be Found!",
        deaths: 0,
        confirmed: 0,
      });
    }
    setCountry(country);
    navigate("/detail", { state: CountryDetail });
  };
  return (
    <>
      <Header setCountry={setCountry}  />
      {loading && (
        <div className="d-flex flex-column align-items-center">
          <img src={loadingGif} alt="gif" width="50%" height="400px" />
          <h1 className="text-center">Loading...</h1>
        </div>
      )}
      {!loading && (
        <>
          <SVGMap
            className="map"
            locationClassName="location"
            map={world}
            onLocationClick={(e) => {
              // console.log(e.target.getAttribute("name"));
              handleClick(e.target.getAttribute("name"));
            }}
          />
        </>
      )}
    </>
  );
};

export default Home;
