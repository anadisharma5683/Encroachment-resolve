import React from "react";
import "../styles/home.css";

import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Encroachment Resolve</h1>
      <p className="tagline">Smart Complaint Management System</p>
      <div className="role-buttons">
        <Link to="/citizen" className="home-btn">Citizen</Link>
        <Link to="/admin" className="home-btn">Admin</Link>
        <Link to="/employee" className="home-btn">Employee</Link>
      </div>
    </div>
  );
};

export default Home;
