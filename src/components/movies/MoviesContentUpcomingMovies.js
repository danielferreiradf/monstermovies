import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUpcomingMovies } from '../../actions/moviesActions';
import Spinner from '../common/Spinner';
import MoviesCarousel from './MoviesCarousel';

class MoviesContentUpcomingMovies extends Component {
    componentDidMount() {
        this.props.getUpcomingMovies();
    }

    render() {
        const { upcomingMovies } = this.props.upcomingMovies.movies
        // console.log(upcomingMovies)
        let upcomingMoviesContent;

        if (upcomingMovies === null || upcomingMovies === undefined) {
            upcomingMoviesContent = <Spinner />
        } else {
            if (Object.keys(upcomingMovies).length > 0) {
                upcomingMoviesContent = <MoviesCarousel data={upcomingMovies} />
            }
        }

        return (
            <div className="container" >
                <h1 className="heading-3 p-10"><i className="fa fa-film" /> {this.props.title}</h1>
                {upcomingMoviesContent}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    upcomingMovies: state
})

export default connect(mapStateToProps, { getUpcomingMovies })(MoviesContentUpcomingMovies);
