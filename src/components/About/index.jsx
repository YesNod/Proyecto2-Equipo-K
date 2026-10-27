import React from "react"
import "./styles.css"

const About = () => {
  return (
    <section className="about-section">
      <h2>Sobre Nosotros</h2>

      <div className="about-content">
        <div className="mission">
          <h3>Misión</h3>
          <p>Nuestra misión es democratizar la educación de calidad, proporcionando acceso a cursos profesionales que impulsen el desarrollo de carreras en el mundo digital.</p>
        </div>

        <div className="vision">
          <h3>Objetivos</h3>
          <p>
            Crear una plataforma web eficiente, segura y atractiva que permita la venta de cursos en línea relacionados con el desarrollo web, programación y tecnología, ofreciendo una experiencia de
            usuario excepcional para fomentar el aprendizaje y la adquisición de habilidades digitales
          </p>
        </div>

        <div className="quality-policy">
          <h3>Política de Calidad</h3>
          <ul>
            <li>Contenido actualizado y relevante</li>
            <li>Instructores certificados y con experiencia</li>
            <li>Soporte técnico 24/7</li>
            <li>Garantía de satisfacción</li>
          </ul>
        </div>

        <div className="stats">
          <div className="stat-item">
            <h4>+1000</h4>
            <p>Estudiantes Activos</p>
          </div>
          <div className="stat-item">
            <h4>+50</h4>
            <p>Cursos Disponibles</p>
          </div>
          <div className="stat-item">
            <h4>95%</h4>
            <p>Tasa de Satisfacción</p>
          </div>
        </div>
      </div>

      <div className="company-info">
        <div className="location-details">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed" width="100%" height="400" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className="contact-details">
            <h3>Ubicación Física</h3>
            <p>Av Enrique Díaz de León Sur 782</p>
            <p>Moderna</p>
            <p>44200 Guadalajara, Jal.</p>

            <h3>Redes Sociales</h3>
            <div className="social-links">
              <a href="https://facebook.com/eduonline" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="https://twitter.com/eduonline" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://linkedin.com/company/eduonline" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://instagram.com/eduonline" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
