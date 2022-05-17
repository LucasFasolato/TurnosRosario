import './App.css';
import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/homePage.js'
import Turnos from './pages/Turnos/turnos.js'
import MiTurno from './pages/MiTurno/miTurno.js'
function AppWrapper() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/turnos" element={<Turnos/>} />
        <Route path="/miturno" element={<MiTurno/>} />
      </Routes>
    </div>
  );
}

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
