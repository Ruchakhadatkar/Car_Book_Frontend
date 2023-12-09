import React from "react";
import { useState } from "react";
import "./LoginPage.css"
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useLogin } from "../../hooks/useLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login( email, password);
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>


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

      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}

      <p>OR</p>
      <button className="facebook">
        <FaFacebook className="icon" />
        <p className="signupwith">Continue with facebook</p>
      </button>
      <button className="google">
        <FaGoogle className="icon" />
        <p className="signupwith">Continue with google</p>
      </button>
    </form>
  );
};

export default LoginPage;
