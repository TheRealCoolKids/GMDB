import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ReviewSingle from "./ReviewSingle";

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

            {reviews.map((r, i) => {
                return (
                    <ExpansionPanel expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                        >
                            <Typography >General settings</Typography>
                            <Typography >I am an expansion panel</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
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