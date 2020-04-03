import React, { useState } from 'react';
import ReviewSingle from "./ReviewSingle";

function ReviewList(props) {
    const loadReviews = (id) => {
        let reviews = [];

        for (let index = 0; index < 50; index++) {
            reviews.push({
                id: 1,
                title: "Love it",
                creationDate: 2013,
                text: "Underground asdasdasdasdasda aaaaaa aaa aaaaaaa a aaaaaaaaaaaaaaaaaa   aaaaaaa aaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaaaa asdaaaaahardcore Heimatporn",
                user: {},
            });
        }
        return reviews;
    }

    const [reviews, setReviews] = useState(loadReviews(props.id));


    return (
        <div className="container-fluid review-list" data-testid='CardList'>
            {reviews.map((m, i) => {
                return (
                    <div className="row" >
                        <ReviewSingle review={m}/>
                    </div>
                )
            })}

        </div>
    );
}

export default ReviewList;