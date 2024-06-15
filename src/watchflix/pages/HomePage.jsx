import {  useDispatch, useSelector } from "react-redux"
import { SwiperMoviesHome, SwiperPoster } from "../components";
import { Loading } from "../ui"


export const HomePage = () => {
    const dispatch = useDispatch();
    const {listMoviesHome, isLoadingMovie, listGenreMovies, latestSearchWordMovies} = useSelector(state => state.movies);
    const {listSeries, isLoadingSerie, latestSearchWordSeries} = useSelector(state => state.series);
    // console.log(listMoviesHome)

    return (
        <>
        {/* <Loading/> */}
            {
                (isLoadingMovie) ? <Loading/>
                :
                <section className="h-full pb-28 animate__animated  animate__fadeIn">
                    <SwiperMoviesHome elements={listMoviesHome} title={"Movies"} genres={listGenreMovies}/>
                    {/* <SwiperMoviesHome elements={listSeries} title={"Series"}/> */}
                </section>
            }
        </>
    )
}
