import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Button } from "@material-ui/core";

function RatingButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


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
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                hopefully man
            </Popover>
        </React.Fragment>
    );
}

export default RatingButton;