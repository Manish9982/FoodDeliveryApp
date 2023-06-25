import { Image, StatusBar, Touchable, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Appbar, Text } from 'react-native-paper'
import { Styles } from '../../Schemes/Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = (props) => {
    const navigation = useNavigation()

    const navigateToProfile = () => {
        navigation.navigate('MyProfile')
    }

    return (
        <>
            <Appbar.Header style={Styles.headerStyle}>
                {props?.IsBackButtonNeeded &&
                    <Appbar.BackAction color='white' onPress={() => { navigation.goBack() }} />}
                <Appbar.Content title={<Text style={[Styles.whiteText, Styles.boldLarge]} >{props?.Title}</Text>} />
                {
                    props?.IsProfilePicNeeded &&
                    <TouchableOpacity onPress={navigateToProfile}>
                        <Image source={require('../../Assets/Images/User.png')}
                            style={Styles.profileImage} />
                    </TouchableOpacity>
                }

            </Appbar.Header>
        </>
    )
}
export default Header

Header.defaultProps = {
    IsBackButtonNeeded: true,
    IsProfilePicNeeded: false,
}