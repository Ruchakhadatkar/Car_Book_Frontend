import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthCotext";
import useLogout from "../../hooks/useLogout";
import "./Navbar.css";
import carlogo from "../../assets/carlogo.png";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate()

  const handkeClick = () => {
    logout();
    navigate("/login")
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
      <ul className="ulist">
        {user ? (
          <>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <li>Home</li>
            </Link>
            {/* <li>About</li> */}
            <Link
              to="/models"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>Vehicle Models</li>
            </Link>
            <li><a href="/#contact" style={{ textDecoration: "none", color: "black" }}>Contact</a></li>
            <Link
              to="/bookingdetails"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>Booked Cars</li>
            </Link>
          </>
        ) : (
          <></>
        )}
      </ul>

      <div className="signLogin">
        {user && (
          <div>
            <button onClick={handkeClick} className="logout">
              Log out
            </button>
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
