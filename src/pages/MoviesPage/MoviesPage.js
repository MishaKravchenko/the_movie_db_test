import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redux/slices/movie.slice";
import {Movies} from "../../components";

const MoviesPage = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state['movieReducer']);

    useEffect(()=> {
        dispatch(getMovies())
    },[dispatch])

    return (
        <div>
            <h1>Movies</h1>
            {movies && movies.map(movie => <Movies key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesPage};