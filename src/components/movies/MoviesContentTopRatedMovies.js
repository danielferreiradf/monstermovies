import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getTopRatedMovies } from '../../actions/moviesActions';
import Spinner from '../common/Spinner';
import MoviesCarousel from './MoviesCarousel';

class MoviesContentTopRatedMovies extends Component {
    componentDidMount() {
        this.props.getTopRatedMovies();
    }

    render() {
        const { topRatedMovies } = this.props.topRatedMovies.movies
        // console.log(topRatedMovies)
        let topRatedMoviesContent;

        if (topRatedMovies === null || topRatedMovies === undefined) {
            topRatedMoviesContent = <Spinner />
        } else {
            if (Object.keys(topRatedMovies).length > 0) {
                topRatedMoviesContent = <MoviesCarousel data={topRatedMovies} />
            }
        }

        return (
            <div className="container" >
                <h1 className="heading-3 p-10"><i className="fa fa-film" /> {this.props.title}</h1>
                {topRatedMoviesContent}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    topRatedMovies: state
})

export default connect(mapStateToProps, { getTopRatedMovies })(MoviesContentTopRatedMovies);
