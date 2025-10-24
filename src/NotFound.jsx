// src/NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center vh-100 bg-dark text-white">
      <h1 className="display-3 fw-bold mb-3">404</h1>
      <p className="lead mb-4">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-outline-light">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
