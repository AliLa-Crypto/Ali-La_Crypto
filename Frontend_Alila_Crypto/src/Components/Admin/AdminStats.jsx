import React, { useEffect, useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import api from "@/utils/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AdminStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStats = async () => {
    try {
      const res = await api.get("/admin/dashboard");
      setStats(res.data.stats);
    } catch {
      setError("❌ Errore nel caricamento delle statistiche.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  const { utentiPerLivello, lezioniPerCategoria, segnalazioni } = stats;

  // 🎯 GRAFICO 1: Utenti per livello
  const userChart = {
    labels: ["Principiante", "Intermedio", "Pro"],
    datasets: [
      {
        label: "Utenti",
        data: [
          utentiPerLivello.principiante,
          utentiPerLivello.intermedio,
          utentiPerLivello.pro,
        ],
        backgroundColor: ["#0dcaf0", "#ffc107", "#dc3545"],
      },
    ],
  };

  // 🎯 GRAFICO 2: Lezioni per categoria (dinamico)
  const lessonCategories = Object.keys(lezioniPerCategoria);
  const lessonCounts = Object.values(lezioniPerCategoria);

  const lessonChart = {
    labels: lessonCategories,
    datasets: [
      {
        label: "Lezioni",
        data: lessonCounts,
        backgroundColor: "#198754",
      },
    ],
  };

  // 🎯 GRAFICO 3: Segnalazioni post e commenti
  const reportChart = {
    labels: ["Post", "Commenti"],
    datasets: [
      {
        label: "Segnalazioni",
        data: [segnalazioni.post, segnalazioni.commenti],
        backgroundColor: "#dc3545",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <Container className="text-light">
      <h2 className="text-center mb-5">📊 Statistiche Avanzate</h2>

      <div className="bg-white p-4 rounded mb-5 shadow">
        <h5 className="text-dark text-center">Utenti per livello</h5>
        <Bar data={userChart} options={chartOptions} />
      </div>

      <div className="bg-white p-4 rounded mb-5 shadow">
        <h5 className="text-dark text-center">Lezioni per categoria</h5>
        <Bar data={lessonChart} options={chartOptions} />
      </div>

      <div className="bg-white p-4 rounded mb-5 shadow">
        <h5 className="text-dark text-center">Contenuti segnalati</h5>
        <Bar data={reportChart} options={chartOptions} />
      </div>
    </Container>
  );
};

export default AdminStats;