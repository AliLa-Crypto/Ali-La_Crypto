import React, { useEffect, useState } from "react";
import { Table, Button, Alert, Spinner, Container } from "react-bootstrap";
import api from "@/utils/api";

const PostModeration = () => {
  const [flaggedPosts, setFlaggedPosts] = useState([]);
  const [flaggedComments, setFlaggedComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchFlaggedContent = async () => {
    try {
      const res = await api.get("/admin/flagged");
      setFlaggedPosts(res.data.posts || []);
      setFlaggedComments(res.data.comments || []);
    } catch {
      setMessage("❌ Errore nel recupero contenuti segnalati.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlaggedContent();
  }, []);

  const handleAction = async (type, id, action) => {
    const endpoint =
      type === "post"
        ? `/admin/flagged/post/${id}`
        : `/admin/flagged/comment/${id}`;

    const method = action === "delete" ? "delete" : "patch";

    try {
      await api[method](endpoint);
      setMessage(`✅ ${type === "post" ? "Post" : "Commento"} ${action === "delete" ? "eliminato" : "approvato"}`);
      fetchFlaggedContent();
    } catch {
      setMessage("❌ Errore nell'azione moderazione.");
    }
  };

  return (
    <Container className="text-light">
      <h2 className="mb-4">🚩 Contenuti segnalati</h2>
      {message && <Alert variant={message.startsWith("✅") ? "success" : "danger"}>{message}</Alert>}
      {loading ? <Spinner animation="border" /> : (
        <>
          <h4 className="mt-4">Post segnalati</h4>
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>Titolo</th>
                <th>Autore</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {flaggedPosts.map(post => (
                <tr key={post._id}>
                  <td>{post.title}</td>
                  <td>{post.author?.username}</td>
                  <td>
                    <Button size="sm" variant="danger" onClick={() => handleAction("post", post._id, "delete")}>Elimina</Button>{" "}
                    <Button size="sm" variant="success" onClick={() => handleAction("post", post._id, "approve")}>Approva</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4 className="mt-4">Commenti segnalati</h4>
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>Testo</th>
                <th>Autore</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {flaggedComments.map(comment => (
                <tr key={comment._id}>
                  <td>{comment.text}</td>
                  <td>{comment.author?.username}</td>
                  <td>
                    <Button size="sm" variant="danger" onClick={() => handleAction("comment", comment._id, "delete")}>Elimina</Button>{" "}
                    <Button size="sm" variant="success" onClick={() => handleAction("comment", comment._id, "approve")}>Approva</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default PostModeration;