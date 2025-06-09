import React, { useEffect, useState } from "react";
import api from "@/utils/api";
import { Container, Table, Button, Spinner, Alert } from "react-bootstrap";

const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await api.get("/admin/users");
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError("Errore nel caricamento utenti");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const changeRole = async (id, role) => {
    try {
      await api.patch(`/admin/users/${id}/role`, { level: role });
      fetchUsers(); // aggiorna lista
    } catch {
      alert("Errore nel cambio ruolo");
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Sei sicuro di voler eliminare questo utente?")) return;
    try {
      await api.delete(`/admin/users/${id}`);
      fetchUsers(); // aggiorna lista
    } catch {
      alert("Errore nella cancellazione utente");
    }
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-4 text-light">
      <h2>Gestione Utenti 👥</h2>
      <Table striped bordered hover responsive variant="dark" className="mt-3">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Ruolo</th>
            <th>Livello</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.level}</td>
              <td>
                {user.isAdmin ? (
                  <Button variant="warning" size="sm" onClick={() => changeRole(user._id, "principiante")}>
                    🔽 Retrocedi
                  </Button>
                ) : (
                  <Button variant="success" size="sm" onClick={() => changeRole(user._id, "admin")}>
                    🔼 Promuovi
                  </Button>
                )}
                {" "}
                <Button variant="danger" size="sm" onClick={() => deleteUser(user._id)}>
                  🗑️ Elimina
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserManager;