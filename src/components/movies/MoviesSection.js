import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../actions/moviesActions';
import Carousel from '../common/Carousel';

export class MoviesSection extends Component {
    componentDidMount() {
        this.props.getNowPlayingMovies();
        this.props.getPopularMovies();
        this.props.getTopRatedMovies();
        this.props.getUpcomingMovies();
    }

    render() {
        // console.log(this.props)
        console.log(this.props)
        return (
            <div className="moviessection">
                <div className="container">
                    <Carousel data={this.props.nowPlayingMovies} link="movies" title="Now Playing" />
                    <Carousel data={this.props.popularMovies} title="Popular" link="movies" />
                    <Carousel data={this.props.topRatedMovies} title="Top Rated" link="movies" />
                    <Carousel data={this.props.upcomingMovies} title="Upcoming" link="movies" />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    nowPlayingMovies: state.movies.nowPlayingMovies,
    popularMovies: state.movies.popularMovies,
    topRatedMovies: state.movies.topRatedMovies,
    upcomingMovies: state.movies.upcomingMovies
});

export default connect(mapStateToProps, { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies })(MoviesSection);

