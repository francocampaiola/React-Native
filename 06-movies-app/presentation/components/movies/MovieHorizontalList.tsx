import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text, FlatList } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
    movies: Movie[];
    title: string
}

const MovieHorizontalList = ({ movies, title }: Props) => {
    return (
        <View>
            <Text className="text-3xl font-bold text-black px-4 mb-2">{title}</Text>
            <FlatList
                horizontal
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} smallPoster />
                )}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default MovieHorizontalList;
