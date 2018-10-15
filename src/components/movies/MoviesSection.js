import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../actions/moviesActions';
import MoviesCarousel from './MoviesCarousel';

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
                    <MoviesCarousel data={this.props.nowPlayingMovies} title="Now Playing" />
                    <MoviesCarousel data={this.props.popularMovies} title="Popular" />
                    <MoviesCarousel data={this.props.topRatedMovies} title="Top Rated" />
                    <MoviesCarousel data={this.props.upcomingMovies} title="Upcoming" />
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

