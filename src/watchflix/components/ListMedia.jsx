import { Link } from "react-router-dom"
import { useDate } from "../hooks"
import { PiPlayCircle } from "react-icons/pi"



export const ListMedia = ({media, type}) => {
    const { setDateFull } = useDate()

    return (
        <>
            <Link className="relative animate__animated  animate__fadeIn" to={`/${type}/media/${media.id}`}>
                <div className="movie-serie-list relative before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantBottonCard before:absolute group before:z-10 h-full">
                    {
                        media.backdrop_path === null ? 
                        <img src={`/public/images/img/image-not-found.png`} className="w-full saturate-[1.1] rounded-xl h-full"/>
                        :
                        <img src={`https://image.tmdb.org/t/p/w1280${media.backdrop_path}`} className="w-full saturate-[1.1] rounded-xl h-full"/>
                    }
                    <div className="absolute scroll-parallax bottom-0 p-4 z-10 group-hover:text-white transition-colors duration-300 hover:duration-300 hover:transition">
                        <p className="text-sm font-semibold pb-1">{(type === 'movies' ? media.title : media.original_name)}</p>
                        <p className="text-xs font-normal ">{setDateFull((type === 'movies' ? media.release_date : media.first_air_date))}</p>
                    </div>
                    <span className="absolute w-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%]   inline-block opacity-0 group-hover:opacity-100 hover:transition group-hover:-translate-y-[50%] hover:duration-300 transition duration-300 z-30">
                        <PiPlayCircle className="w-full h-auto cursor-pointer opacity-70"></PiPlayCircle>
                    </span>
                </div>
            </Link>
        </>
    )
}