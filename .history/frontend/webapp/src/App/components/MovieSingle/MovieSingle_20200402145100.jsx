import React from 'react';
import './movieSingle.css';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import RateReviewIcon from '@material-ui/icons/RateReview';
import MoodIcon from '@material-ui/icons/Mood';


function MovieSingle(props) {
    return (
        <div className="card movie-single-small" onClick={props.onClick} data-testid="MovieCard" >
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
                            <Button variant="outlined" color="secondary" startIcon={<StarIcon />}>
                                {props.movie.rating}/5
                        </Button>
                        </div>
                        <div className="col-4 metadata">
                            <Button variant="outlined" color="secondary" startIcon={<MoodIcon />}>
                                {props.movie.ratings}
                            </Button>
                        </div>
                        <div className="col-4 metadata">
                            <Button variant="outlined" color="secondary" startIcon={<RateReviewIcon/>}>
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