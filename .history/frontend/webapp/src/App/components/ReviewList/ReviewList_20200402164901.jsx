import React from 'react';

function ReviewList(props) {
    const loadReviews = () => {
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

    const [reviews, setReviews] = useState(loadReviews());


    return (
        <div className="container-fluid review-list" data-testid='CardList'>
            <div className="row" >
                {reviews.map((m, i) => {
                    return <p>{m.title}</p>
                })}
            </div>
        </div>
    );
}

export default ReviewList;