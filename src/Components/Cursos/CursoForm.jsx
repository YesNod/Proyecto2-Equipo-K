import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  obtenerCursoPorId,
  agregarCurso,
  actualizarCurso
} from '../../utils/cursosService';
import './CursoForm.css';

const CursoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const esEdicion = Boolean(id);

  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    instructor: '',
    duracion: '',
    precio: '',
    categoria: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const cargarCurso = useCallback(() => {
    const curso = obtenerCursoPorId(id);
    if (curso) {
      setFormData({
        nombre: curso.nombre || '',
        descripcion: curso.descripcion || '',
        instructor: curso.instructor || '',
        duracion: curso.duracion || '',
        precio: curso.precio ? String(curso.precio) : '',
        categoria: curso.categoria || ''
      });
    }
  }, [id]);

  useEffect(() => {
    if (esEdicion) {
      cargarCurso();
    }
  }, [esEdicion, cargarCurso]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.descripcion.trim()) {
      newErrors.descripcion = 'La descripción es requerida';
    }

    if (!formData.instructor.trim()) {
      newErrors.instructor = 'El instructor es requerido';
    }

    if (!formData.duracion.trim()) {
      newErrors.duracion = 'La duración es requerida';
    }

    const precioStr = String(formData.precio || '').trim();
    if (!precioStr) {
      newErrors.precio = 'El precio es requerido';
    } else if (isNaN(precioStr) || parseFloat(precioStr) <= 0) {
      newErrors.precio = 'El precio debe ser un número válido mayor a 0';
    }

    if (!formData.categoria.trim()) {
      newErrors.categoria = 'La categoría es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);

    const cursoData = {
      nombre: formData.nombre.trim(),
      descripcion: formData.descripcion.trim(),
      instructor: formData.instructor.trim(),
      duracion: formData.duracion.trim(),
      precio: parseFloat(formData.precio),
      categoria: formData.categoria.trim()
    };

    if (esEdicion) {
      actualizarCurso(id, cursoData);
    } else {
      agregarCurso(cursoData);
    }

    setLoading(false);
    navigate('/');
  };

  return (
    <div className="curso-form-container">
      <div className="curso-form-header">
        <Link to="/" className="btn-volver">
          ← Volver a la lista
        </Link>
        <h1>{esEdicion ? 'Editar Curso' : 'Agregar Nuevo Curso'}</h1>
      </div>

      <div className="curso-form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">
              Nombre del Curso <span className="required">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={errors.nombre ? 'error' : ''}
              placeholder="Ej: Introducción a la Programación"
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">
              Descripción <span className="required">*</span>
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              className={errors.descripcion ? 'error' : ''}
              placeholder="Describe el contenido del curso..."
              rows="4"
            />
            {errors.descripcion && (
              <span className="error-message">{errors.descripcion}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="instructor">
                Instructor <span className="required">*</span>
              </label>
              <input
                type="text"
                id="instructor"
                name="instructor"
                value={formData.instructor}
                onChange={handleChange}
                className={errors.instructor ? 'error' : ''}
                placeholder="Ej: Dr. Juan Pérez"
              />
              {errors.instructor && (
                <span className="error-message">{errors.instructor}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="duracion">
                Duración <span className="required">*</span>
              </label>
              <input
                type="text"
                id="duracion"
                name="duracion"
                value={formData.duracion}
                onChange={handleChange}
                className={errors.duracion ? 'error' : ''}
                placeholder="Ej: 40 horas"
              />
              {errors.duracion && (
                <span className="error-message">{errors.duracion}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="precio">
                Precio <span className="required">*</span>
              </label>
              <input
                type="number"
                id="precio"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                className={errors.precio ? 'error' : ''}
                placeholder="Ej: 299.99"
                step="0.01"
                min="0"
              />
              {errors.precio && (
                <span className="error-message">{errors.precio}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="categoria">
                Categoría <span className="required">*</span>
              </label>
              <input
                type="text"
                id="categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                className={errors.categoria ? 'error' : ''}
                placeholder="Ej: Programación"
              />
              {errors.categoria && (
                <span className="error-message">{errors.categoria}</span>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn-cancelar"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-guardar"
              disabled={loading}
            >
              {loading ? 'Guardando...' : esEdicion ? 'Actualizar Curso' : 'Agregar Curso'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CursoForm;

