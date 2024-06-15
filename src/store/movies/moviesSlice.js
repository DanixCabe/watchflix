import { createSlice } from '@reduxjs/toolkit';

    export const moviesSlice = createSlice({
        name: 'movies',
        initialState: {
            page: 1,
            isLoadingMovie: true,
            isLoadingMovieSearched: false,
            latestSearchWordMovies: '',
            listMoviesHome: [],
            listMovies: [],
            movieSearched: {},
            listGenreMovies: [],
        },
        reducers: {
            getMoviesNow: (state, {payload} ) => {
                state.listMoviesHome = payload.results;
            },
            getMoviesTrends: (state, {payload} ) => {
                state.listMovies = payload.results;
            },
            getAllMovies: (state, {payload} ) => {
                state.listMovies = payload.results;
            },
            searchMovie: (state, {payload} ) => {
                state.listMovies = payload.data;
                state.latestSearchWordMovies = payload.search;
            },
            searchMovieId: (state, {payload} ) => {
                state.movieSearched = payload;
            },
            getGenreMovieList: (state, {payload} ) => {
                state.listGenreMovies = payload;
            },
            checkLoading: (state) => {
                state.isLoadingMovie = true;
            },
            setLoadingFalse: (state) => {
                state.isLoadingMovie = false;
            },
        }
});
// Action creators are generated for each case reducer function
export const { getMoviesNow, getMoviesTrends, getAllMovies , searchMovie, searchMovieId, getGenreMovieList, checkLoading,setLoadingFalse } = moviesSlice.actions;