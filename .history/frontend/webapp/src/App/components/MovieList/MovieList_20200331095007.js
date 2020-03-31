import React from 'react';

function MovieList(props) {

    const loadMovies = () => {
        let movies = [{
            id: 1,
            title: "John big Dick",
            yearReleased: 2013,
            genre: "Underground hardcore Heimatporn",
            runtime: "69",
            rating: 5,
            reviews: [],
            ratings: 20
        },
        {
            id: 2,
            title: "Dora the explorer",
            yearReleased: 2020,
            genre: "Crazy Disney Porn",
            runtime: "389",
            rating: 3,
            reviews: [],
            ratings: 368490
        },
        {
            id: 3,
            title: "Christians World",
            yearReleased: 2013,
            genre: "Alt und Junge in Action",
            runtime: "159",
            rating: 5,
            reviews: [],
            ratings: 1563
        }];

        return movies;
    }

    return ( 
        <div>
            {loadMovies.map(m => <div>{m.title}</div>)}
        </div>
    );
}

export default MovieList;