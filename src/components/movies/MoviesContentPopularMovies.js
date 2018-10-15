import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPopularMovies } from '../../actions/moviesActions';
import Spinner from '../common/Spinner';
import MoviesCarousel from './MoviesCarousel';

class MoviesContentPopularMovies extends Component {
    componentDidMount() {
        this.props.getPopularMovies();
    }

    render() {
        const { popularMovies } = this.props.popularMovies.movies
        // console.log(PopularMovies)
        let popularMoviesContent;

        if (popularMovies === null || popularMovies === undefined) {
            popularMoviesContent = <Spinner />
        } else {
            if (Object.keys(popularMovies).length > 0) {
                popularMoviesContent = <MoviesCarousel data={popularMovies} />
            }
        }

        return (
            <div className="container" >
                <h1 className="heading-3 p-10"><i className="fa fa-film" /> {this.props.title}</h1>
                {popularMoviesContent}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    popularMovies: state
})

export default connect(mapStateToProps, { getPopularMovies })(MoviesContentPopularMovies);
