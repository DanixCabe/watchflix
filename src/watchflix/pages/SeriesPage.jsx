import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwiperPoster } from "../components";
import { Loading, Search } from "../ui";
import { startGetAllSeries } from "../../store/series";



export const SeriesPage = () => {
    const dispatch = useDispatch();
    const {listSeries, isLoadingSerie, latestSearchWordSeries} = useSelector(state => state.series);
    
    useEffect(() => {
        dispatch(startGetAllSeries(1))
    }, [])
    
    return (
        <>
            {
                (isLoadingSerie) ? <Loading/>
                :
                <section className="h-full animate__animated  animate__fadeIn">
                    <Search/>
                    <h4 className="text-title text-cyan-500 font-semibold text-5xl ">Series</h4>
                    <SwiperPoster elements={listSeries}/>
                </section>
            }
        </>
    )
}
