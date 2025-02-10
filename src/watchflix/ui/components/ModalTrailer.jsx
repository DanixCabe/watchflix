import { Modal } from "flowbite";


export const ModalTrailer = () => {

    return (
        <div id="modalTrailer" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl 1xl:max-w-4xl 1xl:max-h-[600px] 2xl:max-w-7xl 2xl:max-h-[800px]">
                <div className="relative bg-black rounded-lg shadow dark:bg-gray-700 modalTrailer-content" ></div>
            </div>
        </div>
    )
}
