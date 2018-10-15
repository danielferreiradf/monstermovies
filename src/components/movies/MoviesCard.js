import React from 'react';

const MoviesCard = ({ title, poster, release }) => {
    return (
        <div className="moviescard">
            <div className="moviescard__content">
                <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="Poster" className="moviescard__image" />
                <h1 className="moviescard__title">{title}</h1>
                <p className="moviescard__subtitle">Release Date: {release}</p>
            </div>
        </div>
    )
}

export default MoviesCard