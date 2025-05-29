import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSuccess from "./Components/LoginSuccess";
import { MyNavbar } from "./Components/MyNavbar";


function App() {
  
  return (
    <Router>
      <MyNavbar />
      <Routes>
        {/* altre rotte */}
        <Route path="/login-success" element={<LoginSuccess />} />
        {/* es. dashboard utente */}
        <Route path="/dashboard" element={<p>Benvenuto nella dashboard!</p>} />
      </Routes>
    </Router>
  )
}

export default App
