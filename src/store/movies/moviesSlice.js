import { createSlice } from '@reduxjs/toolkit';

    export const moviesSlice = createSlice({
        name: 'movies',
        initialState: {
            page: 1,
            isLoadingMovie: true,
            isLoadingGetMoreMovies: false,
            isLoadingMovieSearched: false,
            latestSearchWordMovies: '',
            listMoviesHome: [],
            listMovies: [],
            listMoviesPopular: [],
            listMoviesInSearchedPage: [],
            movieSearched: {},
            listGenreMovies: [],
            listMoviesPerGenre: [],
        },
        reducers: {
            getMoviesNow: (state, {payload} ) => {
                state.listMoviesHome = payload.results;
            },
            getMoviesTrends: (state, {payload} ) => {
                state.listMovies = payload.results;
            },
            getAllMovies: (state, {payload} ) => {
                state.listMoviesPopular = payload;
            },
            getAllAdditionalMovies: (state, {payload} ) => {
                state.listMoviesPopular.push(...payload);
                state.isLoadingGetMoreMovies = false;
            },
            getSearchMovie: (state, {payload} ) => {
                state.listMovies = payload.data;
                state.latestSearchWordMovies = payload.search;
            },
            getSearchMovieId: (state, {payload} ) => {
                state.movieSearched = payload;
            },
            getGenreMovieList: (state, {payload} ) => {
                state.listGenreMovies = payload;
            },
            getMovieTrailerMovie: (state, {payload} ) => {
                state.movieSearched.trailer = payload;
            },
            getMovieCast: (state, {payload} ) => {
                state.movieSearched.cast = payload;
            },
            getMoviePerGenre: (state, {payload} ) => {
                state.listMoviesPerGenre = payload;
            },
            setAdditionalMoviePerGenre: (state, {payload} ) => {
                state.listMoviesPerGenre.push(...payload);
                state.isLoadingGetMoreMovies = false;
            },
            getMoviesPerGenreInSearchedPage: (state, {payload} ) => {
                state.listMoviesInSearchedPage = payload;
            },
            checkLoading: (state) => {
                state.isLoadingMovie = true;
            },
            checkLoadingGetMoreMovies: (state) => {
                state.isLoadingGetMoreMovies = true;
            },
            setLoadingFalse: (state) => {
                state.isLoadingMovie = false;
            },
        }
});
// Action creators are generated for each case reducer function
export const { getMoviesNow, getMoviesTrends, getAllMovies, getAllAdditionalMovies , getSearchMovie, getSearchMovieId, getGenreMovieList, getMovieTrailerMovie, getMovieCast, getMoviePerGenre, setAdditionalMoviePerGenre, getMoviesPerGenreInSearchedPage, checkLoading, checkLoadingGetMoreMovies, setLoadingFalse } = moviesSlice.actions;