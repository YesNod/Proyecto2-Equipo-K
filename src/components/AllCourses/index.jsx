import React, {useState} from "react"
import "./styles.css"
import { useNavigate } from "react-router-dom"

const AllCourses = () => {
  const navigate = useNavigate()

  // Array de cursos de ejemplo
  const allCourses = [
    {
      id: 1,
      title: "Desarrollo Web Full Stack",
      rating: 4.8,
      description: "Aprende HTML, CSS, JavaScript, React y Node.js. Crea aplicaciones web completas desde cero.",
      duration: "6 meses",
      level: "Intermedio"
    },
    {
      id: 2,
      title: "Marketing Digital Avanzado",
      rating: 4.7,
      description: "Domina SEO, SEM, análisis de datos y estrategias de marketing digital modernas.",
      duration: "4 meses",
      level: "Avanzado"
    },
    {
      id: 3,
      title: "Diseño UX/UI Profesional",
      rating: 4.9,
      description: "Aprende a crear interfaces intuitivas y experiencias de usuario excepcionales.",
      duration: "5 meses",
      level: "Todos los niveles"
    },
    {
      id: 4,
      title: "JavaScript Avanzado",
      rating: 4.7,
      description: "Profundiza en JavaScript moderno, ES6+, patrones de diseño y mejores prácticas.",
      duration: "3 meses",
      level: "Avanzado"
    },
    {
      id: 5,
      title: "React desde Cero",
      rating: 4.9,
      description: "Aprende React.js, hooks, context, Redux y crea aplicaciones web modernas.",
      duration: "4 meses",
      level: "Intermedio"
    },
    {
      id: 6,
      title: "Desarrollo Backend con Node.js",
      rating: 4.6,
      description: "Construye APIs RESTful, maneja bases de datos y aprende arquitectura de servidores.",
      duration: "5 meses",
      level: "Intermedio"
    },
    {
      id: 7,
      title: "Bases de Datos SQL",
      rating: 4.5,
      description: "Diseña y optimiza bases de datos relacionales. MySQL, PostgreSQL y más.",
      duration: "3 meses",
      level: "Básico"
    },
    {
      id: 8,
      title: "Machine Learning Básico",
      rating: 4.8,
      description: "Introducción a ML con Python, scikit-learn y TensorFlow para principiantes.",
      duration: "4 meses",
      level: "Básico"
    },
    {
      id: 9,
      title: "SEO Avanzado",
      rating: 4.5,
      description: "Optimización para motores de búsqueda, análisis de competencia y estrategias avanzadas.",
      duration: "3 meses",
      level: "Avanzado"
    },
    {
      id: 10,
      title: "Desarrollo de Apps Móviles",
      rating: 4.9,
      description: "Crea aplicaciones móviles con React Native para iOS y Android.",
      duration: "5 meses",
      level: "Intermedio"
    },
    {
      id: 11,
      title: "Cloud Computing AWS",
      rating: 4.7,
      description: "Servicios de AWS, arquitectura en la nube y mejores prácticas de implementación.",
      duration: "4 meses",
      level: "Intermedio"
    },
    {
      id: 12,
      title: "DevOps Fundamentals",
      rating: 4.8,
      description: "CI/CD, Docker, Kubernetes y herramientas de automatización modernas.",
      duration: "6 meses",
      level: "Avanzado"
    },
    {
      id: 13,
      title: "Ciberseguridad Básica",
      rating: 4.6,
      description: "Fundamentos de seguridad informática, ethical hacking y prevención de amenazas.",
      duration: "4 meses",
      level: "Básico"
    },
    {
      id: 14,
      title: "Data Science",
      rating: 4.9,
      description: "Análisis de datos, visualización y técnicas estadísticas con Python y R.",
      duration: "6 meses",
      level: "Intermedio"
    },
    {
      id: 15,
      title: "Blockchain Development",
      rating: 4.7,
      description: "Desarrollo de smart contracts y aplicaciones descentralizadas con Ethereum.",
      duration: "5 meses",
      level: "Avanzado"
    },
    {
      id: 16,
      title: "Gestión de Proyectos Ágiles",
      rating: 4.8,
      description: "Scrum, Kanban y metodologías ágiles para gestión de proyectos modernos.",
      duration: "3 meses",
      level: "Todos los niveles"
    },
    {
      id: 17,
      title: "Inteligencia Artificial con Python",
      rating: 4.9,
      description: "Deep Learning, redes neuronales y procesamiento de lenguaje natural.",
      duration: "6 meses",
      level: "Avanzado"
    },
    {
      id: 18,
      title: "Desarrollo de Videojuegos Unity",
      rating: 4.7,
      description: "Crea juegos 2D y 3D con Unity y C#. Incluye física y animaciones.",
      duration: "5 meses",
      level: "Intermedio"
    },
    {
      id: 19,
      title: "Análisis de Datos con R",
      rating: 4.6,
      description: "Estadística aplicada, visualización de datos y machine learning con R.",
      duration: "4 meses",
      level: "Intermedio"
    },
    {
      id: 20,
      title: "Diseño de Interfaces Móviles",
      rating: 4.8,
      description: "Principios de diseño móvil, prototipado y testing de usabilidad.",
      duration: "3 meses",
      level: "Intermedio"
    },
    {
      id: 21,
      title: "Marketing en Redes Sociales",
      rating: 4.7,
      description: "Estrategias de contenido, publicidad y análisis para redes sociales.",
      duration: "3 meses",
      level: "Básico"
    },
    {
      id: 22,
      title: "Desarrollo Frontend Angular",
      rating: 4.8,
      description: "Desarrollo web con Angular, TypeScript y patrones de diseño modernos.",
      duration: "5 meses",
      level: "Intermedio"
    },
    {
      id: 23,
      title: "Vue.js para Principiantes",
      rating: 4.6,
      description: "Fundamentos de Vue.js, Vuex y desarrollo de SPAs modernas.",
      duration: "4 meses",
      level: "Básico"
    },
    {
      id: 24,
      title: "Administración de Bases de Datos",
      rating: 4.7,
      description: "Gestión, optimización y mantenimiento de bases de datos empresariales.",
      duration: "4 meses",
      level: "Avanzado"
    },
    {
      id: 25,
      title: "Testing y QA Automation",
      rating: 4.8,
      description: "Pruebas automatizadas, Selenium, Jest y estrategias de QA modernas.",
      duration: "4 meses",
      level: "Intermedio"
    }
  ]

  const coursesPerPage = 15
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(allCourses.length / coursesPerPage)

  const displayedCourses = allCourses.slice(currentPage * coursesPerPage, (currentPage + 1) * coursesPerPage)

  return (
    <section className="all-courses-section">
      <h2>Todos los Cursos</h2>

      <div className="courses-grid">
        {displayedCourses.map((course) => (
          <div key={course.id} className="course-item">
            <div className="course-header">
              <h3>{course.title}</h3>
              <div className="rating">
                <span className="stars">{"★".repeat(Math.floor(course.rating))}</span>
                <span className="rating-number">{course.rating}</span>
              </div>
            </div>
            <div className="course-content">
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span className="duration">
                  <i className="far fa-clock"></i> {course.duration}
                </span>
                <span className="level">
                  <i className="fas fa-signal"></i> {course.level}
                </span>
              </div>
            </div>
            <button className="start-button" onClick={() => navigate(`/curso/${course.id}`)}>Iniciar</button>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 0} className="page-button">
            ←
          </button>
          <span className="page-info">
            Página {currentPage + 1} de {totalPages}
          </span>
          <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === totalPages - 1} className="page-button">
            →
          </button>
        </div>
      )}
    </section>
  )
}

export default AllCourses
