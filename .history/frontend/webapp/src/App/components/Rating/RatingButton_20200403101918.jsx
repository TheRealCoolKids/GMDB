import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';
import { Button } from "@material-ui/core";

function RatingButton(props) {

    const [value, setValue] = React.useState(2);
    return (
        <React.Fragment>


            <Button
                size="large"
                variant="contained"
                color="primary"
            >
                <Rating
                    name="read-only"
                    value={props.rating}
                    disabled
                />
            </Button>
        </React.Fragment>
    );
}

export default RatingButton;