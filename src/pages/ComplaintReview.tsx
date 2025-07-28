// src/pages/ComplaintReview.tsx
import React from "react";
import "./ComplaintReview.css";

const ComplaintReview: React.FC = () => {
  const complaint = {
    id: 1,
    citizenName: "Rajesh Kumar",
    location: "Indore - Zone 4",
    issue: "Illegal 4-storey building",
    imageUrl: "https://via.placeholder.com/300x200",
    detectedFloors: 4,
    aiConfidence: 92,
  };

  return (
    <div className="review-container">
      <h2>Complaint Review</h2>
      <div className="complaint-info">
        <div className="info-block">
          <p><strong>Complaint ID:</strong> {complaint.id}</p>
          <p><strong>Citizen:</strong> {complaint.citizenName}</p>
          <p><strong>Location:</strong> {complaint.location}</p>
          <p><strong>Issue:</strong> {complaint.issue}</p>
        </div>
        <div className="image-block">
          <img src={complaint.imageUrl} alt="Building evidence" />
          <p className="ai-result">
            AI Detected <strong>{complaint.detectedFloors}</strong> Floors<br />
            Confidence: <strong>{complaint.aiConfidence}%</strong>
          </p>
        </div>
      </div>
      <div className="action-buttons">
        <button className="btn approve">Mark as Valid</button>
        <button className="btn reject">Mark as Invalid</button>
      </div>
    </div>
  );
};

export default ComplaintReview;
