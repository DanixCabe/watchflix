import {  useState } from 'react';

export const useGenres = () => {

    const [genresBackground, setGenresNameBackground] = useState('')

    
    const setGenresName = (genresListName, genresListId) => {
        const listGenresPerMovie = []
        genresListName.forEach(genrePerName => {
            genresListId.forEach(genrePerId => {
                if(genrePerName.id === genrePerId){
                    listGenresPerMovie.push({id: genrePerName.id, name: genrePerName.name})
                }
            });
        });
        setGenresNameBackground(listGenresPerMovie)
    }
    


    return {
        setGenresName,
        genresBackground,
    }
}