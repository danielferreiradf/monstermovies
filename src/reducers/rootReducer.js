import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import serieReducer from './seriesReducer';

export default combineReducers({
    movies: moviesReducer,
    series: serieReducer
})