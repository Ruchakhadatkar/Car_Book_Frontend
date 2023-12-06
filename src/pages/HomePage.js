import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthCotext";
import useLogout from "../hooks/useLogout";

const HomePage = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handkeClick = () => {
    logout();
  };

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default HomePage;
