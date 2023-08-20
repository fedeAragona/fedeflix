//IMPORTED COMPONENT AND STYLE REQUIRED
import style from '../Css/MovieCard.module.css';
import { Link } from 'react-router-dom';

//OBTAIN THE INFORMATION OF THE FILM THROUGH PROPS TO BE ABLE TO LINK THE DETAILS OF THEM
export function MovieCard ({ movie}) {
    const imageUrl = movie.Poster;
    return (
        <li className={style.movieCard}>
            <Link to={'/movies/' + movie.imdbID}>
                <img width={280} height={400} className={style.movieImage} src={imageUrl} alt={movie.title} />
                <div>{movie.Title}</div>
            </Link>
        </li>
    );
}
