import { useDispatch, useSelector } from "react-redux";
import { ListMedia, SwiperPoster } from "../../components"
import { useEffect } from "react";
import { startGetAllAddMoreMovies, startGetAllMovies, startSetLoadingFalseMovie } from "../../../store/movies/thunks";
import { Loading, LoadingList, Search } from "../../ui"
import { useCounterPage } from "../../hooks";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const { listMoviesPopular, isLoadingMovie, isLoadingGetMoreMovies} = useSelector(state => state.movies);
    const { countPage, addCounter } = useCounterPage() // HOOK

    useEffect(() => {
        dispatch(startGetAllMovies())
        dispatch(startSetLoadingFalseMovie())
    }, [])
    
    
    const onAddMoreMovies = (value) => {
        addCounter(value)
        dispatch(startGetAllAddMoreMovies(countPage))
    }

    return (
        <>
                {
                    (isLoadingMovie) ? <Loading/>
                    :
                    <section className="h-full pb-28 animate__animated  animate__fadeIn pt-20 px-5 md:px-8 lg:px-12 1xl:px-16">
                        <article className="text-center mt-4 mb-8">
                            <h2 className="uppercase text-3xl font-semibold">Explore</h2>
                            <h2 className="text-sm text-gray-400 mt-1 opacity-85">Explore all movies in Watchflix. Find movies of your favorites genres</h2>
                        </article>
                        <article className="">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                                {
                                    
                                        
                                    listMoviesPopular.map((media, i) =>  
                                        (
                                            <ListMedia key={i} media={media} type={'movies'}></ListMedia>
                                        )
                                    )
                                        
                                    
                                } 
                            </div>
                            {
                            (isLoadingGetMoreMovies) ? 
                            <article className="flex items-center justify-center">
                                <LoadingList/>
                            </article>
                            : ''
                            }

                        </article>
                        <div className="flex items-center justify-center mt-5">
                            <button onClick={() => onAddMoreMovies(1)} className={`uppercase flex items-center justify-center px-4 py-1 mt-3 text-xs font-semibold  border text-white border-white rounded-full hover:bg-white hover:text-black `}
                                    type="button"
                                >Show More 
                            </button>
                        </div>
                    </section>
                }
        </>
    )
}
