import { useDispatch, useSelector } from "react-redux";
import { SwiperPoster } from "../../components"
import { useEffect } from "react";
import { startGetAllMovies } from "../../../store/movies/thunks";
import { Loading, Search } from "../../ui"

export const MoviesGenrePage = () => {
    const dispatch = useDispatch();
    const {listMoviesHome, listMovies, isLoadingMovie, latestSearchWordMovies} = useSelector(state => state.movies);

    useEffect(() => {
        console.log("prueba")
        dispatch(startGetAllMovies(1))
    }, [])
    

    return (
        <>
            <section className="h-full animate__animated  animate__fadeIn">
                <Search/>
                <h4 className="text-title text-cyan-500 font-semibold text-5xl ">Movies</h4>
                {
                    (isLoadingMovie) ? <Loading/>
                    :
                    <SwiperPoster elements={listMovies}/>
                }
            </section>
        </>
    )
}
