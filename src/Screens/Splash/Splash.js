import { View, Text, StatusBar, Image, useWindowDimensions } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Styles } from '../../Schemes/Styles'
import { getMyStringValue } from '../../Schemes/Utils'
import DataContext from '../../Context/DataContext'

const Splash = ({ navigation }) => {

  const { NisSignedIn } = useContext(DataContext)
  const [isSignedIn, setIsSignedIn] = NisSignedIn

  useEffect(() => {
    getLoginStatus()
  }, [])

  const getLoginStatus = async () => {
    const temp = await getMyStringValue('@loginStatus')
    if (temp == 'customer') {
      setIsSignedIn('customer')
      navigation.replace('BottomTabsCustomer')
    }
    else if (temp == 'rider') {
      setIsSignedIn('rider')
      navigation.replace('BottomTabsRider')
    }
    else {
      navigation.replace('Login')
    }
  }

  return (
    <View style={Styles.primaryContainer}>
      <StatusBar backgroundColor={'gray'} />
      <Image source={require('../../Assets/Images/Splash.png')}
        style={Styles.splashImage} />
    </View>
  )
}

export default Splash