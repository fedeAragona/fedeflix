import style from '../Css/MovieCard.module.css';
import { Link } from 'react-router-dom';

export function MovieCard ({ movie, search }) {
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
