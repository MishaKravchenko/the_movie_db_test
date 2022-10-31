import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";

export const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (_, {dispatch}) => {
        try {
            const movies = await movieService.getAll();
            dispatch(setMovies({data: movies}))
        } catch (e) {
            console.log(e);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: []
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload.data
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;
export const {setMovies} = movieSlice.actions;
