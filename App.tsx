import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import AppScreen from './src/screens'
import './src/constants/estyles'

const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <AppScreen />
      <StatusBar />
    </SafeAreaProvider>
  )
}

export default App
