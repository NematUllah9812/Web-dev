import logo from "./assets/cod.png"
function Navigation() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a className="navbar-brand fw-bold text-dark" href="#">
          <img
            src= {logo}
            alt="EA Games"
            height="32"
            className="me-2"
          />
          GameStore
        </a>

        {/* Mobile Toggler */}
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

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="#">
                Contact
              </a>
            </li>
          </ul>

          {/* Right Section (Cart & Login) */}
          <div className="d-flex align-items-center">
            <a href="#login" className="btn btn-link text-dark me-3">
              Login
            </a>
            <a href="#" className="btn btn-dark px-3 rounded-pill">
              🛒 Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
