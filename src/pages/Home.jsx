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
      // api den hata döndüğünde toastify ı çalıştıran function
      if (res.payload?.name === "AxiosError") {
        toastErrorNotify("Something went wrong");
      }
    });
  }, [dispatch]);

  const handleClick = (country) => {
    let CountryDetail;
    if (country === "United States") {
      CountryDetail = covidList?.filter((item) => item.country === "US");
    } else if (CountryDetail?.length === 0) {
      CountryDetail.push({
        country: "The Country Can Not Be Found!",
        deaths: 0,
        confirmed: 0,
      });
    } else {
      CountryDetail = covidList?.filter((item) => item.country === country);
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
