//IMPORT LIBRARIES, COMPONENTS, STYLES AND NECESSARY FUNCTIONS
import { useLocation } from 'react-router-dom';
import { MovieCard } from './MovieCard';
import style from '../Css/MovieGrid.module.css';
import { useEffect, useState } from 'react';

//GET QUERY PARAMETERS FROM URL
function useQuery () {
    return new URLSearchParams(useLocation().search);
}

//SET VALUES AND SET PARAMETERS
export function MoviesGrid () {
    const moviesState = useState([]);
    const movies = moviesState[0];
    const setMovies = moviesState[1];

    const query = useQuery();
    const search = query.get('search');

    //OBTAIN THE PARAMETERS, ASSEMBLE THE QUERY TO THE API AND SAVE THE DATA OBTAINED
    useEffect(() => {
        const searchUrl = search || 'shrek';

        const updateMovies = (newMovies) => {
            setMovies(newMovies);
        };

        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=42cb52&s=' + searchUrl)
            .then(respuesta => respuesta.json())
            .then(data => {
                updateMovies(data.Search);
            });
    }, [search, setMovies]);

    //CHECK IF QUERY RESULTS ARE FOUND
    if (!movies)
        return (
            <div>
                <p className={style.error}>No encontramos coincidencias para ese titulo</p>
            </div>
        );

    //IF I RECEIVE POSITIVE RESULTS, I RENDER THE MOVIE GRID AND RUN THE MOVIECARD COMPONENT
    return (
        <ul>
            <div className={style.movieTitle}>
                <h2>Buscando resultados para: {search || 'Shrek'}</h2>
            </div>
            <div className={style.movieGrid}>
                {movies.map((movie) =>
                    (<MovieCard
                        key={movie.imdbID}
                        movie={movie}
                    />
                    )
                )}
            </div>
        </ul>
    );
};
