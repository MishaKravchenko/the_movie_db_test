import React from 'react';

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/"

const Movies = ({movie:{poster_path}}) => {
    return (
        <div>
            <h2>Movies</h2>
            <img src={`${IMAGE_PATH}${poster_path}`} alt=""/>
        </div>
    );
};

export {Movies};