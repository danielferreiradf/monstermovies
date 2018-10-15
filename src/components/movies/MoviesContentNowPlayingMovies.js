import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getNowPlayingMovies } from '../../actions/moviesActions';
import Spinner from '../common/Spinner';
import MoviesCarousel from './MoviesCarousel';

class MoviesContentNowPlayingMovies extends Component {
    componentDidMount() {
        this.props.getNowPlayingMovies();
    }

    render() {
        const { nowPlayingMovies } = this.props.nowPlayingMovies.movies
        // console.log(nowPlayingMovies)
        let nowPlayingMoviesContent;

        if (nowPlayingMovies === null || nowPlayingMovies === undefined) {
            nowPlayingMoviesContent = <Spinner />
        } else {
            if (Object.keys(nowPlayingMovies).length > 0) {
                nowPlayingMoviesContent = <MoviesCarousel data={nowPlayingMovies} />
            }
        }

        return (
            <div className="container" >
                <h1 className="heading-3 p-10"><i className="fa fa-film" /> {this.props.title}</h1>
                {nowPlayingMoviesContent}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    nowPlayingMovies: state
})

export default connect(mapStateToProps, { getNowPlayingMovies })(MoviesContentNowPlayingMovies);
