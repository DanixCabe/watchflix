import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { startSearchMoviePerId } from "../../../store/movies";
import { FaStar } from "react-icons/fa";
import { RiTimer2Fill } from "react-icons/ri";

import { Loading } from "../../ui";
import { useDate } from "../../hooks";

export const MovieSearch = () => {
    const dispatch = useDispatch();
    const {id} = useParams()
    const { movieSearched , listGenreMovies, isLoadingMovie } = useSelector(state => state.movies);
    const { setDate } = useDate()
    
    console.log(movieSearched.id)
    console.log(movieSearched)
    // console.log(listGenreMovies)
    useEffect(() => {
        dispatch(startSearchMoviePerId(id))
    }, [])

    return (
        <>
            {
                (movieSearched.id === undefined) ? <Loading/>
                :
                <section>
                    <article className='linearBanner animate__animated -z-10 top-0  animate__fadeIn px-5 md:px-8 lg:px-12 1xl:px-16 section-swiper flex flex-col justify-end h-screen before:content-[""] before:absolute before:inset-0 sm:before:h-screen before:z-[1] after:content-[""] after:absolute after:inset-0 sm:after:h-screen after:z-[1] '>
                        <div>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movieSearched.backdrop_path}`}
                                className="w-full h-screen absolute object-cover inset-0"
                            />
                        </div>
                    </article>
                    <article className="absolute z-30 w-full h-auto px-4 items-end justify-end pb-0 top-0 lg:mt-0 lg:pt-[70vh] xl:pt-[65vh] overflow-scroll md:hidden mt-[27rem] py-4 bg-[rgba(22,22,23,0.6)]">
                        <p className="uppercase text-white text-2xl md:text-3xl font-extrabold">{movieSearched.title}</p>
                        <article className="flex items-center justify-between">
                            <div className="text-white flex items-center justify-start text-base font-semibold mt-2">
                                <FaStar className="me-2 mb-1"/>
                                <p className="">{parseFloat(movieSearched.vote_average).toFixed(1)} / 10</p>

                            </div>
                            <div className="text-white/75 flex items-center justify-start  font-semibold">
                                <RiTimer2Fill/>
                                <p className="text-xs ms-1 mt-1">{movieSearched.runtime}</p>
                                <p className="text-xs ms-2 mt-1">{setDate(movieSearched.release_date)}</p>

                            </div>

                        </article>
                           
                        {
                            (<ul className='inline-flex gap-3'>
                                {
                                    movieSearched.genres.map((genre, i) =>  
                                    (
                                        <li key={genre.id}>
                                            <Link className='text-white/75 text-xs md:text-sm font-normal hover:text-white' to={`/movies/genre/${genre.id}`}>{genre.name}</Link>
                                        </li>
                                    )
                                    )
                                }
                            </ul>)
                        }
                        <p className="my-3 text-lg">SYNOPSIS</p>
                        <p className="mt-3 text-sm">{movieSearched.overview}</p>
                        <hr className="my-6"/>
                        <hr className="my-5"/>
                        <hr className="my-5"/>
                        <hr className="my-5"/>
                        <hr className="my-5"/>
                        <hr className="my-5"/>
                        <hr className="my-5"/>
                        <hr className="my-5"/>

                    </article>

                </section>
            }

        </>
    )
}