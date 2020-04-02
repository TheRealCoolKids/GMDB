import React from 'react';
import './HeaderStyle.css';

function NewHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light header" data-testid='Header'>
            <img src="https://www.spriters-resource.com/resources/sheet_icons/22/24322.png" alt='Gyubrush Threepwood'></img>
            <a className="navbar-brand" href='/' >GMDB</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" >
                <form className="form-inline my-2 my-lg-0" data-testid='LoginForm'>
                    <input type="text" className="form-control m-1" placeholder="Username" id="usr"></input>
                    <input type="password" className="form-control  m-1" placeholder="Password" id="pwd"></input>
                    <button className="btn btn-info  m-2" type="submit">Login</button>
                </form>
            </div>
        </nav>
    );
}

export default NewHeader;


