import { View, Text, Platform } from 'react-native'
import React, { useContext } from 'react'
import Router from './src/Router/Router'
import DataContext from './src/Context/DataContext'
import DataState from './src/Context/DataState'
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider, configureFonts } from 'react-native-paper'



const App = () => {

  const fontConfig = {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
  }

  const theme = {
    ...DefaultTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
      ...DefaultTheme.colors,
    },
  };

  return (
    <DataState>
      <PaperProvider theme={theme}>
        <Router />
      </PaperProvider>
    </DataState>
  )
}

export default App