import React from "react";

const Header = ({ setCountry, getCovidData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // getCovidData()
  };

  return (
    <div>
      <header className="text-center fs-2 text-success mt-3">
        Coronavirus Dashboard
      </header>
      <div className="d-flex justify-content-center ">
        <form className="d-flex w-50" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setCountry(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
