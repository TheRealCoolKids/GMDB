import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';
import {Button} from "@material-ui/core";

function RatingButton(props) {

    const [value, setValue] = React.useState(2);
    return (
        <React.Fragment>
        <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                />

            {/* <Button
            size="large"
            variant="contained" 
            color="primary"
            startIcon={<StarIcon/>}
            >
                {props.rating}/5
            </Button> */}
        </React.Fragment>
    );
}

export default RatingButton;