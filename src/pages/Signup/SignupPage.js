import React from "react";
import { useState } from "react";
import "./SignupPage.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useSignup } from "../../hooks/useSignup";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name, contact, email, password);
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Name</label>
      <input
        type="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>Contact</label>
      <input
        type="contact"
        onChange={(e) => setContact(e.target.value)}
        value={contact}
      />

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

      <button disabled={isLoading} className="signup">
        Sign up
      </button>
      {error && <div className="error">{error}</div>}
      <p>OR</p>
      <button className="google">
        <FaGoogle className="icon" />
        <p className="signupwith">Sign up with google</p>
      </button>
    </form>
  );
};

export default SignupPage;
