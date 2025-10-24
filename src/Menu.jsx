import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/latest">Latest Games</Link>
      <Link to="/auth">Login / Signup</Link>
    </>
  );
}

export default Menu;
