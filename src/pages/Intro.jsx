//IMPORT LIBRARIES, COMPONENTS, STYLES AND NECESSARY FUNCTIONS
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../Css/Intro.module.css';
import { getUser } from '../services/auth';
import {useNavigate} from 'react-router-dom';

export function Intro() {
    const navigate = useNavigate();

    //VERIFY IF I HAVE A LOADED USER AND USE THE NAVIGATE FUNCTION TO REDIRECT
    useEffect(() => { 
        const user = getUser();
        if (user) navigate('/');
    },[navigate]);

    //IF SUCH CONDITION PASSES, I RENDER INTRO
    return (
        <div className={style.container}>
            <video autoPlay muted loop className={style.video}>
                <source src="\video.mp4" type="video/mp4" />
            </video>
            <div className={style.content}>
                <h1>Bienvenido a </h1>
                <img className={style.introLogo} alt='logo' src='Logo.png'></img>
            </div>
            <Link to={'/Login'}><button className={style.button}>Ingresar</button></Link>
        </div>
    );
}
