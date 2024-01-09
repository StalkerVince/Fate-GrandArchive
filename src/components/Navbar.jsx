import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <button type="button">Home</button>
      </NavLink>
      <NavLink to="/classes">
        <button type="button">Classes</button>
      </NavLink>
      <NavLink to="/list">
        <button type="button">Servant List</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
