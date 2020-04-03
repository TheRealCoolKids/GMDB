import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import {Button} from "@material-ui/core";

function RatingButton(props) {
    return (
        <div>
            <Button
            startIcon={<StarIcon/>}
            >
                {props.rating}/5
            </Button>
        </div>
    );
}

export default RatingButton;