import { Link } from "react-router-dom";
import logo from "./assets/logo1.png";

function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-dark"
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(20, 20, 20, 0.8)",
      }}
    >
      <div className="container-fluid px-4">
        <Link to="/" className="navbar-brand fw-bold d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          PixelArena
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/games" className="nav-link">
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/latest-games" className="nav-link">
                Latest
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                🛒 Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin Portal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
