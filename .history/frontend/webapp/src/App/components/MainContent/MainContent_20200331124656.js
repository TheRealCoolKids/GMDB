import React from 'react';
import MovieList from "../MovieList/MovieList";

function MainContent(props) {
    return (
        <div className="container-fluid main-content">
            <MovieList/>
        </div>
    );
}

export default MainContent;