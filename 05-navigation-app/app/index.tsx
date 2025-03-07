import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'

const App = () => {

    return <Redirect href="/home" />

    // Código viejo

    // return (
    // <SafeAreaView>
    //     <View className='mt-5 mx-2.5'>
    //         <Text style={{ fontFamily: 'WorkSans-Black' }} className='text-4xl'>Hola mundo</Text>
    //         <Text className='font-work-black text-3xl text-primary'>Hola mundo</Text>
    //         <Text className='text-2xl font-work-medium text-secondary-100'>Hola mundo</Text>
    //         <Text className='text-1xl font-work-light text-tertiary'>Hola mundo</Text>
    //         <Link href={'/products'}>Productos</Link>
    //     </View>
    // </SafeAreaView>
    // )
}

export default App