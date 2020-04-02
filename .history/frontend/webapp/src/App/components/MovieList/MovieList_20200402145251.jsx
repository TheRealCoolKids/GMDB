import React, { useState } from 'react';
import MovieSingle from "../MovieSingle/MovieSingle";

import './movieListStyle.css';

function MovieList(props) {
    const loadMovies = () => {
        let movies = [];

        for (let index = 0; index < 50; index++) {
            movies.push({
                id: 1,
                title: "John big Dick",
                yearReleased: 2013,
                genre: "Underground hardcore Heimatporn",
                runtime: "69",
                rating: 5,
                reviews: [],
                ratings: 20
            });
        }
        return movies;
    }

    const [movies, setMovies] = useState(loadMovies());


    return (
        <div className="container-fluid movie-list" key="mainCardList" data-testid='CardList'>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>


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