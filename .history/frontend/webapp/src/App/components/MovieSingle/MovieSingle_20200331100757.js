import React from 'react';

function MovieSingle(props) {
    return (
        <div class="container">
            <div class="row flex-column-reverse flex-md-row">
                <div class="col-md-5">
                    <div class="card">
                            <div class="card-body">
                                <h1 class="card-title">{props.movie.title}</h1>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-4 metadata">
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