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
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >General settings</Typography>
                    <Typography >I am an expansion panel</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            {reviews.map((m, i) => {
                return (
                    <div className="row" >
                        <ReviewSingle review={m} />
                    </div>
                )
            })}

        </div>
    );
}

export default ReviewList;