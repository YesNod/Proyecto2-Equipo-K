import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './Components/LandingPage/paginaPrincipal';
import LoginForm from './Components/LoginForm/LoginForm';
import CursosList from './Components/Cursos/CursosList';
import CursoDetail from './Components/Cursos/CursoDetail';
import CursoForm from './Components/Cursos/CursoForm';

const App = () => {
  return (
    <Router>
      {/* Definición de rutas */}
      <Routes>
        <Route path="/older" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<CursosList />} />
        <Route path="/cursos/nuevo" element={<CursoForm />} />
        <Route path="/cursos/:id" element={<CursoDetail />} />
        <Route path="/cursos/:id/editar" element={<CursoForm />} />
      </Routes>
    </Router>
  );
};

export default App;