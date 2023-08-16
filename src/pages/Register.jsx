import React, { useState, useEffect } from 'react';
import style from '../Css/Register.module.css';
import { useNavigate } from 'react-router-dom';
import { logout, register } from '../services/auth';
import { Link } from 'react-router-dom';

export function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handlePasswordConfirmChange = (e) => setPasswordConfirm(e.target.value);

    useEffect(() => {
        logout();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (register(email, password, passwordConfirm)) navigate('/home');
        else setError(true);
    };

    return (
        <div className={style.container}>
            <img className={style.RegisterLogo} alt='logo' src='Logo.png'></img>
            <div>
                <div className={style.content}>
                    <h1>Registro</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Correo Electrónico" value={email} onChange={handleEmailChange} />
                        <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
                        <input type="password" placeholder="Confirmar Contraseña" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
                        <button type="submit">Registrarse</button>
                    </form>
                    <p>¿Ya tienes una cuenta?</p><Link to={'/login'}><p className={style.ingresaAhora}>Ingresa ahora</p></Link>
                    {error && <p className={style.error}>Todos los campos son obligatorios y las contraseñas deben coincidir</p>}
                </div>
            </div>
        </div>
    );
}
