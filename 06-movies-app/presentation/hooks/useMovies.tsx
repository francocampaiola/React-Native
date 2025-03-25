import { nowPlayingAction } from "@/core/movies/action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: () => nowPlayingAction(),
        staleTime: 1000 * 60 * 60 * 24 // Mantener la data por 24 hs
    })

    return {
        nowPlayingQuery
    }
}