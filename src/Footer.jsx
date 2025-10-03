// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-light pt-5"
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-danger">🎮 GameStore</h4>
            <p className="small text-light opacity-75">
              Your one-stop shop for the latest and greatest video games.
            </p>
            {/* Socials */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="#" className="text-light fs-5 opacity-75 hover-opacity">
                {/* <FaFacebookF /> */} 
              </a>
              <a href="#" className="text-light fs-5 opacity-75 hover-opacity">
                {/* <FaTwitter /> */}
              </a>
              <a href="#" className="text-light fs-5 opacity-75 hover-opacity">
                {/* <FaInstagram /> */}
              </a>
              <a href="#" className="text-light fs-5 opacity-75 hover-opacity">
                {/* <FaYoutube /> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3 text-uppercase">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none opacity-75 hover-link">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#games" className="text-light text-decoration-none opacity-75 hover-link">
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="#reviews" className="text-light text-decoration-none opacity-75 hover-link">
                  Reviews
                </a>
              </li>
              <li className="mb-2">
                <a href="#login" className="text-light text-decoration-none opacity-75 hover-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3 text-uppercase">Contact</h6>
            <ul className="list-unstyled small">
              <li className="opacity-75 mb-2">📧 support@gamestore.com</li>
              <li className="opacity-75 mb-2">📞 +1 (555) 123-4567</li>
              <li className="opacity-75">📍 Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 small">
          <p className="mb-2 mb-md-0 opacity-75">
            © {new Date().getFullYear()} <span className="fw-bold text-danger">GameStore</span>. All rights reserved.
          </p>
          <div>
            <a href="#" className="text-light text-decoration-none opacity-75 hover-link me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-light text-decoration-none opacity-75 hover-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Small CSS tweaks */}
      <style>{`
        .hover-link:hover {
          color: #ff4d4d !important;
        }
        .hover-opacity:hover {
          opacity: 1 !important;
          color: #ff4d4d !important;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
