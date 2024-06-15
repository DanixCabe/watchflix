import { checkLoading, getAllMovies, getMoviesNow, getMoviesTrends, searchMovie, searchMovieId, getGenreMovieList, setLoadingFalse } from "./moviesSlice"

const {
    VITE_APIKEY,
    VITE_TOKEN,
    VITE_URL,
} = import.meta.env

const optionsGet = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: VITE_TOKEN,
    },

}

export const startGetMoviesNow = () => {
    return async(dispatch) => {
        
        const endpoint = `${VITE_URL}movie/now_playing?&language=en-US&page=1`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response;
                const {page} = data
                const listMovies = data.results;
                const finalData = {page: page, results: []};
                // console.log(listMovies)
                const list = listMovies.map(movie => {
                    // dispatch(startGetImages(movie.id))

                    return {id: movie.id, title: movie.title, image_poster: movie.poster_path, backdrop_path: movie.backdrop_path, vote_average: movie.vote_average, overview: movie.overview, genres: movie.genre_ids}
                })
                finalData.results.push(...list);
                dispatch(getMoviesNow(finalData))
            })
            .catch(err => console.error(err))

        setTimeout(() => {
            dispatch(setLoadingFalse());
        }, 1500);
    }
}

export const startGetMoviesTrends = () => {
    return async(dispatch) => {
        
        const endpoint = `${VITE_URL}/trending/movie/day?&language=en-US`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response;
                const {page} = data
                const listMovies = data.results;
                const finalData = {page: page, results: []};
                const list = listMovies.map(movie => {
                    // dispatch(startGetImages(movie.id))
                    return {id: movie.id, title: movie.title, image_poster: movie.poster_path, backdrop_path: movie.backdrop_path, vote_average: movie.vote_average, overview: movie.overview}
                })
                finalData.results.push(...list);
                dispatch(getMoviesTrends(finalData))
            })
            .catch(err => console.error(err))

        setTimeout(() => {
            dispatch(setLoadingFalse());
        }, 1500);
    }
}

export const startGetAllMovies = (page) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}movie/popular?&language=en-US&page=${page}`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response;
                const {page} = data
                const listMovies = data.results;
                const finalData = {page: page, results: []};
                const list = listMovies.map(movie => {
                    return {id: movie.id, title: movie.title, image_poster: movie.poster_path, backdrop_path: movie.backdrop_path, vote_average: movie.vote_average, overview: movie.overview}
                })
                finalData.results.push(...list);
                dispatch(getAllMovies(finalData))
            })
            .catch(err => console.error(err));

        setTimeout(() => {
            dispatch(setLoadingFalse());
        }, 1500);
    }
}

export const startSearchMovie = ({search}) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}search/movie?query=${search}&include_adult=true&language=en-US&page=1`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response;
                dispatch(searchMovie({data: data, search: search}))
            })
            .catch(err => console.error(err))

        setTimeout(() => {
            dispatch(setLoadingFalse());
        }, 1500);
    }
}

export const startSearchMoviePerId = (id) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}movie/${id}?language=en-US`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response;
                dispatch(searchMovieId(data))
            })
            .catch(err => console.error(err))

        setTimeout(() => {
            dispatch(setLoadingFalse());
        }, 1500);
    }
}

export const startGetImages = (movieId) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}movie/${movieId}/images`
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response
                const posters = data.posters
            })
            .catch(err => console.error(err));
    }
}

export const startGetGenreMovies = () => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}genre/movie/list`
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response
                // console.log(response.genres)
                dispatch(getGenreMovieList(data.genres))
            })
            .catch(err => console.error(err));
    }
}

export const startCheckLoadingMovie = () => {
    return async(dispatch) => {
        dispatch(checkLoading());
    }
}