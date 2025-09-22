function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>🎮 GameStore</h5>
            <p>
              Your one-stop shop for the latest and greatest video games. 
              Fast delivery, secure checkout, and unbeatable prices!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@gamestore.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Location: Karachi, Pakistan</p>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center pb-3">
          <small>
            © {new Date().getFullYear()} GameStore. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
