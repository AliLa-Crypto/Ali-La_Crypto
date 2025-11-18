import { useState } from "react";
import { FaBars, FaUser, FaGraduationCap, FaComments, FaChartLine, FaHome } from "react-icons/fa"; 
import "@/styles/Sidebar.css";

const Sidebar = ({ onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { key: "dashboard", label: "Dashboard", icon: <FaHome /> }, // ✅ Nuova voce Home
    { key: "profile", label: "Area Personale", icon: <FaUser /> },
    { key: "learn", label: "Accademia", icon: <FaGraduationCap /> },
    { key: "forum", label: "Community", icon: <FaComments /> },
    { key: "portfolio", label: "Portfolio", icon: <FaChartLine /> },
  ];

  return (
    <>
      {/* Hamburger toggle visibile solo su mobile */}
      <div className="hamburger-menu d-lg-none" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={24} />
      </div>

      {/* Sidebar menu */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`sidebar-item ${selected === item.key ? "active" : ""}`}
            onClick={() => {
              onSelect(item.key);
              setIsOpen(false); // chiude il menu dopo la selezione su mobile
            }}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;