import React from 'react';
import './footer.css'
function Footer() {
    return (
        <footer>
            <div className='contenidoFo'>
                <div>
                    <img src="Assets/telefono.jpeg" alt="" style={{ width: '50px', height: '50px' }}/>
                    <p style={{ paddingTop: '10px' }}>33 2517 1422</p> 
                 </div>
                <div>
                    <img src="Assets/chispadig.jpeg" alt="" style={{ width: '300px', height: '200px' }}/>
                </div>
                <div>
                    <img src="Assets/face.jpeg" alt="" style={{ width: '50px', height: '50px' }}/>
                    <img src="Assets/insta.jpeg" alt="" style={{ width: '50px', height: '50px' }}/>
                    <img src="Assets/x.jpeg" alt="" style={{ width: '50px', height: '50px' }}/>
                    <img src="Assets/ticktoc.jpeg" alt="" style={{ width: '50px', height: '50px' }}/>
                    <img src="Assets/youtube.jpeg" alt="" style={{ width: '50px', height: '50px' }}/>
                </div>
            </div>
            <div className='correo'>
                 <p style={{ paddingTop: '10px' }}>www.chispadigital.com</p> 
            </div>
        </footer>
    );
}

export default Footer;
