function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">🎮 GameStore</h5>
            <p className="small text-light opacity-75">
              Your one-stop shop for the latest and greatest video games.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-light text-decoration-none opacity-75">
                  Home
                </a>
              </li>
              <li>
                <a href="#games" className="text-light text-decoration-none opacity-75">
                  Shop
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-light text-decoration-none opacity-75">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#login" className="text-light text-decoration-none opacity-75">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            <ul className="list-unstyled small">
              <li className="opacity-75">Email: support@gamestore.com</li>
              <li className="opacity-75">Phone: +1 (555) 123-4567</li>
              <li className="opacity-75">Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 small">
          <p className="mb-2 mb-md-0 opacity-75">
            © {new Date().getFullYear()} GameStore. All rights reserved.
          </p>
          <div>
            <a href="#" className="text-light text-decoration-none opacity-75 me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-light text-decoration-none opacity-75">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
