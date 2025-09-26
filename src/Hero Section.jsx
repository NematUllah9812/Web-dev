import bgim from "./assets/bgim.jpg"

function HeroSection() {
  return (
    <section
      className="hero d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `url(${bgim})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Dark overlay for readability */}
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative z-2" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold mb-3">Experience Gaming Like Never Before</h1>
        <p className="lead mb-4">
          Discover the latest releases, best sellers, and exclusive discounts – all in one place.
        </p>
        <div>
          <a href="#" className="btn btn-danger btn-lg me-3 rounded-pill px-4">
            Buy Now
          </a>
          <a href="#" className="btn btn-outline-light btn-lg rounded-pill px-4">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
