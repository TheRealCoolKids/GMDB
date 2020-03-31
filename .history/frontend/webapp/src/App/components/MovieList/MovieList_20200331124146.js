import React from 'react';
import Movie from "../MovieSingle/MovieSingle";
import './movieListStyle.css';

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
        <div className="container-fluid">
            {loadMovies().map((m,i) =>{
                 return(
                    <div className="row">
                        <div class="col-sm-6">
                            <Movie movie={m}/>
                        </div>
                    </div>
                )
                 })}
        </div>
    );
}

export default MovieList;