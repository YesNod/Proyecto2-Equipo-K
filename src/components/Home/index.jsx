import React from "react"
import "./styles.css"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const featuredCourses = [
    {
      id: 1,
      title: "Desarrollo Web Full Stack",
      instructor: "Prof. María González",
      price: 299.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Zv4b0ta-yl_Dh7dOotkZ05ffe4Zltf6olA&s",
      rating: 4.8,
      description: "Domina HTML, CSS, JavaScript, React, Node.js y MongoDB. Incluye 50+ horas de video, proyectos reales y certificación.",
      duration: "6 meses",
      level: "Intermedio",
      students: 1500,
    },

    {
      id: 2,
      title: "Marketing Digital Avanzado",
      instructor: "Prof. Juan Pérez",
      price: 199.99,
      image: "/images/marketing.png",
      rating: 4.7,
      description: "Aprende SEO, SEM, Analytics, Email Marketing y Redes Sociales. Casos prácticos y herramientas profesionales incluidas.",
      duration: "4 meses",
      level: "Avanzado",
      students: 1200,
    },
    
    {
      id: 3,
      title: "Diseño UX/UI Profesional",
      instructor: "Prof. Ana Silva",
      price: 249.99,
      image: "/images/uxui.jpg",
      rating: 4.9,
      description: "Figma, Adobe XD, principios de diseño, psicología del usuario y prototipado. Portfolio profesional al finalizar.",
      duration: "5 meses",
      level: "Todos los niveles",
      students: 900,
    },
  ]

  return (
    <section className="home-section">
      <div className="hero">
        <h1>Aprende con los Mejores Profesionales</h1>
        <p>Cursos en línea de alta calidad para impulsar tu carrera</p>
        <div className="search-bar">
          <input type="text" placeholder="¿Qué te gustaría aprender?" />
          <button>Buscar</button>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <i className="icon-certificate"></i>
          <h3>Certificación Profesional</h3>
          <p>Obtén certificados reconocidos en la industria</p>
        </div>
        <div className="feature">
          <i className="icon-expert"></i>
          <h3>Instructores Expertos</h3>
          <p>Aprende de profesionales con experiencia</p>
        </div>
        <div className="feature">
          <i className="icon-flexible"></i>
          <h3>Aprendizaje Flexible</h3>
          <p>Estudia a tu propio ritmo</p>
        </div>
      </div>

      <div className="featured-courses">
        <h2>Cursos Destacados</h2>
        <div className="course-grid">
          {featuredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>{course.instructor}</p>
                <div className="rating">★ {course.rating}</div>
                <div className="price">${course.price}</div>
                <button className="enroll-btn" onClick={() => navigate(`/curso/${course.id}`)}>Inscribirse</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
