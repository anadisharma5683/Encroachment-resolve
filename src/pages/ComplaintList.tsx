// src/pages/ComplaintList.tsx
import React from "react";
import "./ComplaintList.css";

interface Complaint {
  id: number;
  citizenName: string;
  location: string;
  issue: string;
  status: "Pending" | "Reviewed" | "Forwarded";
}

const dummyComplaints: Complaint[] = [
  {
    id: 1,
    citizenName: "Rajesh Kumar",
    location: "Indore - Zone 4",
    issue: "Illegal 4-storey building",
    status: "Pending",
  },
  {
    id: 2,
    citizenName: "Seema Verma",
    location: "Ujjain Road",
    issue: "Commercial encroachment on footpath",
    status: "Reviewed",
  },
  {
    id: 3,
    citizenName: "Amit Joshi",
    location: "Palasia",
    issue: "Illegal boundary wall extended to public road",
    status: "Forwarded",
  },
];

const ComplaintList: React.FC = () => {
  return (
    <div className="complaint-list">
      <h2>All Complaints</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Citizen</th>
            <th>Location</th>
            <th>Issue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyComplaints.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.id}</td>
              <td>{complaint.citizenName}</td>
              <td>{complaint.location}</td>
              <td>{complaint.issue}</td>
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

export default ComplaintList;
