import axios from 'axios';
import { GET_ON_THE_AIR_SERIES, GET_POPULAR_SERIES, GET_UPCOMING_SERIES, GET_TOP_RATED_SERIES } from '../actions/types';



// Get On The Air Series
export const getOnTheAirSeries = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=${process.env.REACT_APP_LANGUAGE}&page=1`)
        .then(res =>
            dispatch({
                type: GET_ON_THE_AIR_SERIES,
                payload: res.data.results
            }))
        .catch(err => console.log(err))
}
// Get Popular Series
export const getPopularSeries = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=${process.env.REACT_APP_LANGUAGE}&page=1`)
        .then(res =>
            dispatch({
                type: GET_POPULAR_SERIES,
                payload: res.data.results
            }))
        .catch(err => console.log(err))
}
// Get Upcoming Series
export const getUpcomingSeries = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=${process.env.REACT_APP_LANGUAGE}&page=1`)
        .then(res =>
            dispatch({
                type: GET_UPCOMING_SERIES,
                payload: res.data.results
            }))
        .catch(err => console.log(err))
}
// Get Top Rated Series
export const getTopRatedSeries = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=${process.env.REACT_APP_LANGUAGE}&page=1`)
        .then(res =>
            dispatch({
                type: GET_TOP_RATED_SERIES,
                payload: res.data.results
            }))
        .catch(err => console.log(err))
}