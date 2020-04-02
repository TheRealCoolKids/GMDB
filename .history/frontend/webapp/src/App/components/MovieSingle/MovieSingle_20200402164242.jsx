import React from 'react';
import './movieSingle.css';
import Button from '@material-ui/core/Button';
import MovieSingleDetail from "./MovieSingleDetail";
import Modal from '@material-ui/core/Modal';

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



    return (
        <div className="card movie-single-small noselect" data-testid="MovieCard" >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <MovieSingleDetail movie={props.movie} />
            </Modal>
            <div className="card-header" onClick={handleOpen}>
                <h1 className="card-title">{props.movie.title}</h1>
                <div className="row">
                    <div className="col-12 metadata">
                        <p>{props.movie.genre}</p>
                    </div>
                </div>
            </div>
            <div className="card-body" onClick={handleOpen}>
                <div className="container">
                    <div className="row movie-meta">
                        <div className="col-4 metadata">
                            <StarIcon /> {props.movie.rating}/5
                        </div>
                        <div className="col-4 metadata">
                            <MoodIcon /> {props.movie.ratings}
                        </div>
                        <div className="col-4 metadata">
                            <RateReviewIcon /> {props.movie.reviews.length}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}



export default MovieSingle;