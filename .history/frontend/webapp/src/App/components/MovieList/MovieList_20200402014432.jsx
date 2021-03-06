import React from 'react';
import Movie from "../MovieSingle/MovieSingle";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
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