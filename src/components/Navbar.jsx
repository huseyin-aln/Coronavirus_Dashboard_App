import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCovidList, getCovidData } from "../features/covidSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NavbarTop() {
  const dispatch = useDispatch();
  const { covidList } = useSelector((state) => state.covid);

  const navigate = useNavigate();

  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    dispatch(getCovidData());

    return () => {
      dispatch(clearCovidList());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let CountryDetail;
    const countryInput =
      searchCountry[0].toUpperCase() + searchCountry.slice(1).toLowerCase();

    //? The function that converts United States data from input to US to get data from API.
    if (
      countryInput === "United States" ||
      countryInput === "Us" ||
      countryInput === "Usa"
    ) {
      CountryDetail = covidList.filter((item) => item.country === "US");
    } else {
      //? The function that allows the country data from the input to come from the API.
      CountryDetail = covidList.filter((item) => item.country === countryInput);
    }
    //? The function that allows the user to be properly informed if the data of the country entered in the input is not available in the API.
    if (CountryDetail?.length === 0) {
      CountryDetail.push({
        country: "The Country Can Not Be Found!",
        deaths: 0,
        confirmed: 0,
      });
    }
    setSearchCountry("");
    navigate("/detail", { state: CountryDetail });
  };

  return (
    <Navbar
      className="navbarContainer"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Link to="/" className="nav-link active cursor-pointer d-flex gap-3">
          <i className="text-white coronaHeader">{"<h-aln>"}</i>
          <span className="text-primary coronaHeader">
            Coronavirus Dashboard
          </span>
        </Link>

        <Navbar.Toggle
          className="toggle"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse className="menu" id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="home nav-link active cursor-pointer">
              Home
            </Link>

            <Link to="detail" className="detail nav-link active cursor-pointer">
              Detail
            </Link>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="text-capitalize form-control me-2"
                type="search"
                value={searchCountry}
                placeholder="Search Country..."
                aria-label="Search"
                onChange={(e) => setSearchCountry(e.target.value)}
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
