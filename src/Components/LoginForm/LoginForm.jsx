import React from 'react';
import './LoginForm.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";

const LoginForm = () => {
  return (
    <div className="login-page">
        <div className='wrapper'>
            <form action="">
                <h1>Identificate</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuario' required />
                    <FaRegCircleUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Contraseña' required />
                    <MdLockOutline className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Recuerdame</label>
                    <a href="#">¿Olvidaste la contraseña?</a>
                </div>
                <button type="submit">Ingresar</button>
                <div className="register-link">
                    <p>¿No tienes una cuenta? <a href="#">Registrate</a></p>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginForm;
