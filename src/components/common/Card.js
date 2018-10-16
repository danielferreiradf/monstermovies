import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, poster, release, link }) => {
    return (
        <Link to={`/${link}/${id}`}>
            <div className="moviescard">
                <div className="moviescard__content">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="Poster" className="moviescard__image" />
                </div>
            </div>
        </Link>
    )
}

export default Card
