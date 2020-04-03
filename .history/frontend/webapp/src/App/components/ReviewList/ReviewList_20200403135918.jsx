import React, { useState, useEffect } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./ReviewList.css";
import ReviewButton from './ReviewButton';

function ReviewList(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="container-fluid review-list" data-testid='CardList'>
        <ReviewButton movieId={props.movie.id}/>
            {props.movie.reviews
            .sort((a,b) => a.id - b.id)
            .map((r, i) => {
                return (
                    <ExpansionPanel className="review-single" expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            className="review-header"
                        >
                            <Typography className="review-title">{r.title}</Typography>
                            <Typography className="review-user">{r.user!=null?r.user.username:""}</Typography>
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