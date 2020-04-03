import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
                title: "Love it",
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
            {reviews.map((r, i) => {
                return (
                    <ExpansionPanel className="review-single" expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            className="review-header"
                        >
                            <Typography className="review-title">{r.title}</Typography>
                            <Typography className="review-user">{r.user.username}</Typography>
                            <Typography className="review-date">{r.creationDate}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="review-content">
                            <Typography className="review-text">
                                {r.text}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            })}
        </div>
    );
}

export default ReviewList;