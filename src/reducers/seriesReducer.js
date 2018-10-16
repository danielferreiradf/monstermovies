import { GET_ON_THE_AIR_SERIES, GET_POPULAR_SERIES, GET_UPCOMING_SERIES, GET_TOP_RATED_SERIES } from '../actions/types';

const initialState = {
    onTheAirSeries: [],
    popularSeries: [],
    topRatedSeries: [],
    upcomingSeries: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ON_THE_AIR_SERIES:
            return {
                ...state,
                onTheAirSeries: action.payload
            }
        case GET_POPULAR_SERIES:
            return {
                ...state,
                popularSeries: action.payload
            }
        case GET_UPCOMING_SERIES:
            return {
                ...state,
                upcomingSeries: action.payload
            }
        case GET_TOP_RATED_SERIES:
            return {
                ...state,
                topRatedSeries: action.payload
            }

        default:
            return state;
    }
}
