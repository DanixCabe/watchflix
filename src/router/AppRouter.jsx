import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";
import { ChildWatchflixRoutes, WatchflixRoutes } from '../watchflix/routes' 




export const router = createHashRouter([
    {
        path: '/',
        element: <WatchflixRoutes/>,
        children : ChildWatchflixRoutes
    },
]);

export const AppRouter = () => {
    return(
        <RouterProvider router={router}/>
    )
}