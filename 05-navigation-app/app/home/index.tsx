import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10'>
                <Link className='mb-5' href={'/products'}>Productos</Link>
                <Link className='mb-5' href={'/profile'}>Perfil</Link>
                <Link className='mb-5' href={'/settings'}>Ajustes</Link>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen