import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideShow from '../../presentation/components/movies/MainSlideShow'
import MovieHorizontalList from '../../presentation/components/movies/MovieHorizontalList';

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets()
    const { nowPlayingQuery, popularQuery } = useMovies()

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={60} />
            </View>
        )
    }

    return (
        <View className='mt-2' style={{
            paddingTop: safeArea.top
        }}>
            <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>
            {/* Main */}
            <MainSlideShow movies={nowPlayingQuery.data ?? []} />
            {/* Popular */}
            <MovieHorizontalList title='Populares' movies={popularQuery.data ?? []} />
        </View>
    )
}

export default HomeScreen