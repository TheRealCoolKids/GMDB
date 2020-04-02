import React, { useState, useEffect } from 'react';
import Movie from "../MovieSingle/MovieSingle";
import Modal from '@material-ui/core/Modal';
import SingleMovieView from "./SingleMovieView/SingleMovieView";
import './movieListStyle.css';

function MovieList(props) {

    const [movies, setMovies] = useState([]);
    
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
        setMovies(movies);
    }

    useEffect(() => {
        loadMovies();
    });

    return (
        <div className="container-fluid movie-list" key="mainCardList" data-testid='CardList'>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>

            <div className="row" >
                {movies.map((m, i) => {
                    return (
                        <Movie movie={m} onClick={handleOpen} key={i} />
                    )
                })}
            </div>
        </div>
    );
}

export default MovieList;