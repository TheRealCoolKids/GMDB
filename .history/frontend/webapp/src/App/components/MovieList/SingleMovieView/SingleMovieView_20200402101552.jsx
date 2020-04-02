import React from 'react';

function SingleMovieView(props) {
    return (
        <div>
            {props.movie.title}
        </div>
    );
}

export default SingleMovieView;