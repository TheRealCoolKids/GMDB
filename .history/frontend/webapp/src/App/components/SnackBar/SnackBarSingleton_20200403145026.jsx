import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


class SnackBarSingleton extends Component {

    static show(message,severity) {
        SnackBarSingleton.__singletonRef.__show(message,severity);
    }

    static hide() {
        SnackBarSingleton.__singletonRef.__hide();
    }

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            message: "",
            severity:""
        }
        SnackBarSingleton.__singletonRef = this;
    }

    __show(message,severity) {
        this.setState({
            message: message,
            open: true,
            severity:severity
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
        const { open, message,severity } = this.state;
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={this.handleClose} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}>
                <MuiAlert onClose={this.handleClose} severity={severity} elevation={6} variant="filled">
                    {message}
                </MuiAlert>
            </Snackbar>
        );
    }
}

export default SnackBarSingleton;
