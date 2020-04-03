import React from 'react';
import './movieSingle.css';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import RateReviewIcon from '@material-ui/icons/RateReview';
import MoodIcon from '@material-ui/icons/Mood';
import { makeStyles } from '@material-ui/core/styles';


function MovieSingleDetail(props) {

    return (
        <div className="card movie-single-detail" data-testid="MovieCard" >
            <div className="card-body">
                <h1 className="card-title">{props.movie.title}</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 metadata">
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <StarIcon /> {props.movie.rating}/5
                                </div>
                                <div className="row">
                                    <MoodIcon /> {props.movie.ratings}
                                </div>
                                <div className="row">
                                    <RateReviewIcon /> {props.movie.reviews.length}
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

export default MovieSingleDetail;