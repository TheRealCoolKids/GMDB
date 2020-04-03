import React, { useState, useEffect } from 'react';
import MovieSingle from "../MovieSingle/MovieSingle";
import MovieDataService from "../../api/MovieDataService";

import './movieListStyle.css';

function MovieList(props) {
    const loadMovies = async () => {
        MovieDataService.retrieveAllMovies().then(response => {
            console.log(response.data);
            setMovies(response.data);
        }
        );
    }

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        loadMovies();
    });

    if (movies.length <= 0) {
        return <p>loading bro</p>
    } else {
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

}

export default MovieList;