import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { obtenerCursoPorId, eliminarCurso } from '../../utils/cursosService';
import './CursoDetail.css';

const CursoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarCurso();
  }, [id]);

  const cargarCurso = () => {
    setLoading(true);
    const cursoData = obtenerCursoPorId(id);
    if (cursoData) {
      setCurso(cursoData);
    }
    setLoading(false);
  };

  const handleEliminar = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este curso?')) {
      eliminarCurso(id);
      navigate('/');
    }
  };

  if (loading) {
    return <div className="loading">Cargando curso...</div>;
  }

  if (!curso) {
    return (
      <div className="curso-no-encontrado">
        <h2>Curso no encontrado</h2>
        <Link to="/" className="btn-volver">
          Volver a la lista
        </Link>
      </div>
    );
  }

  return (
    <div className="curso-detail-container">
      <div className="curso-detail-header">
        <Link to="/" className="btn-volver">
          ← Volver a la lista
        </Link>
        <div className="curso-detail-acciones">
          <Link to={`/cursos/${id}/editar`} className="btn-editar">
            Editar Curso
          </Link>
          <button onClick={handleEliminar} className="btn-eliminar">
            Eliminar Curso
          </button>
        </div>
      </div>

      <div className="curso-detail-card">
        <div className="curso-detail-title">
          <h1>{curso.nombre}</h1>
          <span className="categoria-badge">{curso.categoria}</span>
        </div>

        <div className="curso-detail-content">
          <div className="curso-detail-section">
            <h3>Descripción</h3>
            <p>{curso.descripcion}</p>
          </div>

          <div className="curso-detail-info-grid">
            <div className="info-item">
              <h4>Instructor</h4>
              <p>{curso.instructor}</p>
            </div>
            <div className="info-item">
              <h4>Duración</h4>
              <p>{curso.duracion}</p>
            </div>
            <div className="info-item">
              <h4>Precio</h4>
              <p className="precio">${curso.precio}</p>
            </div>
            <div className="info-item">
              <h4>Categoría</h4>
              <p>{curso.categoria}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoDetail;

