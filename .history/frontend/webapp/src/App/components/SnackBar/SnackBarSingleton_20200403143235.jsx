import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';


class SnackBarSingleton extends Component {

    static show(message) {
        SnackBarSingleton.__singletonRef.__show(message);
    }

    static hide() {
        SnackBarSingleton.__singletonRef.__hide();
    }

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            message: ""
        }
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
        const { open, message } = this.state;
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                message={message}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="danger" onClick={this.handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                        <MuiAlert elevation={6} variant="filled"/>
                    </React.Fragment>
                }
            />
        );
    }
}

export default SnackBarSingleton;
