import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './assets/css/App.css';
import NavBar from './components/Header/NavBar/NavBar';
import Precipitaciones from './components/Header/NavBar/Router/Precipitaciones';
import Viento from './components/Header/NavBar/Router/Viento';
import Humedad from './components/Header/NavBar/Router/Humedad';
import Inicio from "./components/Header/Router/Inicio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Precipitaciones" element={<Precipitaciones />} />
          <Route path="/Viento" element={<Viento />} />
          <Route path="/Humedad" element={<Humedad />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;