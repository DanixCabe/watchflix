import { Popover } from 'flowbite';
import {GiCardJoker ,GiRollingDices} from 'react-icons/gi'
import { NavLink } from 'react-router-dom';
import { Search } from './Search';

export const Offcanvas = ({username}) => {
    return (
        <>
    
            <aside id="drawer-right-example" className="fixed top-0 right-0 z-50 h-screen w-64  p-4 overflow-y-auto transition-transform translate-x-full bg-black" tabIndex="-1" aria-labelledby="drawer-right-label">
                <header className='flex h-12'>
                    <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="flex text-gray-400 bg-transparent  rounded-lg text-sm p-1 justify-end ml-auto hover:text-white" >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                </header>
                <div className="flex flex-col items-start gap-3">
                    <NavLink to='/'  className={({isActive}) => `font-medium text-center   hover:text-gray-200 text-sm ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
                        Home
                    </NavLink>
                    <NavLink to='/movies'  className={({isActive}) => `font-medium text-center   hover:text-gray-200 text-sm ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
                        Movies
                    </NavLink>
                    <NavLink to='/series'  className={({isActive}) => `font-medium text-center   hover:text-gray-200 text-sm ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
                        Series
                    </NavLink>
                    <hr className='w-full border-gray-500 mt-3'/>
                    <Search/>
                </div>
            </aside>
        </>
    )
}
