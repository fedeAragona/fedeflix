//IMPORT LIBRARIES, COMPONENTS, STYLES AND NECESSARY FUNCTIONS
import React, { useState, useEffect } from 'react';
import style from '../Css/Login.module.css';
import {useNavigate} from 'react-router-dom';
import { login, logout } from '../services/auth';
import { Link } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();

    //I USE THE USESTATE HOOK TO SET INITIAL VALUE IN THE VARIABLES FOR THE LOGIN
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    //KEEP VALUES UPDATED
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    //IF I AM IN LOGIN, THE USER IS FORCED TO LOGOUT
    useEffect(() => {
        logout();
    }, []);

    //I PREVENT THE RELOADING OF THE PAGE AND VALIDATE THE LOGIN, IF IT MEETS THE CONDITION, IT IS REDIRECTED TO HOME
    const handleSubmit = (e) => {
        e.preventDefault();

        if (login(email, password)) navigate('/home');
        else setError(true);
    };
    
    //AMOUNT LOGIN FORM
    return (
        <div className={style.container}>
            <img className={style.loginLogo} alt='logo' src='Logo.png'></img>
            <div>
                <div className={style.content}>
                    <h1>Iniciar Sesión</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                        <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                    <p>¿No tienes una cuenta?</p><Link to={'/register'}><p className={style.registrarse}>Regístrate ahora</p></Link>
                    {error && <p className={style.error}>Todos los campos son obligatorios</p>}
                </div>
            </div>
        </div>
    );
}
