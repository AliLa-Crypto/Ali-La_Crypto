// components/Admin/LessonManager.jsx
import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import LessonCreate from "./LessonCreate";
import LessonUploadMedia from "./LessonUploadMedia";
// import LessonList from "./LessonList";
// import LessonEdit from "./LessonEdit";

const LessonManager = () => {
  return (
    <div className="text-light px-3">
      <h2 className="mb-4">📚 Gestione Lezioni</h2>

      {/* Sottomenu */}
      <div className="d-flex flex-wrap gap-3 mb-4">
        <NavLink to="create" className="btn btn-outline-light">➕ Crea Lezione</NavLink>
        <NavLink to="upload" className="btn btn-outline-light">📤 Upload Media</NavLink>
        <NavLink to="list" className="btn btn-outline-light">📂 Elenco Lezioni</NavLink>
      </div>

      {/* Routing interno */}
      <Routes>
        <Route path="create" element={<LessonCreate />} />
        <Route path="upload" element={<LessonUploadMedia />} />
        <Route path="list" element={<LessonList />} />
        <Route path="edit/:id" element={<LessonEdit />} />
      </Routes>
    </div>
  );
};

export default LessonManager;