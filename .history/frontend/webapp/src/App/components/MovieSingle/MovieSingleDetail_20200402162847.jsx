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
            <div className="card-body">
                <div className="row movie-meta">
                    <div className="col-2 metadata">
                        <StarIcon /> {props.movie.rating}/5
                    </div>
                    <div className="col-2 metadata">
                        <MoodIcon /> {props.movie.ratings}
                    </div>
                    <div className="col-2 metadata">
                        <RateReviewIcon /> {props.movie.reviews.length}
                    </div>
                    <div className="col-2 metadata">
                        <RateReviewIcon /> {props.movie.yearReleased}
                    </div>
                    <div className="col-2 metadata">
                        <RateReviewIcon /> {props.movie.runtime}
                    </div>

                    {/*                 id: 1,
                title: "John big Dick",
                yearReleased: 2013,
                genre: "Underground hardcore Heimatporn",
                runtime: "69",
                rating: 5,
                reviews: [],
                ratings: 20 */}
                </div>
            </div>
        </div>
    );
}

export default MovieSingleDetail;