import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import {Button} from "@material-ui/core";

function RatingButton(props) {
    return (
        <React.Fragment>
            <Button
            startIcon={<StarIcon/>}
            >
                {props.rating}/5
            </Button>
        </React.Fragment>
    );
}

export default RatingButton;