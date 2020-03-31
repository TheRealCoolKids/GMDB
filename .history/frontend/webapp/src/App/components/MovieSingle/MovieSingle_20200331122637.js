import React from 'react';
import './movieSingle.css';


function MovieSingle(props) {
    return (
        <div className="container movie">
            <div className="row flex-column-reverse flex-md-row">
                <div className="col-md-5">
                    <div className="card">
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
                                        <p>{props.movie.ratings} &#128068;</p>
                                    </div>
                                    <div className="col-4 metadata">
                                        <p>{props.movie.reviews.length} &#128221;</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieSingle;