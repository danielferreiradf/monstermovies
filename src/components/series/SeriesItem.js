import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOnTheAirSeries, getPopularSeries, getTopRatedSeries, getUpcomingSeries } from '../../actions/seriesActions';
import SeriesItemPage from './SeriesItemPage';

export class MovieItem extends Component {

    componentDidMount() {
        this.props.getOnTheAirSeries();
        this.props.getPopularSeries();
        this.props.getTopRatedSeries();
        this.props.getUpcomingSeries();
    }

    render() {
        const id = parseInt(this.props.match.params.id)
        let resultMovie;
        let showItem;

        if (this.props.onTheAirSeries.find(movie => movie.id === id)) {
            resultMovie = this.props.onTheAirSeries.find(movie => movie.id === id)
            showItem = <SeriesItemPage data={resultMovie} />

        }
        if (this.props.popularSeries.find(movie => movie.id === id)) {
            resultMovie = this.props.popularSeries.find(movie => movie.id === id)
            showItem = <SeriesItemPage data={resultMovie} />

        }
        if (this.props.topRatedSeries.find(movie => movie.id === id)) {
            resultMovie = this.props.topRatedSeries.find(movie => movie.id === id)
            showItem = <SeriesItemPage data={resultMovie} />

        }
        if (this.props.upcomingSeries.find(movie => movie.id === id)) {
            resultMovie = this.props.upcomingSeries.find(movie => movie.id === id)
            showItem = <SeriesItemPage data={resultMovie} />
        }
        console.log(resultMovie);


        return (
            <div className="moviessection">
                {showItem}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        onTheAirSeries: state.series.onTheAirSeries,
        popularSeries: state.series.popularSeries,
        topRatedSeries: state.series.topRatedSeries,
        upcomingSeries: state.series.upcomingSeries

    }
}

export default connect(mapStateToProps, { getOnTheAirSeries, getUpcomingSeries, getPopularSeries, getTopRatedSeries })(MovieItem);

