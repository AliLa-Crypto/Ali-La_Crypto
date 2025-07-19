import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "@/Components/Admin/AdminSidebar";
import UserManager from "@/Components/Admin/UserManager";
import LessonCreate from "@/Components/Admin/LessonCreate";
import LessonUploadMedia from "@/Components/Admin/LessonUploadMedia";
import LessonList from "@/Components/Admin/LessonList";
import LessonEdit from "@/Components/Admin/LessonEdit";
import PostModeration from "@/Components/Admin/PostModeration";
import AdminStats from "@/Components/Admin/AdminStats";

const AdminDashboard = () => {
  return (
    <Container fluid className="text-light">
      <Row>
    
        <Col md={3} lg={2} className="bg-dark p-3 border-end">
          <AdminSidebar />
        </Col>

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