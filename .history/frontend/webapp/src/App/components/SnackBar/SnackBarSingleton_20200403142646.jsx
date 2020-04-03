import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class SnackBarSingleton extends Component {

    static show() {
        SnackBarSingleton.__singletonRef.__show();
    }

    static hide() {
        SnackBarSingleton.__singletonRef.__hide();
    }

    constructor(props) {
        super(props);
        SnackBarSingleton.__singletonRef = this;
    }

    __show(message) {
        this.setState({
            message: message,
            open: true
        })
    };
    __hide() { this.handleClose(); }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({
            open: false
        })
    };

    render() {
        const { open } = this.state;
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                message="Note archived"
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={this.handleClose}>
                            UNDO
            </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        );
    }
}

export default SnackBarSingleton;
