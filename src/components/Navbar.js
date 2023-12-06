import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthCotext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handkeClick = () => {
    logout();
  };

  return (
    <div>
      <Link to={"/"}>
        <h2>Car Book</h2>
      </Link>

      {user && (
        <div>
          <button onClick={handkeClick}>Log out</button>
        </div>
      )}
      {!user && (
        <div>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
