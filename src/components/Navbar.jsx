import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="nav-link active cursor-pointer d-flex gap-3">
          <i>{"<h-aln>"}</i>
          <span className="text-success">Coronavirus Dahsboard</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse navbar-nav d-flex justify-content-end gap-4"
          id="navbarSupportedContent"
        >
          
            <Link to="/" className="nav-link active cursor-pointer">
              Home
            </Link>
            <Link to="detail" className="nav-link active cursor-pointer">
              Detail
            </Link>
            <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
