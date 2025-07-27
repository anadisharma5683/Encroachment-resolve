// src/Pages/Admin.tsx
import React from "react";
import { useComplaint } from "../context/ComplaintContext";

const Admin: React.FC = () => {
  const { complaints } = useComplaint();

  return (
    <div className="page-container">
      <h1>Admin Dashboard</h1>
      <h2>Complaints:</h2>
      {complaints.length === 0 ? (
        <p>No complaints yet.</p>
      ) : (
        <ul>
          {complaints.map((c) => (
            <li key={c.id}>
              <strong>{c.name}</strong>: {c.message}
              <br />
              <small>{c.date}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admin;
