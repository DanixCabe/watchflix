import { createSlice } from '@reduxjs/toolkit';

    export const seriesSlice = createSlice({
        name: 'series',
        initialState: {
            page: 1,
            isLoadingSerie: true,
            isLoadingGetMoreSeries: false,
            latestSearchWordSeries: '',
            listSeries: [],
            listSeriesPopular: [],
            listSeriesInSearchedPage: [], // Used in SerieSearch.jsx
            serieSelected: {},
            serieSearched: {},
        },
        reducers: {
            getSeriesTrends: (state, {payload} ) => {
                state.listSeries = payload.results;
            },
            getAllSeries: (state, {payload} ) => {
                state.listSeriesPopular = payload;
            },
            getAllAdditionalSeries: (state, {payload} ) => {
                state.listSeriesPopular.push(...payload);
                state.isLoadingGetMoreSeries = false;
            },
            searchSeries: (state, {payload} ) => {
                state.listSeries = payload.data;
                state.latestSearchWordSeries = payload.search;
            },
            getSearchSerieId: (state, {payload} ) => {
                state.serieSearched = payload;
            },
            getVideoTrailerSerie: (state, {payload} ) => {
                state.serieSearched.trailer = payload;
            },
            getSerieCast: (state, {payload} ) => {
                state.serieSearched.cast = payload;
            },
            getSeriesPerGenreInSearchedPage: (state, {payload} ) => {
                state.listSeriesInSearchedPage = payload;
            },
            checkLoading: (state) => {
                state.isLoadingSerie = true;
            },
            setLoadingFalse: (state) => {
                state.isLoadingSerie = false;
            },
            checkLoadingGetMoreSeries: (state) => {
                state.isLoadingGetMoreSeries = true;
            },
        }
});
// Action creators are generated for each case reducer function
export const { getSeriesTrends, getAllSeries, getAllAdditionalSeries, searchSeries, getSearchSerieId, getVideoTrailerSerie, getSerieCast, getSeriesPerGenreInSearchedPage, checkLoading, setLoadingFalse, checkLoadingGetMoreSeries } = seriesSlice.actions;