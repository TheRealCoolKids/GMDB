import React, { useState } from 'react';
import MovieSingle from "../MovieSingle/MovieSingle";
import MovieDataService from "../../api/MovieDataService";

import './movieListStyle.css';

function MovieList(props) {
    const loadMovies = async () => {
        let movies = [];

        MovieDataService.retrieveAllMovies().then(response => {
            setMovies(response.data);
        }
        );

        return movies;
    }

    const [movies, setMovies] = useState(loadMovies());


    return (
        <div className="container-fluid movie-list" key="mainCardList" data-testid='CardList'>
            <div className="row" >
                {movies.map((m, i) => {
                    return (
                        <MovieSingle movie={m} key={i} />
                    )
                })}
            </div>
        </div>
    );
}

export default MovieList;