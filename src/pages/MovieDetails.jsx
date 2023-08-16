import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from '../Css/MovieDetails.module.css';
import {config} from '../config';
import { getUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export function MovieDetails() {
    const { movieId } = useParams();
    const [peli, setPeli] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${config.API_BASE}?i=${movieId}&apikey=42cb52&`)
            .then(result => result.json())
            .then(data => {
                setPeli(data);
            });
    }, [movieId]);

    useEffect(() => {
        const userResponse = getUser();
        if (!userResponse) navigate('/login');
    }, [navigate]);

    if (!peli) return null;
    
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
                </div>
            </div>
        </div> 
    );
}
