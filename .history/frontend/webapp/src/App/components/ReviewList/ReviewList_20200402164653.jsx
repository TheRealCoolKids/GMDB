import React from 'react';

function ReviewList(props) {
    const loadReviews = () => {
        let reviews = [];

        for (let index = 0; index < 50; index++) {
            reviews.push({
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
        return reviews;
    }

    const [reviews, setReviews] = useState(loadReviews());


    return (
        <div className="container-fluid review-list" data-testid='CardList'>
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

export default ReviewList;