import React, { Fragment } from 'react';
import MoviesContentNowPlayingMovies from './MoviesContentNowPlayingMovies';
import MoviesContentPopularMovies from './MoviesContentPopularMovies';
import MoviesContentUpcomingMovies from './MoviesContentUpcomingMovies';
import MoviesContentTopRatedMovies from './MoviesContentTopRatedMovies';


function MoviesSection() {
    return (
        <Fragment>
            <MoviesContentNowPlayingMovies title="Now Playing Movies" />
            <MoviesContentPopularMovies title="Popular Movies" />
            <MoviesContentTopRatedMovies title="Top Rated Movies" />
            <MoviesContentUpcomingMovies title="Upcoming Movies" />
        </Fragment>
    )
}

export default MoviesSection;
