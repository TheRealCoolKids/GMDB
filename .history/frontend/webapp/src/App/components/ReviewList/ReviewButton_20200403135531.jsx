import React from 'react';
import { Button } from "@material-ui/core";
import Popover from '@material-ui/core/Popover';
import ReviewForm from "./ReviewForm";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function ReviewButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <React.Fragment>
            <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handleClick}
                startIcon={<AddCircleOutlineIcon/>}
                fullWidth={true}
            >
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
                <ReviewForm movieId={props.movieId}/>
            </Popover>
        </React.Fragment>
    );
}

export default ReviewButton;