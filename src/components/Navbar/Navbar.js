import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthCotext";
import useLogout from "../../hooks/useLogout";
import "./Navbar.css";
import carlogo from "../../assets/carlogo.png";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handkeClick = () => {
    logout();
  };

  return (
    <div className="nav">
      <div className="icon">
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: "black", display: "flex" }}
        >
          <img src={carlogo} className="carlogo" />
          <div className="appName">
            <h3>Car</h3>
            <p>on</p>
            <h3>Rent</h3>
          </div>
        </Link>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Vehicle Models</li>
        <li>Contact</li>
      </ul>

      <div className="signLogin">
        {user && (
          <div>
            <button onClick={handkeClick}>Log out</button>
          </div>
        )}
        {!user && (
          <div>
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Sign up
            </Link>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
