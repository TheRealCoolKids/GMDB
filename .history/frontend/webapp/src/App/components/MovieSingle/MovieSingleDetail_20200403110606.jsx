import React from 'react';
import './movieSingle.css';
import RateReviewIcon from '@material-ui/icons/RateReview';
import MoodIcon from '@material-ui/icons/Mood';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ReviewList from "../ReviewList/ReviewList";
import RatingButton from "../Rating/RatingButton";
import {Button} from "@material-ui/core";


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
                        <RatingButton rating={props.movie.ratings.reduce((a,r)=>a+r.score,0) / props.movie.ratings.length} />
                    </div>
                    <div className="col-3 metadata">
                        <Button variant="contained" size="large" color="primary" startIcon={<MoodIcon />}>
                            {props.movie.ratings.length}
                        </Button>
                    </div>
                    <div className="col-3 metadata">
                        <Button variant="contained" size="large" color="primary" startIcon={<AccessTimeIcon /> }>
                            {props.movie.runtime}
                        </Button>
                    </div>
                    <div className="col-3 metadata">
                    <Button variant="contained" size="large" color="primary" startIcon={<CalendarTodayIcon /> }>
                        {props.movie.yearReleased}
                    </Button>                       
                    </div>
                </div>
            </div>
            <div className="card-footer movie-review-list">
                <ReviewList movieId={props.movie}/>
            </div>
        </div>
    );
}

export default MovieSingleDetail;