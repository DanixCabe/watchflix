import { BiSolidCameraMovie, BiSolidHome } from "react-icons/bi"
import { PiTelevisionSimpleFill } from "react-icons/pi"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Search } from "./Search"

export const Navbar = () => {
    return (
        <nav className="border-b-0 fixed w-full backdrop-blur-xl bg-[rgba(22,22,23,0.6)] z-50">
            <div className="max-w-screen-xl mx-auto p-2 py-3 flex flex-row items-center justify-between">
                <div className="flex items-center">
                    <img src="/images/ico/ico-cinema.png"  className="h-4 w-auto mr-2 md:mr-4"/>
                    <h1 className="text-base text-white font-semibold tracking-widest uppercase">Watchflix</h1>
                </div>
                <div className="hidden md:flex items-center gap-4" >
                        <NavLink to='/'  className={({isActive}) => `font-medium text-center  text-gray-400 hover:text-gray-200 text-sm ${isActive ? 'text-gray-200' : ''}`}>
                           Home
                        </NavLink>
                        <NavLink to='/movies'  className={({isActive}) => `font-medium text-center  text-gray-400 hover:text-gray-200 text-sm ${isActive ? 'text-gray-200' : ''}`}>
                            Movies
                        </NavLink>
                        <NavLink to='/series'  className={({isActive}) => `font-medium text-center  text-gray-400 hover:text-gray-200 text-sm ${isActive ? 'text-gray-200' : ''}`}>
                            Series
                        </NavLink>

                </div>
                <div className="hidden md:flex items-center ">
                    <Search/>
                </div>
                <button data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-gray-200" >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
        </nav>
    )
}
