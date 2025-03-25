import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React, { useRef } from "react";
import { View, Text, Dimensions, useWindowDimensions } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

interface Props {
    movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width

    return (
        <View className="h-[250px] w-full">
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                width={150 + 50}
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 0.5
                }}
                defaultIndex={1}
            />
        </View>
    );
};

export default MainSlideShow;
