import { checkLoading, getAllSeries, getAllAdditionalSeries, getSeriesTrends, searchSeries, getSearchSerieId, getVideoTrailerSerie, getSerieCast, getSeriesPerGenreInSearchedPage, setLoadingFalse, checkLoadingGetMoreSeries } from "./seriesSlice"

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
    }
}

export const startGetSeriesTrends = () => {
    return async(dispatch) => {
        
        const endpoint = `${VITE_URL}trending/tv/day?&language=en-US`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response;
                const {page} = data
                const listSeries = data.results;
                const finalData = {page: page, results: []};
                const list = listSeries.map(serie => {
                    return {id: serie.id, title: serie.name, image_poster: serie.poster_path, backdrop_path: serie.backdrop_path, vote_average: serie.vote_average, overview: serie.overview}
                })
                finalData.results.push(...list);
                dispatch(getSeriesTrends(finalData))
            })
            .catch(err => console.error(err))


    }
}

export const startGetAllSeries = () => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}tv/popular?&language=en-US&page=1`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response.results
                dispatch(getAllSeries(data))
            })
            .catch(err => console.error(err));

    }
}

export const startGetAllAddMoreSeries = (page) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}tv/popular?&language=en-US&page=${page}`
        dispatch(checkLoadingGetMoreSeries());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response.results
                dispatch(getAllAdditionalSeries(data))
            })
            .catch(err => console.error(err));

    }
}

export const startSearchSerie = ({search}) => {
    return async(dispatch) => {
        
        const endpoint = `${VITE_URL}search/tv?query=${search}&include_adult=true&language=en-US&page=1`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response;
                dispatch(searchSeries({data: data, search: search}))
            })
            .catch(err => console.error(err))

    }
}


//SearhMoviePerId when you click on the poster
export const startSearchSeriePerId = (id) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}tv/${id}?language=en-US`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response;
                dispatch(getSearchSerieId(data))
                dispatch(startGetListSeriesPerGenreInSearchPage(data.genres[0].id))
                dispatch(startGetVideoTrailerPerSerie(id))
                dispatch(startGetCastPerSerie(id))
            })
            .catch(err => console.error(err))


    }
}

export const startGetVideoTrailerPerSerie = (id) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}tv/${id}/videos?language=en-US`
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
                dispatch(getVideoTrailerSerie(data))
            })
            .catch(err => console.error(err))

    }
}

export const startGetCastPerSerie = (id) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}tv/${id}/credits?language=en-US`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response.cast
                dispatch(getSerieCast(data))
            })
            .catch(err => console.error(err))

    }
}

export const startGetListSeriesPerGenreInSearchPage = (genre_id) => {
    return async(dispatch) => {
        console.log(genre_id)
        const endpoint = `${VITE_URL}discover/tv?language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre_id}`
        dispatch(checkLoading());
        fetch(endpoint, optionsGet)
            .then(response => response.json())
            .then(response => {
                const data = response.results.slice(0, 10)
                
                dispatch(getSeriesPerGenreInSearchedPage(data))
            })
            .catch(err => console.error(err))

    }
}

export const startCheckLoadingSerie = () => {
    return async(dispatch) => {
        dispatch(checkLoading());
    }
}

export const startSetLoadingFalseSerie = () => {
    return async(dispatch) => {
        setTimeout(() => {
            dispatch(setLoadingFalse());
        }, 1500);
    }
}


