import React from 'react';
import './movieSingle.css';
import StarIcon from '@material-ui/icons/Star';
import RateReviewIcon from '@material-ui/icons/RateReview';
import MoodIcon from '@material-ui/icons/Mood';
import ReviewList from "../ReviewList/ReviewList";


function MovieSingleDetail(props) {

    return (
        <div className="card movie-single-detail" data-testid="MovieCard" >
            <div className="card-header">
                <h1 className="card-title">{props.movie.title}</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 metadata">
                            <p>{props.movie.genre}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body movie-meta">
                <div className="row ">
                    <div className="col-3 metadata">
                        <StarIcon /> {props.movie.rating}/5
                    </div>
                    <div className="col-3 metadata">
                        <MoodIcon /> {props.movie.ratings}
                    </div>
                    <div className="col-3 metadata">
                        <RateReviewIcon /> {props.movie.runtime}
                    </div>
                    <div className="col-3 metadata">
                        <RateReviewIcon /> {props.movie.yearReleased}
                    </div>
                </div>
            </div>
            <div className="card-footer movie-review-list">

            </div>
        </div>
    );
}

export default MovieSingleDetail;