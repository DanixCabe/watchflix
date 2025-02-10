import {  useDispatch, useSelector } from "react-redux"
import { SwiperMoviesHome, SwiperPoster } from "../components";
import { Loading } from "../ui"
import { startGetMoviesNow, startSetLoadingFalseMovie } from "../../store/movies";
import { startGetSeriesTrends, startSetLoadingFalseSerie } from "../../store/series";
import { useEffect } from "react";


export const HomePage = () => {
    const dispatch = useDispatch();
    const {listMoviesHome, isLoadingMovie, listGenreMovies, latestSearchWordMovies} = useSelector(state => state.movies);
    const {listSeries, isLoadingSerie, latestSearchWordSeries} = useSelector(state => state.series);
    // console.log(listMoviesHome)
    

    useEffect(() => {
        dispatch(startGetMoviesNow())
        dispatch(startGetSeriesTrends())
        dispatch(startSetLoadingFalseMovie())
        dispatch(startSetLoadingFalseSerie())
    }, [])

    return (
        <>
        {/* <Loading/> */}
            {
                (isLoadingMovie || isLoadingSerie) ? <Loading/>
                :
                <section className="h-full pb-28 animate__animated  animate__fadeIn">
                    <SwiperMoviesHome elements={listMoviesHome} title={"Movies"} genres={listGenreMovies}/>
                    {/* <SwiperMoviesHome elements={listSeries} title={"Series"}/> */}
                </section>
            }
        </>
    )
}
