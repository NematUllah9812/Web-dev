function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          🎮 GameStore
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="shopDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="shopDropdown">
                <li><a className="dropdown-item" href="#">🎮 All Games</a></li>
                <li><a className="dropdown-item" href="#">🔥 Best Sellers</a></li>
                <li><a className="dropdown-item" href="#">🆕 New Releases</a></li>
                <li><a className="dropdown-item" href="#">💸 Discounts</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">🖥️ Platforms</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Customer Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <a href="#" className="btn btn-warning ms-3">
            🛒 Cart
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
