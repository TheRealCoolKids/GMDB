import React from 'react';
import './movieSingle.css';
import Button from '@material-ui/core/Button';


function MovieSingle(props) {
    return (
        <div className="card movie-single-small">
            <div className="card-body">
                <h1 className="card-title">{props.movie.title}</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 metadata">
                            <p>{props.movie.genre}</p>
                        </div>
                    </div>
                    <div className="row movie-meta">
                        <div className="col-4 metadata">
                            <Button variant="outlined" color="secondary">
                                {props.movie.rating}/5
                        </Button>
                        </div>
                        <div className="col-4 metadata">
                            <Button variant="outlined" color="secondary">
                                {props.movie.ratings}
                            </Button>
                        </div>
                        <div className="col-4 metadata">
                            <Button variant="outlined" color="secondary">
                                {props.movie.reviews.length}
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MovieSingle;