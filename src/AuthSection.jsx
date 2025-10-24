import { useState } from "react";
import bgSignup from "./assets/bgimsu.jpg";
import logo from "./assets/logo1.png";

function AuthSection() {
  const [isLogin, setIsLogin] = useState(true);
  const brandColor = "#ff4d4d";

  return (
    <section
      id="auth"
      className="d-flex align-items-center justify-content-center py-5"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgSignup})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="card text-light p-4 shadow-lg position-relative"
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
                <label htmlFor="signupConfirmPassword" className="form-label text-light">
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
            className="btn w-100 rounded-pill mt-2 fw-bold btn-auth"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          <small className="opacity-75">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              className="btn btn-link p-0 fw-semibold text-decoration-none toggle-auth"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign-Up" : "Login"}
            </button>
          </small>
        </div>
      </div>


      <style>{`
        .input-custom {
          border: 1px solid ${brandColor}80;
          box-shadow: inset 0 0 4px rgba(255, 77, 77, 0.3);
        }
        .input-custom:focus {
          border-color: ${brandColor};
          box-shadow: 0 0 8px ${brandColor}99, inset 0 0 4px ${brandColor}66;
        }

        /* Button hover effect */
        .btn-auth {
          background-color: ${brandColor};
          color: #fff;
          border: none;
        }
        .btn-auth:hover {
          background-color: #ff6666;
          box-shadow: 0 0 12px ${brandColor};
          transform: translateY(-2px);
        }

        /* Toggle link hover */
        .toggle-auth {
          color: ${brandColor};
        }
        .toggle-auth:hover {
          color: #ff9999;
        }

        /* Placeholder styling */
        .form-control::placeholder {
          color: #aaa;
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
}

export default AuthSection;
