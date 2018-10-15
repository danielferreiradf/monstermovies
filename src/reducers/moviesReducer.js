import { GET_NOW_PLAYING_MOVIES, GET_POPULAR_MOVIES, GET_UPCOMING_MOVIES, GET_TOP_RATED_MOVIES } from '../actions/types';

const initialState = {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowPlayingMovies: action.payload
            }
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.payload
            }
        case GET_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: action.payload
            }
        case GET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: action.payload
            }

        default:
            return state;
    }
}
