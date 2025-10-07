import { useState } from "react";
import bgSignup from "./assets/bgimsu.jpg"; // your background image

function AuthSection() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <section
      id="auth"
      className="d-flex align-items-center justify-content-center py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
        backgroundImage: `url(${bgSignup})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay for depth */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1,
        }}
      ></div>

      {/* Card */}
      <div
        className="card text-light p-4 shadow-lg"
        style={{
          maxWidth: "450px",
          width: "100%",
          background: "linear-gradient(145deg, #161616, #1f1f1f)",
          border: "1px solid #2a2a2a",
          borderRadius: "12px",
          zIndex: 2,
          boxShadow: "0 0 25px rgba(0, 0, 0, 0.8)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h3
          className="text-center mb-4 fw-bold"
          style={{ color: "#ff4d4d", letterSpacing: "1px" }}
        >
          {isLogin ? "Login to PixelArena" : "Join PixelArena"}
        </h3>

        <form>
          {/* Signup → Full Name */}
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="signupName" className="form-label text-light">
                Full Name
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border-secondary"
                id="signupName"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="authEmail" className="form-label text-light">
              Email
            </label>
            <input
              type="email"
              className="form-control bg-dark text-light border-secondary"
              id="authEmail"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="authPassword" className="form-label text-light">
              Password
            </label>
            <input
              type="password"
              className="form-control bg-dark text-light border-secondary"
              id="authPassword"
              placeholder={isLogin ? "Enter your password" : "Create a password"}
              required
            />
          </div>

          {/* Signup only → Confirm Password + Gender */}
          {!isLogin && (
            <>
              <div className="mb-3">
                <label
                  htmlFor="signupConfirmPassword"
                  className="form-label text-light"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control bg-dark text-light border-secondary"
                  id="signupConfirmPassword"
                  placeholder="Confirm password"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Gender</label>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      required
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      required
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Login only → Remember Me */}
          {isLogin && (
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-100 rounded-pill mt-2 fw-bold"
            style={{
              backgroundColor: "#ff4d4d",
              color: "#fff",
              border: "none",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff6666")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4d4d")}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch Link */}
        <div className="text-center mt-4">
          <small className="opacity-75">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              className="btn btn-link p-0 fw-semibold text-decoration-none"
              style={{
                color: "#ff4d4d",
              }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </small>
        </div>
      </div>
    </section>
  );
}

export default AuthSection;
