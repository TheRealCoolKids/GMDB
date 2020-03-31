import React from 'react';

function MovieSingle(props) {
    return (
        <div class="container">
            <div class="row flex-column-reverse flex-md-row">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-header">
                            <img class="card-img" src="https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg" alt="Card image" />
               </div>
                            <div class="card-body">
                                <h1 class="card-title">Interstellar</h1>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-4 metadata">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <p>9.5/10</p>
                                        </div>
                                        <div class="col-8 metadata">Adventure. Sci-Fi</div>
                                    </div>
                                </div>
                                <p class="card-text">A team of explorers travel through wormhole in space in an attempt to ensure humanity's survival.</p>
                                <a class="trailer-preview" href="https://youtu.be/ePbKGoIGAXY" target="new">
                                    <i class="fa fa-play" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 description">
                        <h1>Movie card by Andrej</h1>
                        <p>inspired by
              <a href="https://dribbble.com/jllerena">Juan's</a>
                            <a href="https://dribbble.com/shots/2807662-Movie-Card-Concept">concept</a>
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default MovieSingle;