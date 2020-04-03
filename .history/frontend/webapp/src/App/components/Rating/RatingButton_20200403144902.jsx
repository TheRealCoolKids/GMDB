import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Button } from "@material-ui/core";
import Popover from '@material-ui/core/Popover';
import MovieDataService from "../../api/MovieDataService";
import SnackBarSingleton from '../SnackBar/SnackBarSingleton';


function RatingButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const postRating = (value) => {
        MovieDataService.saveRating(props.movieId, {
            score: value
        }).then((response)=>{
            SnackBarSingleton.show("Thanks for the Rating!","success");
        }
        ).catch(()=>{
            SnackBarSingleton.show("Uuups didnt work bro","error")
        })
    }

    return (
        <React.Fragment>
            <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                <Rating
                    name="read-only"
                    value={props.rating}
                    readOnly
                />
            </Button>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Rating
                    name="simple-controlled"
                    value={0}
                    onChange={(event, newValue) => {
                        postRating(newValue);
                        handleClose();
                    }}
                />
            </Popover>
        </React.Fragment>
    );
}

export default RatingButton;