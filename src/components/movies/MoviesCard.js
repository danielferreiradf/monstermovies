import React from 'react';
import { Link } from 'react-router-dom';

const MoviesCard = ({ id, title, poster, release }) => {
    return (
        <Link to={`/movies/${id}`}>
            <div className="moviescard">
                <div className="moviescard__content">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="Poster" className="moviescard__image" />
                    <p className="moviescard__subtitle">Release Date: {release}</p>
                </div>
            </div>
        </Link>
    )
}

export default MoviesCard
