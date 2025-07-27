// src/Pages/Citizen.tsx
import React, { useState } from "react";
import { useComplaint } from "../context/ComplaintContext";

const Citizen: React.FC = () => {
  const { addComplaint } = useComplaint();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComplaint = {
      id: Date.now(),
      name,
      message,
      date: new Date().toLocaleString(),
    };
    addComplaint(newComplaint);
    setName("");
    setMessage("");
    alert("Complaint submitted!");
  };

  return (
    <div className="page-container">
      <h1>Citizen Portal</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Complaint"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default Citizen;
