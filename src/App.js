import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './Components/LandingPage/paginaPrincipal';
import LoginForm from './Components/LoginForm/LoginForm';

const App = () => {
  return (
    <Router>
      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;