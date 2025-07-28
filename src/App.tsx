import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintList from "./pages/ComplaintList";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import CitizenPanel from "./pages/CitizenPanel";
import ComplaintReview from "./pages/ComplaintReview"; // at top
import ForwardToDept from "./pages/ForwardToDept"; // at top
import ComplaintStatus from "./pages/ComplaintStatus"; // at top


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/status" element={<ComplaintStatus />} />
        <Route path="/admin/forward" element={<ForwardToDept />} />
        
<Route path="/admin/review" element={<ComplaintReview />} />
        <Route path="/admin/complaints" element={<ComplaintList />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/citizen" element={<CitizenPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
