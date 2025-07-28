// src/pages/AdminDashboard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./AdminDashboard.css";

const data = [
  { name: "Resolved", value: 3 },
  { name: "Forwarded", value: 7 },
  { name: "In Progress", value: 2 },
];

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

const AdminDashboard: React.FC = () => {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="logo">Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to="/admin/complaints">📋 Complaints</Link></li>
            <li><Link to="/admin/review">🔍 Review</Link></li>
            <li><Link to="/admin/forward">📤 Forward</Link></li>
            <li><Link to="/admin/status">📊 Status</Link></li>
          </ul>
        </nav>
      </aside>
      
      <main className="dashboard-content">
        <header className="topbar">
          <h1>Welcome Admin 👋</h1>
          <p>Manage complaints and track their progress</p>
        </header>

        <section className="quick-info">
          <div className="card">🚨 Total Complaints: 12</div>
          <div className="card">📤 Forwarded: 7</div>
          <div className="card">✅ Resolved: 3</div>
          <div className="card">🕒 In Progress: 2</div>
        </section>

        <section className="chart-section">
          <h2>Complaint Status Overview</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
