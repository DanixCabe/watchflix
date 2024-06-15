import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { startSearchMovie } from "../../../store/movies/thunks";


export const Search = () => {

    const dispatch = useDispatch();

    const {search, formState, onInputChange, onResetForm} = useForm({search: ''});


    const onSubmit = (event) => {
        event.preventDefault();
        if(search.trim().length <= 0) return;
        dispatch(startSearchMovie(formState))
        onResetForm(search);
    }

    return (
        <form onSubmit={onSubmit} className="w-full">   
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input 
                    name="search"
                    onChange={onInputChange}
                    value={search}
                    type="search" 
                    id="default-search" 
                    className="block w-full pl-10 text-xs text-gray-200 placeholder:text-gray-400 border-0 rounded-lg bg-neutral-900 focus:bg-neutral-800 focus:ring-0  outline-none" 
                    placeholder="Search in Watchflix" 
                    required
                />
            </div>
        </form>
    )
}
