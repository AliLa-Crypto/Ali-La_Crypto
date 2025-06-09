import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LessonCard = ({ lesson }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="m-2 shadow-sm"
      style={{ width: "18rem", minHeight: "320px", cursor: "pointer" }}
      onClick={() => navigate(`/lessons/${lesson._id}`)}
    >
      <Card.Body>
        <Card.Title>{lesson.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Livello: {lesson.level}
        </Card.Subtitle>
        <Card.Text>
          {lesson.description?.slice(0, 100)}...
        </Card.Text>
        <Button variant="primary">Apri Lezione</Button>
      </Card.Body>
    </Card>
  );
};

export default LessonCard;