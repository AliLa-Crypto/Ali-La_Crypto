import { useNavigate } from "react-router-dom";
import "@/styles/AdminSidebar.css";

export default function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <div className="admin-sidebar">
      <h4 className="text-light mb-4">🛠️ Pannello Admin</h4>
      <div className="admin-menu d-flex flex-column gap-2">
        <button onClick={() => navigate("/admin/dashboard/users")} className="btn btn-outline-light fw-bold">👥 Gestione Utenti</button>
        
        <div className="dropdown">
          <button className="btn btn-outline-light w-100 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown">
            📚 Gestione Lezioni
          </button>
          <ul className="dropdown-menu ">
            <li><button className="dropdown-item" onClick={() => navigate("/admin/dashboard/lessons/create")}>➕ Crea nuova lezione</button></li>
            <li><button className="dropdown-item" onClick={() => navigate("/admin/dashboard/lessons/upload")}>📤 Upload Media</button></li>
            <li><button className="dropdown-item" onClick={() => navigate("/admin/dashboard/lessons/list")}>📋 Elenco Lezioni</button></li>
          </ul>
        </div>

        <button onClick={() => navigate("/admin/dashboard/moderation")} className="btn btn-outline-light fw-bold">🚩 Moderazione Post</button>
        <button onClick={() => navigate("/admin/dashboard/stats")} className="btn btn-outline-light fw-bold">📊 Statistiche</button>
      </div>
    </div>
  );
};