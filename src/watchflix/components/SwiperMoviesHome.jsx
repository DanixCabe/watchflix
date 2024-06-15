
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation, Autoplay  } from 'swiper/modules';
import { useVoteAverage, useGenres, useBackgroundImage } from '../hooks';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiPlayButton } from 'react-icons/gi';

export const SwiperMoviesHome = ({elements, title, genres}) => {
    const {setColorVote, setVote} = useVoteAverage();
    const {setGenresName, genresBackground} = useGenres();
    const {setNameBackground, setIdBackground, setBackground, nameBackgroundImage, backgroundImage, idBackgroundImage} = useBackgroundImage();

    const changeBackgroundSection = (index = 0) => {
        setGenresName(genres, elements[index].genres)
        setIdBackground(elements[index].id)
        setBackground(elements[index].backdrop_path)
        setNameBackground(elements[index].title)
    }

    useEffect(() => {
        changeBackgroundSection()
    }, [])
    
    

    return (
        <section 
        className='linearBanner animate__animated  animate__fadeIn px-5 md:px-8 lg:px-12 1xl:px-16 relative z-30 section-swiper flex flex-col justify-end h-screen before:content-[""] before:absolute before:inset-0 sm:before:h-screen before:z-[1] after:content-[""] after:absolute after:inset-0 sm:after:h-screen after:z-[1]'>
            <picture className=''>
                <img
                    src={`https://image.tmdb.org/t/p/original${backgroundImage}?w=1920&q=100`}
                    className='w-full h-screen absolute object-cover inset-0'
                />
            </picture>
            <div className='z-10 w-fit'>
                <p className='text-white text-xl md:text-2xl font-semibold uppercase mb-2'>{nameBackgroundImage}</p>
                {
                    (genresBackground.length > 0) ?
                    (<ul className='inline-flex gap-3'>
                        {
                            genresBackground.map((genre, i) =>  
                               (
                                 <li key={genre.id}>
                                    <Link className='text-white/75 text-xs md:text-sm font-normal hover:text-white' to={`/movies/genre/${genre.id}`}>{genre.name}</Link>
                                 </li>
                               )
                            )
                        }
                    </ul>)
                    : ''
                }
                
            </div>
            <div className='z-10 pb-12 pt-3 w-fit'>
                <Link className='text-slate-300 text-xl hover:text-white pointer w-auto' to={`/movies/media/${idBackgroundImage}`}>
                    <GiPlayButton/>
                </Link>
            </div>

            <h4 className="text-white font-medium text-base z-10 uppercase">Last movies</h4>
            <div className="relative z-10 pb-8">
                <Swiper
                    grabCursor={true}
                    loop={true}
                    spaceBetween={32}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        567: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        1023: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                        1400: {
                            slidesPerView: 7,
                        },
                        1900: {
                            slidesPerView: 8,
                        },
                    }}
                    pagination={{el:'.swiper-pagination',clickable: true}}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
                    className='swiper-poster mx-8'
                    onSlideChange={(index) => changeBackgroundSection(index.realIndex)}
                >

                    {
                        elements.map((poster) =>  
                            (
                                <SwiperSlide id={poster.id} key={poster.id} className="swiper-poster__swiper-slide-poster  cursor-pointer h-auto ">
                                    <Link className='relative' to={`/movies/media/${poster.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w342${poster.image_poster}`} className='w-auto h-auto rounded-md'/>
                                    </Link>
                                </SwiperSlide>
                            )
                        )
                    }

                    <div className="swiper-pagination"></div>
                </Swiper>
                <div className='swiper-button-next text-white mt-4 -mr-6'></div>   
                <div className='swiper-button-prev text-white mt-4 -ml-6'></div>   

            </div>
        </section>
    )
}
