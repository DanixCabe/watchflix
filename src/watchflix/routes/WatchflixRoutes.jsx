import { Outlet } from "react-router-dom"
import { Navbar, Offcanvas } from "../ui"
import { startGetGenreMovies, startGetMoviesNow } from "../../store/movies"
import { startGetSeriesTrends } from "../../store/series"
import { useEffect, useMemo } from "react"
import { useDispatch } from "react-redux"



export const WatchflixRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetGenreMovies())
        dispatch(startGetMoviesNow())
        dispatch(startGetSeriesTrends())
    }, [])


    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main className="bg-[#0a0a0a] min-h-screen ">

                <section className="mx-auto w-full 3xl:max-w-[1920px]">
                    <Outlet/>
                </section>
                {/* <DrawerMenu/> */}
            </main>
            <Offcanvas/>
        </>
    )
}