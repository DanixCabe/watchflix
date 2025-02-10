import { Outlet } from "react-router-dom"
import { ModalTrailer, Navbar, Offcanvas } from "../ui"
import { startGetGenreMovies, startGetMoviesNow } from "../../store/movies"
import { startGetSeriesTrends } from "../../store/series"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"




export const WatchflixRoutes = () => {

    const {listGenreMovies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetGenreMovies())
        dispatch(startGetMoviesNow())
        dispatch(startGetSeriesTrends())
    }, [])


    return (
        <>
            <header>
                <Navbar genres={listGenreMovies}/>
            </header>
            <main className="bg-black min-h-screen ">

                <section className="mx-auto w-full 3xl:max-w-[1920px]">
                    <Outlet/>
                </section>
                {/* <DrawerMenu/> */}
            </main>
            <Offcanvas/>
            <ModalTrailer/>
        </>
    )
}