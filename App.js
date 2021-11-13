import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import { colors } from './Scripts/Styles.js'

// URL linking configuration.
const linking = {
  prefixes: [''],
  config: {
    screens: {
      Welcome: 'welcome',
      Main: 'home'
    }
  }
}

// Import screens.
import Main from './Scripts/Main.js'

const Stack = createStackNavigator()

export default function App() {

  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    OCRA: require('./assets/fonts/OCRA.ttf')
  })

  const MyTheme = {
    colors: {
      background:colors.secondaryBackground,
      primary:colors.mainTextColor,
      card:colors.mainBackground,
      border:colors.mainBackground
    }
  }

  return (
    <NavigationContainer linking={linking} theme={MyTheme}>
      <Stack.Navigator headerMode='none' initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{title:'WalletDisplay v1.0'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
