import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo from "./assets/logo1.png";

function Footer() {
  const brandColor = "#ff4d4d";

  return (
    <footer id="Footer"
      className="text-light pt-5"
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start align-items-start">
          {/* Brand */}
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <img
                src={logo}
                alt="PixelArena Logo"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  border: `2px solid ${brandColor}`,
                  marginBottom: "10px",
                }}
              />
              <h4 className="fw-bold text-danger">PixelArena</h4>
              <p className="small text-light opacity-75">
                Your one-stop shop for the latest and greatest video games.
              </p>
            </div>

            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="#" className="text-light fs-5 opacity-75 hover-opacity">
                <FaFacebook />
              </a>
              <a href="#" className="text-light fs-5 opacity-75 hover-opacity">
                <FaInstagram />
              </a>
              <a href="#" className="text-light fs-5 opacity-75 hover-opacity">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Links */}
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

          {/* Contact with Icons */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3 text-uppercase">Contact</h6>
            <ul className="list-unstyled small">
              <li className="opacity-75 mb-2 d-flex align-items-center gap-2">
                <FaEnvelope color={brandColor} /> support@pixelarena.com
              </li>
              <li className="opacity-75 mb-2 d-flex align-items-center gap-2">
                <FaPhoneAlt color={brandColor} /> +1 (555) 123-4567
              </li>
              <li className="opacity-75 d-flex align-items-center gap-2">
                <FaMapMarkerAlt color={brandColor} /> Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 small">
          <p className="mb-2 mb-md-0 opacity-75">
            © {new Date().getFullYear()}{" "}
            <span className="fw-bold text-danger">PixelArena</span>. All rights reserved.
          </p>
          <div>
            <a href="#faq" className="text-light text-decoration-none opacity-75 hover-link me-3">
              Privacy Policy
            </a>
            <a href="#faq" className="text-light text-decoration-none opacity-75 hover-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hover-link:hover {
          color: ${brandColor} !important;
        }
        .hover-opacity:hover {
          opacity: 1 !important;
          color: ${brandColor} !important;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
