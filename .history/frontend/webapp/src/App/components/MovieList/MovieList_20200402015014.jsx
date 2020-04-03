import React from 'react';
import Movie from "../MovieSingle/MovieSingle";
import ModalPopup from "../Modal/ModalPopup";
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="container-fluid movie-list" key="mainCardList" data-testid='CardList'>
            <ModalPopup open={open} onClose={handleClose}/>
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