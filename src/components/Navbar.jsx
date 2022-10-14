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
  const { covidList, loading } = useSelector((state) => state.covid);

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

    if (searchCountry === "United States") {
      CountryDetail = covidList.filter((item) => item.country === "US");
    } else if (CountryDetail?.length === 0) {
      CountryDetail.push({
        country: "The Country Can Not Be Found!",
        deaths: 0,
        confirmed: 0,
      });
    } else {
      CountryDetail = covidList.filter(
        (item) => item.country === searchCountry
      );
    }

    setSearchCountry("");
    navigate("/detail", { state: CountryDetail });
  };
  // console.log(covidList);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="nav-link active cursor-pointer d-flex gap-3">
          <i className="text-white">{"<h-aln>"}</i>
          <span className="text-success">Coronavirus Dashboard</span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link active cursor-pointer">
              Home
            </Link>

            <Link to="detail" className="nav-link active cursor-pointer">
              Detail
            </Link>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                value={searchCountry}
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchCountry(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
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
