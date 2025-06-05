import React from "react";

const Sidebar = ({ selected, onSelect }) => {
  const menu = [
    { key: "profile", label: "👤 Profilo" },
    { key: "learn", label: "📚 Educazione" },
    { key: "forum", label: "💬 Community" },
    { key: "gamification", label: "🎮 Gamification" },
    { key: "portfolio", label: "📈 Portfolio" },
    { key: "finance", label: "💼 Finanza Personale" },
    { key: "trading", label: "📉 Trading & Mercato" },
    { key: "settings", label: "🌓 Tema & Stato" },
    { key: "admin", label: "🧾 Admin Panel" },
  ];

  return (
    <div className="sidebar-nav">
      {menu.map((item) => (
        <div
          key={item.key}
          className={`sidebar-item ${selected === item.key ? "active" : ""}`}
          onClick={() => onSelect(item.key)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;