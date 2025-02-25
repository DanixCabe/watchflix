import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { startGetCastPerMovie, startGetVideoTrailerPerMovie, startSearchMoviePerId, startSetLoadingFalseMovie } from "../../../store/movies";
import { FaPlay, FaStar } from "react-icons/fa";
import { RiTimer2Fill } from "react-icons/ri";
import { Loading, ModalTrailer } from "../../ui";
import { useDate } from "../../hooks";
import { ListMedia, ProductionInformation, SwiperCast } from "../../components";

export const MovieSearch = () => {
    const dispatch = useDispatch();
    const {id} = useParams()
    const { movieSearched, listMoviesInSearchedPage, listGenreMovies, isLoadingMovie } = useSelector(state => state.movies);
    const { setDate } = useDate()

    useEffect(() => {
        dispatch(startSearchMoviePerId(id))
        dispatch(startSetLoadingFalseMovie())
    }, [])

    console.log(movieSearched)
    const onOpenModal = () => {
        const $targetEl = document.getElementById('modalTrailer');
        const options = {
            closable: true,
            onHide: () => {
                const videoTrailer = document.querySelector(".modalTrailer-iframe");
                videoTrailer.remove()
            },
            onShow: () => {
                let divIframeTrailer = document.querySelector(".modalTrailer-content");
                const videoTrailer = `<iframe class="w-full h-80 md:h-96 1xl:h-[600px] 2xl:h-[800px] modalTrailer-iframe" allow="accelerometer; autoplay;"  src="https://www.youtube.com/embed/${movieSearched.trailer[0].key}?rel=0&amp;autoplay=1"></iframe>`
                divIframeTrailer.innerHTML += videoTrailer
            },
        };
        const modalTrailer = new Modal($targetEl, options)
        modalTrailer.toggle()
    }

    return (
        <>
            {
                (movieSearched.id != id  || movieSearched.trailer == 0 || movieSearched.cast == undefined) ? <Loading/>
                :
                <>
                <section>
                    <article className='linearBanner-page animate__animated -z-10 top-0 animate__fadeIn px-5 md:px-8 lg:px-12 1xl:px-16 md:pb-10 section-swiper flex flex-col justify-end h-screen before:content-[""] before:absolute before:inset-0 sm:before:h-screen before:z-[1] after:content-[""] after:absolute after:inset-0 sm:after:h-screen after:z-[1] '>
                        <div>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movieSearched.backdrop_path}`}
                                className="w-full h-screen absolute object-cover inset-0"
                            />
                        </div>
                        <article className="z-30 pb-3 lg:flex lg:items-center lg:justify-between lg:gap-10">
                            <article className="">
                                <p className="uppercase text-white text-2xl md:text-3xl font-extrabold ">{movieSearched.title}</p>
                                <article className="flex items-center justify-between lg:block">
                                    <div className="text-white flex items-center justify-start text-base font-semibold mt-2 md:my-4">
                                        <FaStar className="me-2 mb-[2px] text-yellow-400"/>
                                        <p className="">{parseFloat(movieSearched.vote_average).toFixed(1)} / 10</p>

                                    </div>
                                    <div className="text-white/75 flex items-center justify-start  font-semibold md:mt-3">
                                        <RiTimer2Fill className="mb-[2px] 1xl:mb-[1px]"/>
                                        <p className="text-xs 1xl:text-base ms-1 text-white/75">{movieSearched.runtime} min</p>
                                        <p className="text-xs 1xl:text-base ms-2 text-white/75">{setDate(movieSearched.release_date)}</p>

                                    </div>
                                    
                                </article>
                                {
                                    (<ul className='inline-flex gap-3 mt-2'>
                                        {
                                            movieSearched.genres.map((genre, i) =>  
                                            (
                                                <li key={genre.id}>
                                                    <Link className='text-white/75 text-xs xl:text-sm 1xl:text-base font-normal hover:text-white' to={`/movies/genre/${genre.id}`}>{genre.name}</Link>
                                                </li>
                                            )
                                            )
                                        }
                                    </ul>)
                                }
                                <button onClick={onOpenModal} className={`linearBanner-page__btn-trailer uppercase flex items-center justify-center px-4 py-1 mt-3 text-xs font-semibold  border text-white border-white rounded-full hover:bg-white hover:text-black ${movieSearched.trailer  == 0 ? 'hidden' : ''}`}
                                    data-modal-target="modalTrailer" data-modal-toggle="modalTrailer" type="button"
                                >
                                    Trailer 
                                </button>
                            </article>
                            
                            <article className="xl:max-w-xl">
                                <p className={`mt-4 text-base md:text-lg lg:text-base xl:text-lg font-light lg:font-semibold leading-7 text-white/90 uppercase md:pb-3 lg:pb-1 ${!movieSearched.tagline ? 'hidden' : ''}`}>{movieSearched.tagline}</p>
                                <p className="text-sm md:text-base lg:text-sm xl:text-base font-extralight leading-7 md:leading-8 lg:leading-8 text-white/90 hidden md:block ">{movieSearched.overview}</p>
                            </article>

                            <article className="hidden xl:block">
                                <img className="w-[620px] xl:w-60 1xl:w-48 h-auto " src={`https://image.tmdb.org/t/p/original/${movieSearched.poster_path}`}/>
                            </article>
                        </article>
                    </article>

                    <article className="z-30 px-5 md:px-8 lg:px-12 1xl:px-16 bg-black md:hidden">
                        <p className="text-sm font-extralight leading-7 text-white/90">{movieSearched.overview}</p>
                    </article>
                    {/* {
                            (<ul className='inline-flex gap-3'>
                                {
                                    movieSearched.production_companies.map((companies, i) =>  
                                    (
                                        <li key={companies.id}>
                                            <p className="w-32 h-auto text-white">{companies.name}</p>
                                        </li>
                                    )
                                    )
                                }
                            </ul>)
                        } */}
                </section>

                {
                    (listMoviesInSearchedPage == undefined || listMoviesInSearchedPage.length == 0) ? '' 
                    :
                    <section className=" px-5 md:px-8 lg:px-12 1xl:px-16  pt-16">
                        <h2 className="text-2xl md:text-4xl font-semibold mb-14 text-white/90">Recomendations</h2>

                        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                            {
                                
                                    
                                listMoviesInSearchedPage.map((media, i) =>  
                                    (
                                        <ListMedia key={i} media={media} type={'movies'}></ListMedia>
                                    )
                                )
                                    
                                
                            } 
                        </article>
                    </section> 
                }
                <SwiperCast elements={movieSearched.cast} />
                                
                <ProductionInformation 
                production_companies={movieSearched.production_companies} 
                production_countries={movieSearched.production_countries} 
                budget={"No information available at the moment"}
                revenue="No information available at the moment"
                />
            </>
            }

        </>
    )
}