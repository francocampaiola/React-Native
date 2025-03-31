import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import MoviePoster from "./MoviePoster";
import { useRef } from "react";

interface Props {
    movies: Movie[];
    title: string,
    loadNextPage?: () => void
}

const MovieHorizontalList = ({ movies, title, loadNextPage }: Props) => {

    const isLoading = useRef(false)

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
        const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width
        if (!isEndReached) return
        isLoading.current = true
        console.log('Cargar siguientes películas')

        loadNextPage && loadNextPage()
    }

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
                onScroll={onScroll}
            />
        </View>
    );
};

export default MovieHorizontalList;
