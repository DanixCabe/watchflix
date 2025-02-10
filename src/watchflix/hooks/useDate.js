

export const useDate = () => {
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const setDate = (realse_date) => {
        const dateMovieArray = realse_date.split('-');
        const yearMovie = dateMovieArray[0];
        const monthMovie = parseInt(dateMovieArray[1]);
        const parseDateMovie = months[monthMovie] + " " + yearMovie
        return parseDateMovie;
    }

    const setDateFull = (realse_date) => {
        const dateMovieArray = realse_date.split('-');
        const yearMovie = dateMovieArray[0];
        const monthMovie = parseInt(dateMovieArray[1]);
        const dayMovie = parseInt(dateMovieArray[2]);
        const parseDateMovie = dayMovie + " " + months[monthMovie] + " " + yearMovie
        return parseDateMovie;
    }
    
    return {
        setDate,
        setDateFull,
    }
}
