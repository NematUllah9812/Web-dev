import bgSignup from "./assets/bgimsu.jpg"; // use your own signup bg image

function SignupSection() {
  return (
    <section
      id="signup"
      className="d-flex align-items-center justify-content-center py-5"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgSignup})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
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

      {/* Signup Card */}
      <div
        className="card text-light p-4 shadow-lg"
        style={{
          maxWidth: "420px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
          zIndex: 2,
        }}
      >
        <h3 className="text-center mb-4 fw-bold">Create Account</h3>

        <form>
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control bg-transparent text-light border-light placeholder-light"
              id="signupName"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control bg-transparent text-light border-light placeholder-light"
              id="signupEmail"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control bg-transparent text-light border-light placeholder-light"
              id="signupPassword"
              placeholder="Create a password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-danger w-100 rounded-pill mt-2"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <small className="opacity-75">
            Already have an account?{" "}
            <a href="#auth" className="text-danger fw-semibold text-decoration-none">
              Login
            </a>
          </small>
        </div>
      </div>

      {/* Inline style for placeholders */}
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

export default SignupSection;
