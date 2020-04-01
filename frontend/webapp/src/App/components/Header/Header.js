import React from 'react';
import "./HeaderStyle.css";

function Header(props) {
    return (
        <div className="header" data-testid='Header'>
            <img src="https://www.spriters-resource.com/resources/sheet_icons/22/24322.png"></img>
            <h1>GMDB</h1>
        </div>
    );
}

export default Header;