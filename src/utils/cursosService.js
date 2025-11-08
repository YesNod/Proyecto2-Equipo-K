// Servicio para manejar los cursos usando localStorage

// Datos iniciales ficticios
const cursosIniciales = [
  {
    id: 1,
    nombre: 'Introducción a la Programación',
    descripcion: 'Aprende los fundamentos de la programación desde cero',
    instructor: 'Dr. Juan Pérez',
    duracion: '40 horas',
    precio: 299.99,
    categoria: 'Programación'
  },
  {
    id: 2,
    nombre: 'Desarrollo Web con React',
    descripcion: 'Domina React y crea aplicaciones web modernas',
    instructor: 'Ing. María González',
    duracion: '60 horas',
    precio: 399.99,
    categoria: 'Desarrollo Web'
  },
  {
    id: 3,
    nombre: 'Base de Datos SQL',
    descripcion: 'Aprende a diseñar y administrar bases de datos relacionales',
    instructor: 'Lic. Carlos Rodríguez',
    duracion: '50 horas',
    precio: 349.99,
    categoria: 'Base de Datos'
  },
  {
    id: 4,
    nombre: 'Machine Learning Básico',
    descripcion: 'Introducción a la inteligencia artificial y machine learning',
    instructor: 'Dr. Ana Martínez',
    duracion: '80 horas',
    precio: 599.99,
    categoria: 'Inteligencia Artificial'
  },
  {
    id: 5,
    nombre: 'Diseño Gráfico Digital',
    descripcion: 'Crea diseños profesionales con herramientas modernas',
    instructor: 'Diseñador Pedro Sánchez',
    duracion: '45 horas',
    precio: 279.99,
    categoria: 'Diseño'
  }
];

// Inicializar datos si no existen
const inicializarDatos = () => {
  if (!localStorage.getItem('cursos')) {
    localStorage.setItem('cursos', JSON.stringify(cursosIniciales));
    localStorage.setItem('nextId', '6');
  }
};

// Obtener todos los cursos
export const obtenerTodosLosCursos = () => {
  inicializarDatos();
  const cursos = localStorage.getItem('cursos');
  return JSON.parse(cursos);
};

// Obtener un curso por ID
export const obtenerCursoPorId = (id) => {
  const cursos = obtenerTodosLosCursos();
  return cursos.find(curso => curso.id === parseInt(id));
};

// Agregar un nuevo curso
export const agregarCurso = (curso) => {
  const cursos = obtenerTodosLosCursos();
  const nextId = parseInt(localStorage.getItem('nextId')) || 1;
  const nuevoCurso = {
    ...curso,
    id: nextId
  };
  cursos.push(nuevoCurso);
  localStorage.setItem('cursos', JSON.stringify(cursos));
  localStorage.setItem('nextId', (nextId + 1).toString());
  return nuevoCurso;
};

// Actualizar un curso
export const actualizarCurso = (id, cursoActualizado) => {
  const cursos = obtenerTodosLosCursos();
  const index = cursos.findIndex(curso => curso.id === parseInt(id));
  if (index !== -1) {
    cursos[index] = { ...cursoActualizado, id: parseInt(id) };
    localStorage.setItem('cursos', JSON.stringify(cursos));
    return cursos[index];
  }
  return null;
};

// Eliminar un curso
export const eliminarCurso = (id) => {
  const cursos = obtenerTodosLosCursos();
  const cursosFiltrados = cursos.filter(curso => curso.id !== parseInt(id));
  localStorage.setItem('cursos', JSON.stringify(cursosFiltrados));
  return true;
};

