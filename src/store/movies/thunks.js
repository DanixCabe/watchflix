import { checkLoading, checkLoadingGetMoreMovies, getAllMovies, getAllAdditionalMovies, getMoviesNow, getMoviesTrends, getSearchMovie, getSearchMovieId, getGenreMovieList, getMovieTrailerMovie, getMovieCast, getMoviePerGenre, setAdditionalMoviePerGenre, getMoviesPerGenreInSearchedPage, setLoadingFalse } from "./moviesSlice"

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
                    return {id: movie.id, title: movie.title, image_poster: movie.poster_path, backdrop_path: movie.backdrop_path, vote_average: movie.vote_average, overview: movie.overview, genres: movie.genre_ids}
                })
                finalData.results.push(...list);
                dispatch(getMoviesNow(finalData))
            })
            .catch(err => console.error(err))

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
                    return {id: movie.id, title: movie.title, image_poster: movie.poster_path, backdrop_path: movie.backdrop_path, vote_average: movie.vote_average, overview: movie.overview}
                })
                finalData.results.push(...list);
                dispatch(getMoviesNow(finalData))
            })
            .catch(err => console.error(err))

    }
}

export const startGetAllMovies = () => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}movie/popular?&language=en-US&page=1`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response.results
                dispatch(getAllMovies(data))
            })
            .catch(err => console.error(err));

    }
}

export const startGetAllAddMoreMovies = (page) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}movie/popular?&language=en-US&page=${page}`
        dispatch(checkLoadingGetMoreMovies());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response.results
                dispatch(getAllAdditionalMovies(data))
            })
            .catch(err => console.error(err));

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
                dispatch(getSearchMovie({data: data, search: search}))
            })
            .catch(err => console.error(err))

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

//SearhMoviePerId when you click on the poster
export const startSearchMoviePerId = (id) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}movie/${id}?language=en-US`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response;
                dispatch(getSearchMovieId(data))
                dispatch(startGetListMoviesPerGenreInSearchPage(data.genres[0].id))
                dispatch(startGetVideoTrailerPerMovie(id))
                dispatch(startGetCastPerMovie(id))
            })
            .catch(err => console.error(err))


    }
}

export const startGetListMoviesPerGenreInSearchPage = (genre_id) => {
    return async(dispatch) => {
        console.log(genre_id)
        const endpoint = `${VITE_URL}discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre_id}`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response.results.slice(0, 10)
                console.log(data)
                dispatch(getMoviesPerGenreInSearchedPage(data))
            })
            .catch(err => console.error(err))

    }
}

export const startGetVideoTrailerPerMovie = (id) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}movie/${id}/videos?language=en-US`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = []
                response.results.forEach(video => {
                    if(video.type == "Trailer"){
                        data.push(video)
                    }
                });
                dispatch(getMovieTrailerMovie(data))
            })
            .catch(err => console.error(err))

    }
}

export const startGetCastPerMovie = (id) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}movie/${id}/credits?language=en-US`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response.cast
                console.log(data)
                dispatch(getMovieCast(data))
            })
            .catch(err => console.error(err))

    }
}

export const startGetListMoviesPerGenre = (genre_id) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre_id}`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response.results
                dispatch(getMoviePerGenre(data))
            })
            .catch(err => console.error(err))

    }
}

export const startGetAddMoreListMoviesPerGenre = (genre_id, page) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}discover/movie?language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre_id}`
        dispatch(checkLoadingGetMoreMovies());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response.results
                dispatch(setAdditionalMoviePerGenre(data))
            })
            .catch(err => console.error(err))

    }
}

export const startCheckLoadingMovie = () => {
    return async(dispatch) => {
        dispatch(checkLoading());
    }
}

export const startSetLoadingFalseMovie = () => {
    return async(dispatch) => {
        setTimeout(() => {
            dispatch(setLoadingFalse());
        }, 1500);
    }
}

