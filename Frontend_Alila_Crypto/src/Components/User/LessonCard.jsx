import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LessonCard = ({ lesson }) => {
  const navigate = useNavigate();

  return (
    <Card
      className=" shadow-md h-100"
      style={{ width: "18rem", minHeight: "360px", cursor: "pointer" }}
      onClick={() => navigate(`/lessons/${lesson._id}`)}
    >
      {/* ✅ Anteprima media */}
      {lesson.mediaUrl && lesson.type === "immagine" && (
        <Card.Img
          variant="top"
          src={lesson.mediaUrl}
          style={{ height: "150px", objectFit: "cover" }}
          alt="Media immagine"
        />
      )}

      {lesson.mediaUrl && lesson.type === "video" && (
        <video
          src={lesson.mediaUrl}
          controls
          width="100%"
          height="150"
          style={{ objectFit: "cover" }}
        />
      )}

      {lesson.mediaUrl && lesson.type === "pdf" && (
        <a href={lesson.mediaUrl} target="_blank" rel="noopener noreferrer">
          <div className="bg-light text-center p-3">
            <strong>📄 PDF allegato</strong>
          </div>
        </a>
      )}

      {/* ✅ Corpo della card */}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{lesson.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Livello: {lesson.level}
        </Card.Subtitle>
        <Card.Text className="flex-grow-1">
          {lesson.description?.slice(0, 90)}...
        </Card.Text>
        <Button
          variant="primary"
          onClick={(e) => {
            e.stopPropagation(); // evita doppio redirect
            navigate(`/lessons/${lesson._id}`);
          }}
        >
          Apri Lezione
        </Button>
      </Card.Body>
    </Card>
  );
};

export default LessonCard;