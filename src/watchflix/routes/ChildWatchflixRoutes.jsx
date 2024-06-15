
import { Navigate } from "react-router-dom";
import { SeriesPage, MoviesPage, HomePage, MovieSearch, MoviesGenrePage } from "../pages";


export const ChildWatchflixRoutes = [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: 'movies',
        element: <MoviesPage/>,
    },
    {
        path: 'movies/media/:id',
        element: <MovieSearch/>
    },
    {
        path: 'movies/genre/:id',
        element: <MoviesGenrePage/>
    },
    {
        path: 'series',
        element: <SeriesPage/>,
    },
    {
        path: '/*',
        element: <Navigate to='/'/>,
    }
]

