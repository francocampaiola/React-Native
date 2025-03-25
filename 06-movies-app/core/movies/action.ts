import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/action";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");
    // console.log(JSON.stringify(data.results, null, 2));
    // const movies = data.results.map(MovieMapper.fromTheMovieDBtoMovie);
    // console.log(movies);
    // return movies;
    return [];
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
