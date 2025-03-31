import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/action";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");
    const movies = data.results.map(MovieMapper.fromTheMovieDBtoMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};

export const popularMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular");
    const movies = data.results.map(MovieMapper.fromTheMovieDBtoMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};

export const topRatedMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated");
    const movies = data.results.map(MovieMapper.fromTheMovieDBtoMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load top rated movies";
  }
};

export const upComingMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/upcoming");
    const movies = data.results.map(MovieMapper.fromTheMovieDBtoMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load upcoming movies";
  }
};
