import { NavLink } from "react-router";
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
        >
          Profile
        </NavLink>
        <NavLink
          to="/shop"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
        >
          Shop
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
