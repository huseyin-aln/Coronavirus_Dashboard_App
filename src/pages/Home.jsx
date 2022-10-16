import React from "react";
import world from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import loadingGif from "../assets/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { getCovidData } from "../features/covidSlice";
import { toastErrorNotify } from "../helpers/ToastNotify";

const Home = () => {
  const dispatch = useDispatch();
  const { covidList, loading } = useSelector((state) => state.covid);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCovidData()).then((res) => {
      //? The function that runs toastify when an error is returned from api.
      if (res.payload?.name === "AxiosError") {
        toastErrorNotify("Something went wrong");
      }
    });
  }, [dispatch]);

  const handleClick = (country) => {
    let CountryDetail;
    //? The function that converts the United States data from the map to US in order to get data from the API when clicked on it.
    if (country === "United States") {
      CountryDetail = covidList?.filter((item) => item.country === "US");
    } else {
      //? The function that allows the data of that country to come from the api when clicked on the map.
      CountryDetail = covidList?.filter((item) => item.country === country);
    }
    //? The function that allows the user to be properly informed if there is no data for that country when clicked on the map.
    if (CountryDetail?.length === 0) {
      CountryDetail.push({
        country: "The Country Can Not Be Found!",
        deaths: 0,
        confirmed: 0,
      });
    }

    navigate("/detail", { state: CountryDetail });
  };
  return (
    <>
      {loading && (
        <div className="d-flex flex-column align-items-center">
          <img
            className="loadingGif"
            src={loadingGif}
            alt="gif"
            width="50%"
            height="400px"
          />
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
              handleClick(e.target.getAttribute("name"));
            }}
          />
        </>
      )}
    </>
  );
};

export default Home;
