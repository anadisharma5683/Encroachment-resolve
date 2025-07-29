import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ComplaintProvider } from "./context/ComplaintContext";
import './index.css';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ComplaintProvider>
      <App />
    </ComplaintProvider>
  </React.StrictMode>
);
