import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import UserManager from "@/components/Admin/UserManager";
import LessonCreate from "@/components/Admin/LessonCreate";
import LessonUploadMedia from "@/components/Admin/LessonUploadMedia";
import LessonList from "@/components/Admin/LessonList";
import LessonEdit from "@/components/Admin/LessonEdit";
import PostModeration from "@/components/Admin/PostModeration";
import AdminStats from "@/components/Admin/AdminStats";

const AdminDashboard = () => {
  return (
    <Container fluid className="text-light">
      <Row>
        {/* Sidebar a sinistra */}
        <Col md={3} lg={2} className="bg-dark p-3 border-end">
          <AdminSidebar />
        </Col>

        {/* Contenuto dinamico a destra */}
        <Col md={9} lg={10} className="p-4">
          <h1 className="mb-4">👑 Admin Dashboard</h1>
          <p className="mb-5">
            Benvenuto nel pannello di amministrazione. Da qui puoi gestire utenti, lezioni, community e altro.
          </p>

          <Routes>
            <Route path="users" element={<UserManager />} />
            <Route path="lessons/create" element={<LessonCreate />} />
            <Route path="lessons/upload" element={<LessonUploadMedia />} />
            <Route path="lessons/list" element={<LessonList />} />
            <Route path="lessons/edit/:id" element={<LessonEdit />} />
            <Route path="moderation" element={<PostModeration />} />
            <Route path="stats" element={<AdminStats />} />
            <Route index element={<AdminStats />} /> {/* default view */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;