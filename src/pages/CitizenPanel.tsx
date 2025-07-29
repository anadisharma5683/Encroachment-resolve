// src/Pages/CitizenPanel.tsx
import React, { useState } from "react";
import ComplaintForm from "./ComplaintForm";
import ComplaintStatus from "./ComplaintStatus";
import { motion, AnimatePresence } from "framer-motion";

// Helper Component for Buttons (DRY code)
interface TabButtonProps {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md transform focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${
      isActive
        ? "bg-orange-500 text-white scale-105 shadow-lg"
        : "bg-white text-orange-600 border border-orange-500 hover:bg-orange-50 hover:scale-102"
    }`}
  >
    <span>{icon}</span>
    <span>{label}</span>
  </button>
);


const CitizenPanel: React.FC = () => {
  // Improvement: Default tab set hai, user ka ek click bachta hai
  const [activeTab, setActiveTab] = useState<"form" | "status">("form");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-white flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-orange-200 p-8 md:p-10">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-orange-600 text-center mb-10 drop-shadow-sm">
          Citizen Portal
        </motion.h1>

        {/* Toggle Buttons (ab ekdum clean) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-10">
          <TabButton
            label="File New Complaint"
            icon="📄"
            isActive={activeTab === "form"}
            onClick={() => setActiveTab("form")}
          />
          <TabButton
            label="Check Complaint Status"
            icon="🔍"
            isActive={activeTab === "status"}
            onClick={() => setActiveTab("status")}
          />
        </div>

        {/* Tab Content with smooth animations */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {activeTab === "form" && <ComplaintForm />}
              {activeTab === "status" && <ComplaintStatus />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CitizenPanel;