// src/pages/ComplaintStatus.tsx
import React from "react";
import "./ComplaintStatus.css";

const complaints = [
  {
    id: "C001",
    title: "Illegal Construction",
    department: "Municipal Corporation",
    status: "In Progress",
  },
  {
    id: "C002",
    title: "Encroachment near Park",
    department: "Police Department",
    status: "Forwarded",
  },
  {
    id: "C003",
    title: "Plot Dispute",
    department: "Revenue Department",
    status: "Resolved",
  },
];

const ComplaintStatus: React.FC = () => {
  return (
    <div className="status-container">
      <h2>Complaint Status Tracker</h2>
      <table className="status-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.id}</td>
              <td>{complaint.title}</td>
              <td>{complaint.department}</td>
              <td>
                <span className={`status ${complaint.status.toLowerCase()}`}>
                  {complaint.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintStatus;
