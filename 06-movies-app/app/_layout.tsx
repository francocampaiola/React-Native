import React from 'react'
import { View, Text } from 'react-native'
import '../global.css'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Stack } from 'expo-router'

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{
        headerShown: false
      }} />
    </QueryClientProvider>
  )
}

export default RootLayout