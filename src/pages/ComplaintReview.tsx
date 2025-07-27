import React, { useState } from "react";
import "../styles/page.css";

interface Complaint {
  id: number;
  name: string;
  email: string;
  type: string;
  description: string;
  status: string;
}

const dummyComplaint: Complaint = {
  id: 1,
  name: "Ravi Sharma",
  email: "ravi@example.com",
  type: "Land Encroachment",
  description: "Someone built a wall on public road",
  status: "Pending",
};

const ComplaintReview: React.FC = () => {
  const [status, setStatus] = useState(dummyComplaint.status);
  const [remarks, setRemarks] = useState("");

  const handleSubmit = () => {
    alert(`Complaint ID ${dummyComplaint.id} marked as "${status}" with remarks: "${remarks}"`);
    // Future: Send this data to backend using fetch or axios
  };

  return (
    <div className="page-container">
      <h2>Review Complaint</h2>
      <div className="complaint-details">
        <p><strong>ID:</strong> {dummyComplaint.id}</p>
        <p><strong>Name:</strong> {dummyComplaint.name}</p>
        <p><strong>Email:</strong> {dummyComplaint.email}</p>
        <p><strong>Type:</strong> {dummyComplaint.type}</p>
        <p><strong>Description:</strong> {dummyComplaint.description}</p>

        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Forwarded">Forwarded</option>
        </select>

        <label>Remarks (optional):</label>
        <textarea
          rows={4}
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Add any comments here..."
        />

        <button onClick={handleSubmit}>Submit Review</button>
      </div>
    </div>
  );
};

export default ComplaintReview;
