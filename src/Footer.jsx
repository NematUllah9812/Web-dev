import {
  FaFacebook,FaInstagram,  FaYoutube,  FaEnvelope,  FaPhoneAlt,  FaMapMarkerAlt,  FaHome,FaShoppingCart,  FaStar,  FaUser,  FaTwitter,  FaLinkedin,} from "react-icons/fa";
  
import logo from "./assets/logo1.png";

function Footer() {
  const brandColor = "#ff4d4d";

  return (
    <footer
      id="Footer"
      className="text-light pt-5"
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start align-items-start">
          <div className="col-md-3 mb-4">
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

            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3 fs-5">
              <a href="#" className="text-light opacity-75">
                <FaFacebook />
              </a>
              <a href="#" className="text-light opacity-75">
                <FaInstagram />
              </a>
              <a href="#" className="text-light opacity-75">
                <FaYoutube />
              </a>
              <a href="#" className="text-light opacity-75">
                <FaTwitter />
              </a>
              <a href="#" className="text-light opacity-75">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2 d-flex align-items-center gap-2">
                <FaHome color={brandColor} />
                <a href="#" className="text-light text-decoration-none opacity-75">
                  Home
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <FaShoppingCart color={brandColor} />
                <a href="#games" className="text-light text-decoration-none opacity-75">
                  Shop
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <FaStar color={brandColor} />
                <a href="#reviews" className="text-light text-decoration-none opacity-75">
                  Reviews
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <FaUser color={brandColor} />
                <a href="#login" className="text-light text-decoration-none opacity-75">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3 ">Contact Us</h6>
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

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3 ">Get in Touch</h6>
            <form className="small">
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control form-control-sm bg-dark text-light border-secondary"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control form-control-sm bg-dark text-light border-secondary"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-2">
                <textarea
                  rows="2"
                  className="form-control form-control-sm bg-dark text-light border-secondary"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-sm w-100 text-light fw-semibold"
                style={{
                  backgroundColor: brandColor,
                  border: "none",
                  transition: "0.3s",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 small">
          <p className="mb-2 mb-md-0 opacity-75">
            © {new Date().getFullYear()}{" "}
            <span className="fw-bold text-danger">PixelArena</span>. All rights reserved.
          </p>
          <div>
            <a href="#faq" className="text-light text-decoration-none opacity-75 me-3">
              Privacy Policy
            </a>
            <a href="#faq" className="text-light text-decoration-none opacity-75">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
