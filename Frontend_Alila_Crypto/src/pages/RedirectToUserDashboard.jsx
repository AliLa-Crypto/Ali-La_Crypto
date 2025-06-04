import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToUserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const level = localStorage.getItem("userLevel");
    if (level) {
      navigate(`/dashboard/${level}`);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return null;
};

export default RedirectToUserDashboard;