import { createSlice } from '@reduxjs/toolkit';

    export const seriesSlice = createSlice({
        name: 'series',
        initialState: {
            page: 1,
            isLoadingSerie: false,
            latestSearchWordSeries: '',
            listSeries: [],
            serieSelected: {}
        },
        reducers: {
            getSeriesTrends: (state, {payload} ) => {
                state.listSeries = payload.results;
                state.isLoadingSerie = false;
            },
            getAllSeries: (state, {payload} ) => {
                state.listSeries = payload.results;
                state.isLoadingSerie = false;
            },
            searchSeries: (state, {payload} ) => {
                state.listSeries = payload.data;
                state.latestSearchWordSeries = payload.search;
                state.isLoadingSerie = false;
            },
            checkLoading: (state) => {
                state.isLoadingSerie = true;
            },
            setLoadingFalse: (state) => {
                state.isLoadingSerie = false;
            },
        }
});
// Action creators are generated for each case reducer function
export const { getSeriesTrends, getAllSeries, searchSeries, checkLoading, setLoadingFalse } = seriesSlice.actions;