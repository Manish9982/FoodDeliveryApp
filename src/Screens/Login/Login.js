import { View, ScrollView, SafeAreaView, TouchableOpacity, Alert, Image, Modal, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Styles } from '../../Schemes/Styles'
import { TextInput, Text } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../Schemes/Colors'
import DataContext from '../../Context/DataContext'
import FontSizes from '../../Schemes/FontSizes'
import { setStringValue } from '../../Schemes/Utils'




const Login = ({ navigation }) => {
  const H = Dimensions.get('window').height
  const W = Dimensions.get('window').width
  const [userType, setUserType] = useState("1") // 2 == rider, 1 = customer
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [visible, setVisible] = useState(false)

  const { NisSignedIn } = useContext(DataContext)
  const [isSignedIn, setIsSignedIn] = NisSignedIn


  const handlelogin = () => {
    if (userName == "") {
      Alert.alert('Error', `UserName Can Not Be Empty!`)
    } else if (password == "") {
      Alert.alert('Error', `Password Can Not Be Empty!`)
    }
    else {
      setStringValue('@loginStatus', 'customer')
      setIsSignedIn('customer')
    }
  }
  return (
    <View style={Styles.primaryContainer}>

      <Modal
        animationType="slide"
        visible={visible}
        transparent={true}>
        <View
          style={Styles.modalStyling}>
          <View style={Styles.modalViewStyling}>
            <Text style={Styles.forgetText}>Forgot Password?</Text>
            <Text style={Styles.forgetpasswordmsg
            }>A password reset email has been sent to your registered email id.</Text>
            <TextInput
              mode={"flat"}
              keyboardType='email-address'
              placeholder='Username'
              value={userName}
              placeholderTextColor={"gray"}
              onChangeText={(t) => { setUserName(t) }}
              style={Styles.textInputStyle}
            />



            <View
              style={Styles.horizontalTextContainer}>
              <Text style={Styles.submitText
              }>Submit</Text>
              <Text
                onPress={() => {
                  setVisible(false)
                }}
                style={Styles.cancelText
                }> Cancel</Text>
            </View>
          </View>
        </View>
      </Modal>




      <Image source={require('../../Assets/Images/Splash.png')}
        style={Styles.logo} />

      <SafeAreaView>

        <ScrollView style={{}}>

          <View style={Styles.mainView}>
            <Text style={[Styles.headingText, Styles.boldLarge]}>Hello</Text>
            <Text style={Styles.subheadingText}>Sign into your Account</Text>
            <Text style={Styles.subheadingtext2}>Sign In As</Text>

            <View
              style={Styles.horizontalContainer}>
              <TouchableOpacity
                onPress={() => { setUserType("1") }}
                style={[Styles.tabButton, {
                  backgroundColor: userType == "1" ? Colors.ORANGE : "white",
                }]}>
                <Text style={{
                  color: userType == "1" ? "white" : "black",
                  //fontFamily: fontFamily.medium
                }}>Customer</Text>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => { setUserType("2") }}
                style={[Styles.tabButton, {
                  backgroundColor: userType == "2" ? Colors.ORANGE : "white",
                }]}>

                <Text style={{
                  color: userType == "2" ? "white" : "black",
                  //fontFamily: fontFamily.medium
                }}>Rider</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              mode={"flat"}
              keyboardType='email-address'
              placeholder='Username'
              value={userName}
              placeholderTextColor={"gray"}
              onChangeText={(t) => { setUserName(t) }}
              style={Styles.textInputStyle}
            />


            <TextInput
              keyboardType='default'
              secureTextEntry
              placeholder='Password'
              placeholderTextColor={"gray"}
              value={password}
              onChangeText={(t) => { setPassword(t) }}
              style={Styles.textInputStyle}
            />

            <Text
              onPress={() => {
                setVisible(true)
              }}

              style={Styles.orangeText}>Forgot Password?</Text>

            <TouchableOpacity
              onPress={() => { handlelogin() }}
              style={{}}>
              <LinearGradient start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#FBB117', '#FBB117', '#FBB117']}

                style={Styles.linearGradient}>

                <Text
                  style={[Styles.buttonText, Styles.boldLarge]}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </SafeAreaView>


      <View
        style={Styles.bottomViewContainer}>
        <Text style={Styles.bottomText
        }>Don't have an Account?</Text>
        <Text
          onPress={() => {
            navigation.navigate("Signup")
          }}
          style={Styles.bottomText2
          }> SignUp</Text>
      </View>

    </View>
  )
}

export default Login