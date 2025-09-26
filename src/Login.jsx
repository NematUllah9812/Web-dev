function Login() {
  return (
    <section
      id="login"
      className="d-flex align-items-center justify-content-center py-5"
      style={{ minHeight: "100vh", backgroundColor: "#121212" }}
    >
      <div className="card bg-dark text-light p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center fw-bold mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control bg-dark text-light border-secondary"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-light border-secondary"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-danger w-100 rounded-pill">
            Login
          </button>
        </form>

        <div className="text-center mt-3 small">
          <a href="#" className="text-decoration-none text-light opacity-75">
            Forgot password?
          </a>
          <br />
          <a href="#" className="text-decoration-none text-light opacity-75">
            Create an account
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
