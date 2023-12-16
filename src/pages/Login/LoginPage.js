import React from "react";
import { useState } from "react";
import "./LoginPage.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useLogin } from "../../hooks/useLogin";
import { Navigate, useNavigate } from "react-router-dom";
import google from "../../assets/google-icon.png"

const LoginPage = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    navigate("/")
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>

      {/* <label>Name</label>
      <input
        type="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      /> */}

      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading} className="login">
        Login
      </button>
      {error && <div className="error">{error}</div>}

      <p>OR</p>
      
     <button className="google">
        <img src={google} className="gooogle" />
        <p className="signupwith">Sign up with google</p>
      </button>
    </form>
  );
};

export default LoginPage;
