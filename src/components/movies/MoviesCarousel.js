import React, { Component } from 'react';
import "latte-carousel/dist/latte-carousel.min.css";
import { LatteCarousel, LatteItem } from 'react-latte-carousel';
import MoviesCard from './MoviesCard';

const MoviesCarousel = ({ data }) => {
    const moviesList = data.map(movie => {
        return (
            <LatteItem key={movie.id}>
                <div >
                    <MoviesCard title={movie.title} poster={movie.poster_path} release={movie.release_date} score={movie.vote_average} />
                </div>
            </LatteItem>
        )
    })

    const options = {
        count: 1,
        touch: true,
        buttons: true,
        // dots: true,
        rewind: true,
        autoplay: 0,
        animation: 500,
        responsive: {
            "0": { count: 2, buttons: false, },
            "480": { count: 2, buttons: false, },
            "768": { count: 4, },
            "1440": { count: 5, },
        },
    }


    return (
        <div className="">
            <LatteCarousel options={options}>
                {moviesList}
            </LatteCarousel>
        </div>
    );
}



export default MoviesCarousel
