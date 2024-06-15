
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation  } from 'swiper/modules';
import { useVoteAverage } from '../hooks';

export const SwiperPoster = ({elements}) => {

    const {setColorVote, setVote} = useVoteAverage();

    return (
        <section className=' animate__animated  animate__fadeIn'>
            
            <Swiper
                grabCursor={true}
                loop={false}
                spaceBetween={32}
                breakpoints={{
                    320: {
                        slidesPerView: 1.4,
                    },
                    567: {
                        slidesPerView: 2.3,
                    },
                    767: {
                        slidesPerView: 2.7,
                    },
                    1023: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 6,
                    }
                }}
                pagination={{el:'.swiper-pagination',clickable: true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className='swiper-poster mx-2'
            >

                {
                    elements.map((poster) =>  
                        (
                            <SwiperSlide key={poster.id} className="swiper-poster__swiper-slide-poster hover:scale-110 duration-200 cursor-pointer h-auto">
                                <div className='relative'>
                                    <img src={`https://image.tmdb.org/t/p/w154${poster.image_poster}`} className='w-auto h-64'/>
                                    <p className={`backdrop-opacity-10 backdrop-invert bg-black/50 font-bold absolute top-0 right-0 p-1 ${setColorVote(poster.vote_average)}`}>{setVote(poster.vote_average)}</p>
                                </div>
                            </SwiperSlide>
                        )
                    )
                }
                <div className='slider-controler h-auto'>
                    <div className='swiper-button-next'></div>   
                    <div className='swiper-button-prev'></div>   
                </div>
            </Swiper>
        </section>
    )
}
