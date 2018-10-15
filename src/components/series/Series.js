import React, { Component } from 'react';

class Series extends Component {
    render() {
        return (
            <div className="series">
                <div className="container">
                    <div className="movies__content p-10">
                        <h1 className="heading-1">Find Series</h1>
                        <h3 className="heading-2">
                            <span className="heading-2-hover"><i className="fa fa-bullhorn" /> Now Playing</span>
                        </h3>
                        <h3 className="heading-2">
                            <span className="heading-2-hover"><i className="fa fa-arrow-circle-right" /> Popular</span>
                        </h3>
                        <h3 className="heading-2">
                            <span className="heading-2-hover"><i className="fa fa-bolt" /> UpComing</span>
                        </h3>
                        <h3 className="heading-2">
                            <span className="heading-2-hover"><i className="fa fa-star" /> Top Rated</span>
                        </h3>
                        <hr className="bar" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Series;
