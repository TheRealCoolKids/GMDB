import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import "./MainContentStyle.css";

function MainContent(props) {
    return (
        <div className="container-fluid main-content">
            <MovieList />
        </div>
    );
}

export default MainContent;