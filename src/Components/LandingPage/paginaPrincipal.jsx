import React from 'react';
import './paginaPrincipal.css';
import NavBar from '../nav-bar/navbar';
import Footer from '../footer/footer.jsx'


const LandingPage = () => {
  return (
    <div className='landing-page'>
      <NavBar />
 
      <div className='contenido'>
        <div className='section-1'>
            <div>
                <h3>Agencia de Marketing Digital</h3>
                <p style={{ paddingTOP: '20px' }}>Brindando servivios enfocados al desarrollo de sitos web y contenido publicitario,</p>
                <p style={{ paddingTop: '10px' }}>promocionando el contenido de una empresa en plataformas digitales.</p>
                <p style={{ paddingTop: '10px' }}>Interactuando con el cliente</p>   
                <p style={{ paddingTop: '10px' }}></p>
                {/* <a href=""><button>Contactanos</button></a> */}
                <a href="#" style={{ textDecoration: 'none' }}>
                   <button style={{ 
                        padding: '10px 20px', 
                        backgroundColor: 'white', 
                        color: 'black', 
                        border: 'none', 
                        borderRadius: '5px',
                    }}>Contáctanos</button></a>
                {/* FALTA PONER EL LINK PARA PAGINA CONTACANOS */}
            </div>

        </div>
        <div className='section-2'>
            <div className='contenedor-izquierdo'>
              <img src="Assets/market.jpeg" alt="" style={{ width: '300px', height: '300px' }}/>
            </div>
            <div className='contenedor-derecho'>
              <h4>Por que elegirnos</h4>
              <p style={{ paddingBottom: '1px' }}>Chispa Digital es la empresa indicada para</p>
                <p style={{ paddingTop: '10px' }}>maximizar el impacto de tu marca en el</p>
                <p style={{ paddingTop: '10px' }}>mercado. Empleando tacticas y estrategias</p> 
                <p style={{ paddingTop: '10px' }}>que potencian el trafico y la conversacion</p> 
                <p style={{ paddingTop: '10px' }}>de tu empresa en internet.</p> 
                <p style={{ paddingTop: '10px' }}></p> 
                <p style={{ paddingTop: '10px' }}>Alcanzando un crecimiento y un</p> 
                <p style={{ paddingTop: '10px' }}>posicionamiento de los primeros lugares</p>
                <p style={{ paddingTop: '10px' }}>de busquedas.</p>  
            </div> 
          </div>
        <div className='section-3'>
            <div className='contenedor-iz'>
                    <h5>60%</h5>
                    <h6>de los internautas</h6>
                    <p style={{ paddingTop: '10px' }}>Interacutan con las primeras</p>
                    <p style={{ paddingTop: '10px' }}>publicaciones en plataformas</p>
                    <p style={{ paddingTop: '10px' }}>digitales</p>
            </div>
            <div className='contenedor-dr'>
                    <h7>60%</h7>
                    <h8>de los usuarios</h8>
                    <p style={{ paddingTop: '10px'}}>Hacen click al primer resultado en</p>
                    <p style={{ paddingTop: '10px' }}>Internet</p>
            </div>
        </div>
        <div className='section-4'>
                    <h9>70%</h9>
                    <h10>de las empresas</h10>
                    <p style={{ paddingTop: '10px' }}>Se posicionan en el mercado al</p>
                    <p style={{ paddingTop: '10px' }}>emplear contenido atractivo para</p>
                    <p style={{ paddingTop: '10px' }}>el usuario</p>
        </div>

        <div className='section-video' style={{ display: 'flex', justifyContent: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/RqQ1d1qEWlE" 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{ borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
            ></iframe>
        </div>

        <div className='section-5'>
                    <h11>Transformamos ideas en resultados digitales</h11>
                    <p style={{ paddingTop: '10px' }}></p>
                    <a href="#" style={{ textDecoration: 'none' }}>
                   <button style={{ 
                        padding: '10px 20px', 
                        backgroundColor: 'white', 
                        color: 'black', 
                        border: 'none', 
                        borderRadius: '5px',
                    }}>Contáctanos</button></a>
                {/* FALTA PONER EL LINK PARA PAGINA CONTACANOS */}
        </div>
      <Footer/>
                    
      </div>
    </div>
  );
};

export default LandingPage;
