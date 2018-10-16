import axios from 'axios';
import { GET_NOW_PLAYING_MOVIES, GET_POPULAR_MOVIES, GET_UPCOMING_MOVIES, GET_TOP_RATED_MOVIES } from './types';

// Get Now Playing Movies
export const getNowPlayingMovies = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=${process.env.REACT_APP_LANGUAGE}&page=1`)
        .then(res =>
            dispatch({
                type: GET_NOW_PLAYING_MOVIES,
                payload: res.data.results
            }))
        .catch(err => console.log(err))
}
// Get Popular Movies
export const getPopularMovies = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=${process.env.REACT_APP_LANGUAGE}&page=1`)
        .then(res =>
            dispatch({
                type: GET_POPULAR_MOVIES,
                payload: res.data.results
            }))
        .catch(err => console.log(err))
}
// Get Upcoming Movies
export const getUpcomingMovies = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=${process.env.REACT_APP_LANGUAGE}&page=1`)
        .then(res =>
            dispatch({
                type: GET_UPCOMING_MOVIES,
                payload: res.data.results
            }))
        .catch(err => console.log(err))
}
// Get Top Rated Movies
export const getTopRatedMovies = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=${process.env.REACT_APP_LANGUAGE}&page=1`)
        .then(res =>
            dispatch({
                type: GET_TOP_RATED_MOVIES,
                payload: res.data.results
            }))
        .catch(err => console.log(err))
}