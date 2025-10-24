import bgim from "./assets/bgim.jpg";

function HeroSection() {
  return (
    <section
      className="hero d-flex align-items-center justify-content-center text-center text-white position-relative min-vh-100"
      style={{
        backgroundImage: `url(${bgim})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="overlay position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      ></div>

      <div className="container position-relative z-2" style={{ zIndex: 2 }}>
        <h1 className="display-4 fw-bold mb-3">Experience Gaming Like Never Before</h1>
        <p className="lead mb-4 px-2 px-md-5">
          Discover the latest releases, best sellers, and exclusive discounts – all in one place.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <a href="#Latestgames" className="btn btn-danger btn-lg rounded-pill px-4 hero-btn-red">
            Buy Now
          </a>
          <a href="#games" className="btn btn-outline-light btn-lg rounded-pill px-4 hero-btn-white">
            Learn More
          </a>
        </div>
      </div>

      <style>
        {`
          .hero-btn-red:hover {
            background-color: #ff4d4d;
          }

          .hero-btn-white:hover {
            background-color: #fff;
            color: #000 !important;
          }
        `}
      </style>
    </section>
  );
}

export default HeroSection;
