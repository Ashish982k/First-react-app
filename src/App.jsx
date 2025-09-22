import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import Dashboard from "./components/Dashboard";


function OceanVizApp() {
  const [chatOpen, setChatOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");


  return (
    <div className="flex h-screen bg-[#021b2c] text-white">
      <Navbar activePage={activePage} setActivePage={setActivePage} />


      <div className="flex-1 relative bg-gradient-to-b from-[#03263d] to-[#00121e] overflow-y-auto">
        {activePage === "Dashboard" ? (
          <Dashboard />
        ) : (
          <h2 className="text-xl text-gray-300 flex items-center justify-center h-full">
            {activePage} Page Coming Soon
          </h2>
        )}


        {/* Chatbot Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="absolute bottom-6 right-6 w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          🤖
        </button>
        <Chatbot chatOpen={chatOpen} setChatOpen={setChatOpen} />
      </div>
    </div>
  );
}


export default OceanVizApp;