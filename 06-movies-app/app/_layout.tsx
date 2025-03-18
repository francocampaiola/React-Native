import { View, Text } from 'react-native'
import React from 'react'

import '../global.css'
import { nowPlayingAction } from '../core/movies/action'

const RootLayout = () => {
  nowPlayingAction()

  return (
    <View>
      <Text className='text-6xl mx-auto pt-32'>RootLayout</Text>
    </View>
  )
}

export default RootLayout