import React, { useState } from 'react';
import Movie from "../MovieSingle/MovieSingle";
import './movieListStyle.css';

function MovieList(props) {

    const [movies, setMovies] = useState([]);

    const loadMovies = () => {

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

    return (
        <div className="container-fluid movie-list" key="mainCardList" data-testid='CardList'>

            <div className="row">
                {loadMovies().map((m, i) => {
                    return (
                        <Movie movie={m} key={i} />
                    )
                })}
            </div>
        </div>
    );
}

export default MovieList;