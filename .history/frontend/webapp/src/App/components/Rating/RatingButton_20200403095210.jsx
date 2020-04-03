import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import {Button} from "@material-ui/core";

function RatingButton(props) {
    return (
        <div>
            <Button
            startIcon={<StarIcon/>}
            >
                {props.rating}
            </Button>
        </div>
    );
}

export default RatingButton;