import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { obtenerTodosLosCursos, eliminarCurso } from '../../utils/cursosService';
import { convertirUrlAEmbed } from '../../utils/youtubeHelper';
import './CursosList.css';

const CursosList = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarCursos();
  }, []);

  const cargarCursos = () => {
    setLoading(true);
    const cursosData = obtenerTodosLosCursos();
    setCursos(cursosData);
    setLoading(false);
  };

  const handleEliminar = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este curso?')) {
      eliminarCurso(id);
      cargarCursos();
    }
  };

  if (loading) {
    return <div className="loading">Cargando cursos...</div>;
  }

  return (
    <div className="cursos-container">
      <div className="cursos-header">
        <h1>Gestión de Cursos</h1>
        <Link to="/cursos/nuevo" className="btn-agregar">
          + Agregar Nuevo Curso
        </Link>
      </div>

      {cursos.length === 0 ? (
        <div className="sin-cursos">
          <p>No hay cursos disponibles</p>
          <Link to="/cursos/nuevo" className="btn-agregar">
            Agregar Primer Curso
          </Link>
        </div>
      ) : (
        <div className="cursos-grid">
          {cursos.map((curso) => (
            <div key={curso.id} className="curso-card">
              {curso.videoUrl && convertirUrlAEmbed(curso.videoUrl) && (
                <div className="curso-video-preview">
                  <iframe
                    src={convertirUrlAEmbed(curso.videoUrl)}
                    title={`Video de ${curso.nombre}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="curso-video-iframe"
                  ></iframe>
                </div>
              )}
              <div className="curso-header">
                <h2>{curso.nombre}</h2>
                <span className="categoria-badge">{curso.categoria}</span>
              </div>
              <p className="curso-descripcion">{curso.descripcion}</p>
              <div className="curso-info">
                <p><strong>Instructor:</strong> {curso.instructor}</p>
                <p><strong>Duración:</strong> {curso.duracion}</p>
                <p><strong>Precio:</strong> ${curso.precio}</p>
              </div>
              <div className="curso-acciones">
                <Link to={`/cursos/${curso.id}`} className="btn-ver">
                  Ver Detalles
                </Link>
                <Link to={`/cursos/${curso.id}/editar`} className="btn-editar">
                  Editar
                </Link>
                <button
                  onClick={() => handleEliminar(curso.id)}
                  className="btn-eliminar"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CursosList;

