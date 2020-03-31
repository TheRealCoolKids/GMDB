import React from 'react';
import './movieSingle.css';


function MovieSingle(props) {
    return (
        <div className="container">
            <div className="row flex-column-reverse flex-md-row">
                <div className="col-md-5">
                    <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">{props.movie.title}</h1>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 metadata">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <p>{props.movie.rating}/5 &#128293;</p>
                                        </div>
                                        <div class="col-8 metadata">{props.movie.genre}</div>
                                    </div>
                                </div>
                                <p class="card-text">text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default MovieSingle;