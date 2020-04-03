import React from 'react';
import './movieSingle.css';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import RateReviewIcon from '@material-ui/icons/RateReview';
import MoodIcon from '@material-ui/icons/Mood';
import { makeStyles } from '@material-ui/core/styles';


function MovieSingleDetail(props) {

    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));    
      const classes = useStyles();

    return (
        <div className={classes.paper + "card movie-single-small"} data-testid="MovieCard" >
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

export default MovieSingleDetail;