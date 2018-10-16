import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOnTheAirSeries, getPopularSeries, getTopRatedSeries, getUpcomingSeries } from '../../actions/seriesActions';
import Carousel from '../common/Carousel';

export class SeriesSection extends Component {
    componentDidMount() {
        this.props.getOnTheAirSeries();
        this.props.getPopularSeries();
        this.props.getUpcomingSeries();
        this.props.getTopRatedSeries();
    }

    render() {
        // console.log(this.props)
        return (
            <div className="seriesection">
                <div className="container">
                    <Carousel data={this.props.onTheAirSeries} title="On The Air" link="series" />
                    <Carousel data={this.props.upcomingSeries} title="Upcoming" link="series" />
                    <Carousel data={this.props.popularSeries} title="Popular" link="series" />
                    <Carousel data={this.props.topRatedSeries} title="Top Rated" link="series" />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    onTheAirSeries: state.series.onTheAirSeries,
    upcomingSeries: state.series.upcomingSeries,
    popularSeries: state.series.popularSeries,
    topRatedSeries: state.series.topRatedSeries
});

export default connect(mapStateToProps, { getOnTheAirSeries, getUpcomingSeries, getPopularSeries, getTopRatedSeries })(SeriesSection);

