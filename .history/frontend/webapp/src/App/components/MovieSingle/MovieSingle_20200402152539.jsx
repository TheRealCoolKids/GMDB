import React from 'react';
import './movieSingle.css';
import Button from '@material-ui/core/Button';
import MovieSingleDetail from "./MovieSingleDetail";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import RateReviewIcon from '@material-ui/icons/RateReview';
import StarIcon from '@material-ui/icons/Star';
import MoodIcon from '@material-ui/icons/Mood';


function MovieSingle(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        console.log("open");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    return (
        <div className="card movie-single-small" data-testid="MovieCard" >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <MovieSingleDetail className={classes.paper} movie={props.movie} />
            </Modal>
            <div className="card-body" onClick={handleOpen}>
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
                            <Button variant="outlined" color="secondary" startIcon={<RateReviewIcon />}>
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