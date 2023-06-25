import { View, Image, TouchableOpacity, useWindowDimensions, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { ActivityIndicator, Text } from 'react-native-paper'
import { Styles } from '../../Schemes/Styles'
import { Colors } from '../../Schemes/Colors'
import DataContext from '../../Context/DataContext'
import { useNavigation } from '@react-navigation/native'

const FoodCard2 = (props) => {
    const [quantity, setQuantity] = useState(0)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const navigation = useNavigation()
    const { Ncart } = useContext(DataContext)
    const [cart, setCart] = Ncart

    const { height, width } = useWindowDimensions()

    const handleAddItem = () => {
        setQuantity(prev => prev + 1)
        setCart(prev => [...prev, props.Name])
    }

    const handleCardPress = () => {
        navigation.navigate("Dashboard", { "imageUrl": props?.Image, "foodName": props?.Name })
    }

    return (
        <TouchableOpacity onPress={handleCardPress}
            style={[Styles.foodCard, Styles.foodcartcontainerHome]}>
            <View style={StyleSheet.imageContainer}>
                <Image
                    source={{ uri: props.Image }}
                    style={Styles.cardSizeImageHome}
                    onLoadEnd={() => setIsImageLoaded(true)}
                />
                {!isImageLoaded &&
                    <View style={styles.activityIndicatorContainer}>
                        <ActivityIndicator
                            style={styles.loaderImage}
                            color={Colors.priceLabelOrange} />
                    </View>
                }
            </View>
            <View>
                <Text
                    style={Styles.FoodNameHome} >
                    {props.Name}
                </Text>


                <View style={[Styles.horizontalContainer]}>

                    <Image source={require('../../Assets/Images/Star.png')}
                        style={Styles.starImage} />

                    <Text style={Styles.PriceNameHome}>
                        <Text
                            style={Styles.PriceNameHome}>
                        </Text>
                        {props.Rating}
                    </Text>
                </View >
                <Text style={Styles.PriceNameHome}>
                    <Text
                        style={Styles.PriceNameHome}>Price:
                    </Text>
                    {props.Price}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loaderImage:
    {
        position: "absolute",
        alignSelf: 'center',
    },
    imageContainer:
    {
        justifyContent: "center",
        alignItems: "center"
    },
    activityIndicatorContainer:
    {
        height:'30%',
        width:'40%',
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        top: '40%',
        borderRadius: 50,
        justifyContent:'center'
    }
})

export default FoodCard2