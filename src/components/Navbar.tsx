import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/citizen">Citizen</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/employee">Employee</Link>
    </nav>
  );
};

export default Navbar;
