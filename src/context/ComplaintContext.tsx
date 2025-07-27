import React, { createContext, useState, useContext, ReactNode } from "react";

export interface Complaint {
  id: number;
  name: string;
  message: string;
  date: string;
}

interface ComplaintContextType {
  complaints: Complaint[];
  addComplaint: (complaint: Complaint) => void;
}

const ComplaintContext = createContext<ComplaintContextType | undefined>(undefined);

export const useComplaint = () => {
  const context = useContext(ComplaintContext);
  if (!context) throw new Error("useComplaint must be used within ComplaintProvider");
  return context;
};

export const ComplaintProvider = ({ children }: { children: ReactNode }) => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  const addComplaint = (complaint: Complaint) => {
    setComplaints(prev => [...prev, complaint]);
  };

  return (
    <ComplaintContext.Provider value={{ complaints, addComplaint }}>
      {children}
    </ComplaintContext.Provider>
  );
};
