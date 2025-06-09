import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "@/utils/api";
import LessonCard from "@/components/User/LessonCard";
import { getUserFromToken } from "@/utils/auth";

const LearnPage = () => {
  const [lessons, setLessons] = useState([]);
  const [filteredLessons, setFilteredLessons] = useState([]);
  const user = getUserFromToken();

  const fetchLessons = async () => {
    try {
      const res = await api.get("/lessons/public");
      setLessons(res.data);
    } catch (err) {
      console.error("❌ Errore nel caricamento lezioni", err);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  useEffect(() => {
    if (lessons.length > 0) {
      setFilteredLessons(lessons);
    }
  }, [lessons]);


  return (
    <Container className="mt-4 text-light">
      <h2 className="mb-4">📚 Lezioni per il tuo livello: {user?.level}</h2>
      <Row>
        {filteredLessons.map(lesson => (
          <Col key={lesson._id} xs={12} md={6} lg={3}>
            <LessonCard lesson={lesson} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LearnPage;