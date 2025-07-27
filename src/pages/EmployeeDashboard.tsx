// src/pages/EmployeeDashboard.tsx
import React, { useState } from "react";
import "./EmployeeDashboard.css";


type Complaint = {
  id: number;
  title: string;
  description: string;
  department: string;
  progress: string;
};

const initialComplaints: Complaint[] = [
  {
    id: 1,
    title: "Illegal construction near park",
    description: "A new floor is being built without permission.",
    department: "Municipal Corporation",
    progress: "Pending",
  },
  {
    id: 2,
    title: "Unauthorized market on road",
    description: "Vendors are blocking traffic on main road.",
    department: "Police",
    progress: "In Progress",
  },
];

const EmployeeDashboard: React.FC = () => {
  const [complaints, setComplaints] = useState(initialComplaints);

  const handleProgressUpdate = (id: number, newProgress: string) => {
    const updated = complaints.map((comp) =>
      comp.id === id ? { ...comp, progress: newProgress } : comp
    );
    setComplaints(updated);
    alert(`Progress of complaint ID ${id} updated to '${newProgress}'`);
  };

  return (
    <div className="employee-container">
      <h1 className="employee-title">Employee Panel</h1>
      <div className="complaint-list">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="complaint-card">
            <h2>{complaint.title}</h2>
            <p><strong>Description:</strong> {complaint.description}</p>
            <p><strong>Department:</strong> {complaint.department}</p>
            <p><strong>Progress:</strong> {complaint.progress}</p>
            <div className="update-buttons">
              <button onClick={() => handleProgressUpdate(complaint.id, "In Progress")}>Mark In Progress</button>
              <button onClick={() => handleProgressUpdate(complaint.id, "Resolved")}>Mark Resolved</button>
              <button onClick={() => handleProgressUpdate(complaint.id, "Rejected")}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
