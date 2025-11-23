import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">ContactHub</div>
      <div className="navbar_links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link-active" : "nav_link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link-active" : "nav_link"
          }
        >
          Contacts
        </NavLink>

        <NavLink
          to="/features"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link-active" : "nav_link"
          }
        >
          Features
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link-active" : "nav_link"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
