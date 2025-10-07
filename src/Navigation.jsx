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
        <a
          className="navbar-brand fw-bold d-flex align-items-center"
          href="#home"
        >
          <img
            src={logo}
            alt="PixelArena"
            height="36"
            className="me-2 rounded"
          />
          <span className="fs-4">PixelArena</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-2">
              <a
                className="nav-link fw-semibold active"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>

            <li className="nav-item dropdown px-2">
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#games"
                id="gamesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Games
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark shadow"
                aria-labelledby="gamesDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#latest">
                    Latest
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#discounted">
                    Discounted
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#popular">
                    Popular
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#upcoming">
                    Upcoming
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item px-2">
              <a className="nav-link fw-semibold" href="#shop">
                Shop
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-semibold" href="#reviews">
                Reviews
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-semibold" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2 gap-lg-3 mt-3 mt-lg-0">
            <a
              href="#signup"
              className="btn btn-outline-light btn-sm px-3 rounded-pill fw-semibold custom-login-btn"
            >
              Login / Sign-Up
            </a>
            <a
              href="#"
              className="btn btn-warning btn-sm px-4 rounded-pill fw-semibold shadow-sm custom-cart-btn"
            >
              🛒 Cart
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          .custom-login-btn {
            border: 2px solid #f8f9fa;
            transition: all 0.3s ease;
            color: #f8f9fa;
          }

          .custom-login-btn:hover {
            background-color: #ffffffd2;
            border-color: #000000ff;
            color: #000000ff;
            box-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
            transform: translateY(-2px);
          }

          .custom-cart-btn {
            background-color: #dc3545 !important;
            border: none;
            color: #fff !important;
            transition: all 0.3s ease;
          }

          .custom-cart-btn:hover {
            background-color: #ff4757 !important;
            box-shadow: 0 0 15px rgba(255, 71, 87, 0.8);
            transform: translateY(-2px);
          }

          .nav-link {
            transition: color 0.3s ease, text-shadow 0.3s ease;
          }

          .nav-link:hover {
            color: #ff4757 !important;
            text-shadow: 0 0 8px rgba(255, 71, 87, 0.7);
          }
        `}
      </style>
    </nav>
  );
}

export default Navigation;
