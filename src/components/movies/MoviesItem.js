import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../actions/moviesActions';
import MoviesItemPage from './MoviesItemPage';

export class MovieItem extends Component {

    componentDidMount() {
        this.props.getNowPlayingMovies();
        this.props.getPopularMovies();
        this.props.getTopRatedMovies();
        this.props.getUpcomingMovies();
    }

    render() {
        const id = parseInt(this.props.match.params.id)
        let resultMovie;
        let showItem;

        if (this.props.nowPlayingMovies.find(movie => movie.id === id)) {
            resultMovie = this.props.nowPlayingMovies.find(movie => movie.id === id)
            showItem = <MoviesItemPage data={resultMovie} />

        }
        if (this.props.popularMovies.find(movie => movie.id === id)) {
            resultMovie = this.props.popularMovies.find(movie => movie.id === id)
            showItem = <MoviesItemPage data={resultMovie} />

        }
        if (this.props.topRatedMovies.find(movie => movie.id === id)) {
            resultMovie = this.props.topRatedMovies.find(movie => movie.id === id)
            showItem = <MoviesItemPage data={resultMovie} />

        }
        if (this.props.upcomingMovies.find(movie => movie.id === id)) {
            resultMovie = this.props.upcomingMovies.find(movie => movie.id === id)
            showItem = <MoviesItemPage data={resultMovie} />
        }
        console.log(resultMovie);


        return (
            <div className="moviessection">
                {showItem}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        nowPlayingMovies: state.movies.nowPlayingMovies,
        popularMovies: state.movies.popularMovies,
        topRatedMovies: state.movies.topRatedMovies,
        upcomingMovies: state.movies.upcomingMovies

    }
}

export default connect(mapStateToProps, { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies })(MovieItem);

