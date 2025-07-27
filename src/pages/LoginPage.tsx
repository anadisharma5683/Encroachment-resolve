import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dummy credentials
    if (email === "admin@01" && password === "123456") {
      navigate("/admin");
    } else if (email === "pratap01" && password === "123456") {
      navigate("/employee");
    } else if (email === "manoj01" && password === "123456") {
      navigate("/citizen");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Portal</h1>
      <input
        type="text"
        placeholder="Email or Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
