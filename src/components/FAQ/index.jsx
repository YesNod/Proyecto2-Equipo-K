import React, { useState } from 'react';
import './styles.css';

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo funcionan los cursos en línea?",
      answer: "Los cursos están disponibles 24/7 y puedes acceder desde cualquier dispositivo. Incluyen videos, material descargable, ejercicios prácticos y evaluaciones."
    },

    {
      question: "¿Los cursos incluyen certificado?",
      answer: "Sí, al completar el curso recibirás un certificado digital que podrás compartir en tu CV y redes profesionales."
    },

    {
      question: "¿Cuáles son los métodos de pago aceptados?",
      answer: "Aceptamos tarjetas de crédito/débito, PayPal y transferencias bancarias."
    },

    {
      question: "¿Hay plazo límite para completar los cursos?",
      answer: "No, una vez inscrito tienes acceso ilimitado al contenido del curso."
    },
    
    {
      question: "¿Ofrecen soporte durante el curso?",
      answer: "Sí, contamos con soporte técnico 24/7 y los instructores responden consultas en un plazo máximo de 48 horas."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className="faq-question"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 