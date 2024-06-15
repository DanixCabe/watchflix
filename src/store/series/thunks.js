import { checkLoading, getAllSeries, getSeriesTrends, searchSeries, setLoadingFalse } from "./seriesSlice"

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

export const startGetAllSeries = (page) => {
    return async(dispatch) => {
        const endpoint = `${VITE_URL}tv/popular?&language=en-US&page=${page}`
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
                dispatch(getAllSeries(finalData))
            })
            .catch(err => console.error(err))

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

export const startCheckLoadingSerie = () => {
    return async(dispatch) => {
        dispatch(checkLoading());
    }
}