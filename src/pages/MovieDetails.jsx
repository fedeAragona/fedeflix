//IMPORT LIBRARIES, COMPONENTS, STYLES AND NECESSARY FUNCTIONS
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from '../Css/MovieDetails.module.css';
import {config} from '../config';
import { getUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

//I USE THE PARAMETERS OF THE URL TO MAKE THE SEARCH FOR THE FILM THROUGH THE ID
export function MovieDetails() {
    const { movieId } = useParams();
    const [peli, setPeli] = useState(null);
    const navigate = useNavigate();

    //I MADE THE PARTICULAR QUERY TO THE API. I REUSE THE INFORMATION FROM THE API IMPORTING CONFIG
    useEffect(() => {
        fetch(`${config.API_BASE}?i=${movieId}&apikey=42cb52&`)
            .then(result => result.json())
            .then(data => {
                setPeli(data);
            });
    }, [movieId]);

    //VERIFY IF THE USER IS AUTHENTICATED BEFORE LOADING THE COMPONENT
    useEffect(() => {
        const userResponse = getUser();
        if (!userResponse) navigate('/login');
    }, [navigate]);

    if (!peli) return null;
    
    //MOUNT THE FILM DETAILS
    return (
        <div>
            <img className={style.imgBackground} src={peli.Poster} alt={peli.Title}></img>
            <div className={style.detailsContainer}>
                <img
                    className={`${style.col} ${style.movieImage}`}
                    src={peli.Poster}
                    alt={peli.Title}
                />
                <div className={`${style.col} ${style.movieDetails}`}>
                    <p className={style.firstItem}>
                        <strong>Titulo:</strong> {peli.Title}
                    </p>
                    <p>
                        <strong>Año de lanzamiento:</strong> {peli.Year}
                    </p>
                    <p>
                        <strong>Genero:</strong>{' '}
                        {peli.Genre}
                    </p>
                    <p>
                        <strong>Descripcion:</strong> {peli.Plot}
                    </p>
                    <br />
                    <dir className={style.contenedorYoutube}>
                        <a href={`https://www.youtube.com/results?search_query=${peli.Title} trailer`} target='_blank' rel='noopener noreferrer'><button className={style.buttonTrailer}>Ver trailer</button></a>
                        <img className={style.youtube} src="/youtube.png" alt="youtube" />
                    </dir>
                </div>
            </div>
        </div> 
    );
}
