import { useState } from "react";
import bgSignup from "./assets/bgimsu.jpg";
import logo from "./assets/logo1.png";

function AuthSection() {
  const [isLogin, setIsLogin] = useState(false);
  const brandColor = "#ff4d4d"; // your logo color

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
      {/* Dark overlay */}
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

      <div
        className="card text-light p-4 shadow-lg"
        style={{
          maxWidth: "450px",
          width: "100%",
          background: "linear-gradient(145deg, #161616, #1f1f1f)",
          border: `1px solid ${brandColor}70`,
          borderRadius: "12px",
          zIndex: 2,
          boxShadow: `0 0 20px rgba(0, 0, 0, 0.9)`,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Logo */}
        <div className="text-center mb-3">
          <img
            src={logo}
            alt="PixelArena Logo"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "14px",
              objectFit: "cover",
              border: `2px solid ${brandColor}`,
              padding: "3px",
              boxShadow: `0 0 12px ${brandColor}66`,
            }}
          />
        </div>

        <h3
          className="text-center mb-4 fw-bold"
          style={{ color: brandColor, letterSpacing: "1px" }}
        >
          {isLogin ? "Login to PixelArena" : "Join PixelArena"}
        </h3>

        <form>
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="signupName" className="form-label text-light">
                Full Name
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light input-custom"
                id="signupName"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="authEmail" className="form-label text-light">
              Email
            </label>
            <input
              type="email"
              className="form-control bg-dark text-light input-custom"
              id="authEmail"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="authPassword" className="form-label text-light">
              Password
            </label>
            <input
              type="password"
              className="form-control bg-dark text-light input-custom"
              id="authPassword"
              placeholder={isLogin ? "Enter your password" : "Create a password"}
              required
            />
          </div>

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
                  className="form-control bg-dark text-light input-custom"
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

          {isLogin && (
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          )}

          <button
            type="submit"
            className="btn w-100 rounded-pill mt-2 fw-bold"
            style={{
              backgroundColor: brandColor,
              color: "#fff",
              border: "none",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff6666")}
            onMouseOut={(e) => (e.target.style.backgroundColor = brandColor)}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          <small className="opacity-75">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              className="btn btn-link p-0 fw-semibold text-decoration-none"
              style={{ color: brandColor }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </small>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .input-custom {
          border: 1px solid ${brandColor}80;
          transition: all 0.3s ease;
          box-shadow: inset 0 0 4px rgba(255, 77, 77, 0.3);
        }
        .input-custom:focus {
          border-color: ${brandColor};
          box-shadow: 0 0 8px ${brandColor}99, inset 0 0 4px ${brandColor}66;
        }
        .form-control::placeholder {
          color: #aaa;
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
}

export default AuthSection;
