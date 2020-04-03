import React, { useState } from 'react';

import "./ReviewList.css";
import ReviewSingle from "./ReviewSingle";
import { LoremIpsum, username } from 'react-lorem-ipsum';

function ReviewList(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const loadReviews = (id) => {
        let reviews = [];

        for (let index = 0; index < 50; index++) {
            reviews.push({
                id: 1,
                title: <LoremIpsum p={1} startWithLoremIpsum={false} avgSentencesPerParagraph={1} avgWordsPerSentence={6}/>,
                creationDate: "01.03.2013",
                text: <LoremIpsum p={Math.random()*10+1} startWithLoremIpsum={false}/>,
                user: {username:username() },
            });
        }
        return reviews;
    }

    const [reviews, setReviews] = useState(loadReviews(props.id));


    return (
        <div className="container-fluid review-list" data-testid='CardList'>
            {reviews.map((m, i) => {
                return (
                    <ReviewSingle panelName={'panel' + i} handler={handleChange('panel' + i)} movie={m} />
                )
            })}
        </div>
    );
}

export default ReviewList;