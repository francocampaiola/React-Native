import { nowPlayingAction, popularMoviesAction, topRatedMoviesAction, upComingMoviesAction } from "@/core/movies/action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: () => nowPlayingAction(),
        staleTime: 1000 * 60 * 60 * 24 // Mantener la data por 24 hs
    })

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: () => popularMoviesAction(),
        staleTime: 1000 * 60 * 60 * 24 // Mantener la data por 24 hs
    })

    const topRatedQuery = useQuery({
        queryKey: ['movies', 'top-rated'],
        queryFn: () => topRatedMoviesAction(),
        staleTime: 1000 * 60 * 60 * 24
    })

    const upComingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: () => upComingMoviesAction(),
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upComingQuery
    }
}