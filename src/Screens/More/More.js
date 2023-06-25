import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { clearAll, setStringValue } from '../../Schemes/Utils'
import DataContext from '../../Context/DataContext'
import ElementCard from '../../Components/Cards/ElementCard'
import Header from '../../Components/Header/Header'
import { FlatList } from 'react-native-gesture-handler'

const More = ({ navigation }) => {

    const { NisSignedIn } = useContext(DataContext)
    const [isSignedIn, setIsSignedIn] = NisSignedIn

    const DATA = [
        {
            name: "My Profile",
            action: () => navigation.navigate('MyProfile')
        },
        {
            name: "My Offers",
            action: () => navigation.navigate('MyOffers')
        },
        {
            name: "Customer Support",
            action: () => navigation.navigate("CustomerSupport")
        },
        {
            name: "Contact Us",
            action: () => navigation.navigate('ContactUs')
        },
        {
            name: "Logout",
            action: () => logout()
        },

    ]

    const logout = () => {
        clearAll()
        setIsSignedIn('false')
    }

    const renderItem = ({ item, index }) => {
        return (
            <ElementCard Title={item?.name}
                Action={item?.action}
            />
        )

    }

    return (
        <View>
            <Header Title="More" />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => `_key${index}`}
            />
        </View>
    )
}

export default More