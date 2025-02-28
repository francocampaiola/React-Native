import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
    return (
        <SafeAreaView>
            <View className='mt-5 mx-2.5'>
                <Text style={{ fontFamily: 'WorkSans-Black' }} className='text-4xl'>Hola mundo</Text>
                <Text className='font-work-black text-3xl'>Hola mundo</Text>
                <Text className='text-2xl font-work-medium'>Hola mundo</Text>
                <Text className='text-1xl font-work-light'>Hola mundo</Text>
            </View>
        </SafeAreaView>
    )
}

export default App