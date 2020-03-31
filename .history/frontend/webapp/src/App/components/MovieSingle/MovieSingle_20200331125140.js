import React from 'react';
import './movieSingle.css';


function MovieSingle(props) {
    return (
        <div className="card movie-single-small col-4">
            <div className="card-body">
                <h1 className="card-title">{props.movie.title}</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 metadata">
                            <p>{props.movie.genre}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 metadata">
                            <p>{props.movie.rating}/5 <span role="img">&#128293;</span></p>
                        </div>
                        <div className="col-4 metadata">
                            <p>{props.movie.ratings} <span role="img">&#128068;</span></p>
                        </div>
                        <div className="col-4 metadata">
                            <p>{props.movie.reviews.length} <span role="img">&#128221;</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MovieSingle;