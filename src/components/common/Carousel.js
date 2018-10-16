import React from 'react';
import "latte-carousel/dist/latte-carousel.min.css";
import { LatteCarousel, LatteItem } from 'react-latte-carousel';
import Card from './Card';

const Carousel = ({ data, title, link }) => {
    const moviesList = data.map(movie => {
        return (
            <LatteItem key={movie.id}>
                <div>
                    <Card id={movie.id} title={movie.title} poster={movie.poster_path} release={movie.release_date} score={movie.vote_average} link={link} />
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
            "0": { count: 2.2, buttons: false, },
            "480": { count: 2.2, buttons: false, },
            "768": { count: 4.2, },
            "1440": { count: 5.2, },
        },
    }


    return (
        <div className="">
            <h1 className="heading-3 p-10"><i className="fa fa-film" /> {title}</h1>
            <LatteCarousel options={options}>
                {moviesList}
            </LatteCarousel>
        </div>
    );
}



export default Carousel
