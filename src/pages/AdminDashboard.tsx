// src/pages/AdminDashboard.tsx
import React from "react";
import "./AdminDashboard.css";

const complaints = [
  {
    id: 1,
    title: "Illegal construction near park",
    description: "A new floor is being built without permission.",
  },
  {
    id: 2,
    title: "Unauthorized market on road",
    description: "Vendors are blocking traffic on main road.",
  },
];

const AdminDashboard: React.FC = () => {
  const handleForward = (id: number, department: string) => {
    // You can later integrate this with backend (e.g. update in DB)
    console.log(`Complaint ID ${id} forwarded to ${department}`);
    alert(`Complaint ID ${id} forwarded to ${department}`);
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="complaint-list">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="complaint-card">
            <h2>{complaint.title}</h2>
            <p>{complaint.description}</p>
            <div className="forward-buttons">
              <button onClick={() => handleForward(complaint.id, "Police")}>Forward to Police</button>
              <button onClick={() => handleForward(complaint.id, "Municipal Corporation")}>Forward to Municipal Corp</button>
              <button onClick={() => handleForward(complaint.id, "Revenue Department")}>Forward to Revenue Dept</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
