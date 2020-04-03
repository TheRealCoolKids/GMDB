import React, { Component } from 'react';

class SnackBarSingleton extends Component {

    __singletonRef = new SnackBarSingleton();

    constructor(props){
        super(props);

        this = this.__singletonRef;
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SnackBarSingleton;