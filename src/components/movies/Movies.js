import React, { Component, Fragment } from 'react';
import MoviesHeader from './MoviesHeader';
import MoviesSection from './MoviesSection';

class Movies extends Component {
    render() {
        return (
            <Fragment>
                <MoviesHeader />
                <MoviesSection />
            </Fragment>
        )
    }

}

export default Movies;
