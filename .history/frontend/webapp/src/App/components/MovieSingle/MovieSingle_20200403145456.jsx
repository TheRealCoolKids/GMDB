import React from 'react';
import './movieSingle.css';
import MovieSingleDetail from "./MovieSingleDetail";
import Modal from '@material-ui/core/Modal';

import RateReviewIcon from '@material-ui/icons/RateReview';
import MoodIcon from '@material-ui/icons/Mood';
import Rating from '@material-ui/lab/Rating';


function MovieSingle(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
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
                {...props}
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
                            <Rating
                                name="read-only"
                                value={props.movie.ratings.reduce((a,r)=>a+r.score,0) / props.movie.ratings.length}
                                readOnly
                            />
                        </div>
                        <div className="col-4 metadata">
                            <MoodIcon /> {props.movie.ratings.length}
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