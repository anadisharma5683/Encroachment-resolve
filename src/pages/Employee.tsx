// src/Pages/Employee.tsx
import React from "react";
import { useComplaint } from "../context/ComplaintContext";

const Employee: React.FC = () => {
  const { complaints } = useComplaint();

  return (
    <div className="page-container">
      <h1>Employee Dashboard</h1>
      <h2>Complaints Assigned:</h2>
      {complaints.length === 0 ? (
        <p>No complaints to show.</p>
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

export default Employee;
