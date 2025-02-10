
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation, Autoplay, FreeMode  } from 'swiper/modules';


export const SwiperCast = ({elements}) => {
    console.log(elements.length)
    return(
        <>
            <section className="px-5 md:px-8 lg:px-12 py-32 lg:mb-0" id="castInformation">
                <article className="z-30 md:px-16 lg:px-20 h-full 2xl:px-16 max-w-[1570px] mx-auto">
                    <h2 className="text-2xl md:text-4xl font-semibold md:mb-10 mb-4 text-white/90">Cast</h2>
                    {
                        (elements.length == 0) ? <p className="text-md md:text-2xl font-semibold text-white/90">No information available at the moment</p>
                        :
                        <div className="relative z-10">
                            <Swiper
                                grabCursor={true}
                                loop={false}
                                spaceBetween={16}
                                autoplay={false}
                                freeMode={true}
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
                                    }
                                }}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                    clickable: true,
                                }}
                                modules={[EffectCoverflow, Navigation, Pagination, Autoplay, FreeMode]}
                                className='swiper-cast mx-8'
                            >

                                {
                                    elements.map((profile) =>  
                                        {
                                            return profile.profile_path !== null ?
                                            <SwiperSlide id={profile.id} key={profile.id} className="swiper-cast__swiper-slide-cast  cursor-pointer h-auto">
                                                <figure className="lg:w-[230px] 1xl:w-full h-full figure-cast after:content-[''] after:h-full after:w-full after:top-0 after:absolute after:z-10 after:inset-0">
                                                    <img src={`https://image.tmdb.org/t/p/w185${profile.profile_path}`} className='w-full h-full rounded-md'/>
                                                </figure>
                                                <div className='absolute bottom-0 z-20 text-left w-full ps-4 pb-3'>
                                                    <p className='text-sm'>{profile.character}</p>
                                                    <p className='text-xs text-white/70'>{profile.original_name}</p>
                                                </div>
                                            </SwiperSlide>
                                            :
                                            <SwiperSlide id={profile.id} key={profile.id} className="swiper-cast__swiper-slide-cast  cursor-pointer h-auto">
                                                <figure className='lg:w-[230px] 1xl:w-full h-full'>
                                                    <img src="/public/images/img/default-avatar.png" className='w-full h-full rounded-md'/>
                                                </figure>
                                            </SwiperSlide>
                                        }
                                    )
                                }

                            </Swiper>
                            <div className='swiper-button-next swiper-cast__swiper-button-next bg-slate-700/50 px-6 py-6 text-white mt-4 -mr-6'></div>   
                            <div className='swiper-button-prev swiper-cast__swiper-button-prev bg-slate-700/50 px-6 py-6 text-white mt-4 -ml-6'></div>   

                        </div>
                    }

                </article>
            </section>
        </>

    )
}