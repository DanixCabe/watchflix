import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./movies";
import { seriesSlice } from "./series";


export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        series: seriesSlice.reducer
    }
})