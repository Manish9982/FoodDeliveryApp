import { View, ScrollView, SafeAreaView, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { Styles } from '../../Schemes/Styles'
import { TextInput, Text } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'


const Signup = ({ navigation }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [location, setLocation] = useState("")

    const handleSigninClickChange = () => {
        navigation.navigate("Login")
    }

    const handleClickChange = () => {
        if (userName == "") {
            Alert.alert('Error', `UserName Can Not Be Empty!`)
        } else if (phone == "") {
            Alert.alert('Error', `Phone Can Not Be Empty!`)
        } else if (location == "") {
            Alert.alert('Error', `Location Can Not Be Empty!`)
        } else if (password == "") {
            Alert.alert('Error', `Password Can Not Be Empty!`)
        } else if (confirmpassword == "") {
            Alert.alert('Error', `Confirm password Can Not Be Empty!`)
        }
        else {
            navigation.navigate("Login")
        }
    }
    return (
        <View style={Styles.primaryContainer}>
            <Image source={require('../../Assets/Images/Splash.png')}
                style={Styles.logo} />

            <SafeAreaView>
                <ScrollView style={Styles.scrollView}>
                    <View style={Styles.mainView}>
                        <Text style={[Styles.headingText, Styles.boldLarge]}>Hello</Text>
                        <Text style={Styles.subheadingText}>Create your Account</Text>
                        <TextInput
                            mode={"flat"}
                            keyboardType='email-address'
                            placeholder='Enter username'
                            value={userName}
                            placeholderTextColor={"gray"}
                            onChangeText={(t) => { setUserName(t) }}
                            style={Styles.textInputStyle}
                        />
                        <TextInput
                            mode={"flat"}
                            keyboardType='phone-pad'
                            placeholder='Enter phone'
                            value={phone}
                            placeholderTextColor={"gray"}
                            onChangeText={(t) => { setPhone(t) }}
                            style={Styles.textInputStyle}
                        />

                        <TextInput
                            mode={"flat"}
                            keyboardType='default'
                            placeholder='Enter location'
                            value={location}
                            placeholderTextColor={"gray"}
                            onChangeText={(t) => { setLocation(t) }}
                            style={Styles.textInputStyle}
                        />

                        <TextInput
                            keyboardType='default'
                            secureTextEntry
                            placeholder='Enter password'
                            placeholderTextColor={"gray"}
                            value={password}
                            onChangeText={(t) => { setPassword(t) }}
                            style={Styles.textInputStyle}
                        />
                        <TextInput
                            keyboardType='default'
                            secureTextEntry
                            placeholder='Confirm password'
                            placeholderTextColor={"gray"}
                            value={confirmpassword}
                            onChangeText={(t) => { setConfirmPassword(t) }}
                            style={Styles.textInputStyle}
                        />

                        <TouchableOpacity
                            onPress={() => { handleClickChange() }}
                            style={{}}>
                            <LinearGradient start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                // colors={['#90E1FF', '#00AEEF', '#00AEEF']}
                                colors={['#FBB117', '#FBB117', '#FBB117']}
                                style={Styles.linearGradient}>
                                <Text
                                    style={[Styles.buttonText, Styles.boldLarge]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View
                            style={Styles.bottomViewContainer2}>
                            <Text style={Styles.bottomTextSignup
                            }>Have an Account?</Text>
                            <Text

                                onPress={() => {
                                    handleSigninClickChange()
                                }}

                                style={[Styles.bottomText2signup, Styles.boldMedium]
                                }> Sign In</Text>
                        </View>

                    </View>
                </ScrollView>

            </SafeAreaView>

        </View>
    )
}

export default Signup