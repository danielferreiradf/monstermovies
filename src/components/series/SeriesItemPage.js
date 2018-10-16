import React from 'react';

const SeriesItemPage = (props) => {
    const { adult, name, poster_path, original_language, overview, first_air_date, vote_average, popularity } = props.data

    console.log(props)
    return (
        <div className="container">
            <div className="d-flex moviesitempage">
                <div className="col-6 d-flex p-10">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Poster" className="moviesitempage__image" />
                </div>
                <div className="col-6 p-10">
                    <h1 className="moviesitempage__title">{name}</h1>
                    <p className="moviesitempage__subtitle"><span>First Air Date:</span> {first_air_date}</p>
                    <p className="moviesitempage__score"><i className="fa fa-star" /> {vote_average}</p>
                    <p className="moviesitempage__overview">{overview}</p>
                    <p className="moviesitempage__subtitle"><span>Popularity:</span> {popularity}</p>
                    <p className="moviesitempage__subtitle"><span>Original Language:</span> {original_language}</p>
                    <p className="moviesitempage__subtitle"><span>Adult:</span> {adult ? 'Yes' : 'No'}</p>
                </div>
            </div>
        </div>
    )
}

export default SeriesItemPage
