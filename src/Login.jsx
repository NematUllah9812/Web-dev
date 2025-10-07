import bgSignup from "./assets/bgimsu.jpg";

function LoginSection() {
  return (
    <section
      id="login"
      className="d-flex align-items-center justify-content-center py-5"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgSignup})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
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

      <div
        className="card text-light p-4 shadow-lg"
        style={{
          maxWidth: "400px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
          zIndex: 2,
        }}
      >
        <h3 className="text-center mb-4 fw-bold">Login</h3>

        <form>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control bg-transparent text-light border-light placeholder-light"
              id="loginEmail"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control bg-transparent text-light border-light placeholder-light"
              id="loginPassword"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger w-100 rounded-pill mt-2"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <small className="opacity-75">
            Don’t have an account?{" "}
            <a
              href="#signup"
              className="text-danger fw-semibold text-decoration-none"
            >
              Sign Up
            </a>
          </small>
        </div>
      </div>

      <style>
        {`
          .placeholder-light::placeholder {
            color: rgba(255,255,255,0.8) !important;
          }
        `}
      </style>
    </section>
  );
}

export default LoginSection;
