import React, { useState, useEffect } from 'react';
import MovieSingle from "../MovieSingle/MovieSingle";
import MovieDataService from "../../api/MovieDataService";

import './movieListStyle.css';

function MovieList(props) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        MovieDataService.retrieveAllMovies().then(response => {
            console.log(response.data);
            setMovies(Array.from(response.data));
        }
        );
    });

    if (movies.length <= 0) {
        return <p>loading bro</p>
    } else {
        return (
            <div className="container-fluid movie-list" key="mainCardList" data-testid='CardList'>
                <div className="row" >
                    {movies.map((m, i) => {
                        return (
                            <p>{m.title}</p>
                            
                            //<MovieSingle movie={m} key={i} />
                        )
                    })}
                </div>
            </div>
        );
    }

}

export default MovieList;