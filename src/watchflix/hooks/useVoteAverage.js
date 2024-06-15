

export const useVoteAverage = () => {
    
    const setColorVote = (vote_average) => {
        const voteNumber = vote_average.toFixed(1);
        if (voteNumber <= 6.5) {
            return 'text-red-500';
        } else if (voteNumber < 8.0 && voteNumber > 6.5) {
            return 'text-yellow-300';
        } else{
            return 'text-green-400';
        }
    }

    const setVote = (vote_average) => {
        return vote_average.toFixed(1)
    }
    
    return {
        setVote,
        setColorVote,
    }
}
