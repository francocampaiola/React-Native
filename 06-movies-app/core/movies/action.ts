import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/action";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");
    console.log(JSON.stringify(data.results, null, 2));
    return [];
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
