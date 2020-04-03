import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function ReviewSingle(props) {
    return (
        <ExpansionPanel className="review-single" expanded={expanded === props.panelName} onChange={props.handler(props.panelName)}>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            className="review-header"
        >
            <Typography className="review-title">{props.movie.title}</Typography>
            <Typography className="review-user">{props.movie.user.username}</Typography>
            <Typography className="review-date">{props.movie.creationDate}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="review-content">
            <Typography className="review-text">
                {props.movie.text}
            </Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>
    );
}

export default ReviewSingle;