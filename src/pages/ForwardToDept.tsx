// src/pages/ForwardToDept.tsx
import React, { useState } from "react";
import "./ForwardToDept.css";

const ForwardToDept: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>("");

  const handleForward = () => {
    if (selectedDept) {
      alert(`Complaint forwarded to ${selectedDept}`);
    } else {
      alert("Please select a department first!");
    }
  };

  return (
    <div className="forward-container">
      <h2>Forward Complaint</h2>
      <p>Select the relevant department to forward this complaint for action.</p>

      <div className="department-options">
        <label>
          <input
            type="radio"
            name="department"
            value="Police Department"
            onChange={(e) => setSelectedDept(e.target.value)}
          />
          Police Department
        </label>
        <label>
          <input
            type="radio"
            name="department"
            value="Municipal Corporation"
            onChange={(e) => setSelectedDept(e.target.value)}
          />
          Municipal Corporation
        </label>
        <label>
          <input
            type="radio"
            name="department"
            value="Revenue Department"
            onChange={(e) => setSelectedDept(e.target.value)}
          />
          Revenue Department
        </label>
      </div>

      <button className="forward-btn" onClick={handleForward}>
        Forward Complaint
      </button>
    </div>
  );
};

export default ForwardToDept;
