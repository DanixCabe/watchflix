import { Link } from 'react-router-dom';
import {HiMenu} from 'react-icons/hi'
import {BiSolidCameraMovie, BiSolidHome} from 'react-icons/bi'
import {PiTelevisionSimpleFill} from 'react-icons/pi'
import { Drawer } from 'flowbite';


export const DrawerMenu = () => {
    return (
        <>
            
            <div className="text-center hidden">
                <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700  focus:ring-blue-800" type="button" data-drawer-target="drawer-swipe" data-drawer-show="drawer-swipe" data-drawer-placement="bottom" data-drawer-edge="true" data-drawer-edge-offset="bottom-[60px]" aria-controls="drawer-swipe">
                    Show swipeable drawer
                </button>
            </div>

            
            <div id="drawer-swipe" className="fixed z-40 w-full overflow-y-auto border-trounded-t-lg border-gray-700 bg-gray-800 transition-transform left-0 right-0 translate-y-full bottom-[60px] mt-10" aria-labelledby="drawer-swipe-label">
                <div className="p-4 cursor-pointer  hover:bg-gray-700 duration-200" data-drawer-toggle="drawer-swipe">
                    <span className="absolute w-8 h-1 -translate-x-1/2 rounded-lg top-3 left-1/2 bg-gray-600"></span>
                    <h5 id="drawer-swipe-label" className="inline-flex items-center text-base  text-gray-400 font-medium space-x-2"><HiMenu className='mr-2'/> Menu</h5>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 lg:flex lg:flex-row lg:w-full md:justify-center">
                    <Link to='/'  className="p-4 rounded-lg cursor-pointer  hover:bg-gray-600 bg-gray-700 lg:max-w-[360px] lg:w-[300px]">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2  bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                            <BiSolidHome className='text-gray-400 text-lg'/>
                        </div>
                        <div className="font-medium text-center  text-gray-400">Home</div>
                    </Link>
                    <Link to='/movies'  className="p-4 rounded-lg cursor-pointer  hover:bg-gray-600 bg-gray-700 lg:max-w-[360px] lg:w-[300px]">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2  bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                            <BiSolidCameraMovie className='text-gray-400'/>
                        </div>
                        <div className="font-medium text-center  text-gray-400 text-lg">Movies</div>
                    </Link>
                    <Link to='/series'  className="p-4 rounded-lg cursor-pointer  hover:bg-gray-600 bg-gray-700 lg:max-w-[360px] lg:w-[300px]">
                        <div className="flex justify-center items-center p-2 mx-auto mb-2  bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                            <PiTelevisionSimpleFill className='text-gray-400'/>
                        </div>
                        <div className="font-medium text-center  text-gray-400 text-lg">Series</div>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}
