
import { useState } from 'react';

// Import Swiper styles


export const ProductionInformation = ({production_companies, production_countries, budget, revenue}) => {
    // console.log(production_companies)
    // console.log(production_countries)

    return(
        <>
            <section className="px-5 md:px-8 lg:px-12 pb-24" id="productionInformation">
                <article className='z-30 md:px-16 lg:px-20 h-full 2xl:px-16 max-w-[1570px] mx-auto'>
                    <div className='grid xl:grid-cols-4 md:grid-cols-2 md:gap-5 xl:gap-4 gap-4'>
                        <div>
                            <p className='text-2xl xl:text-xl 1xl:text-2xl text-white/70 mb-2'>Production Companies</p>
                            {
                                production_companies.map((company,i ) =>
                                    (
                                        <p key={i} className='text-white/90 '>{company.name}</p>
                                    )
                                )
                            }
                            
                        </div>
                        <div>
                            <p className='text-2xl xl:text-xl 1xl:text-2xl text-white/70 mb-2'>Production Country</p>
                            {
                                production_countries.map((country,i ) =>
                                    (
                                        <p key={i} className='text-white/90'>{country.name}</p>
                                    )
                                )
                            }
                        </div>
                        <div>
                            <p className='text-2xl xl:text-xl 1xl:text-2xl text-white/70 mb-2'>Budget</p>
                            <p className='text-white/90'>{budget}</p>
                        </div>
                        <div>
                            <p className='text-2xl xl:text-xl 1xl:text-2xl text-white/70 mb-2'>Revenue</p>
                            <p className='text-white/90'>{revenue}</p>
                        </div>
                    </div>
                </article>
            </section>
        </>

    )
}