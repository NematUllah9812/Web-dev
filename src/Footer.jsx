function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 mt-5 border-top">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">👕 LynixFit</h4>
            <p>
              Redefining fashion with comfort and style.  
              From casual wear to trendy fits — we’ve got you covered.
            </p>
            {/* Social Media */}
            <div>
              <a href="#" className="text-dark me-3 fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-dark me-3 fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Shop</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li><a href="#" className="text-dark text-decoration-none">Reviews</a></li>
                  <li><a href="#" className="text-dark text-decoration-none">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Get in Touch</h5>
            <p><i className="bi bi-envelope-fill me-2"></i> support@lynixfit.com</p>
            <p><i className="bi bi-telephone-fill me-2"></i> +92 (300) 123-4567</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i> Karachi, Pakistan</p>
          </div>
        </div>

        <hr />

        {/* Bottom Note */}
        <div className="text-center pb-3">
          <small>
            © {new Date().getFullYear()} LynixFit · Crafted with ❤️ for style lovers
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
