import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { ActivityIndicator, Text } from 'react-native-paper'
import { Styles } from '../../Schemes/Styles'
import { Colors } from '../../Schemes/Colors'
import DataContext from '../../Context/DataContext'
import { useNavigation } from '@react-navigation/native'

const FoodCard = (props) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const navigation = useNavigation()
    const { Ncart, removeFromCart, addToCart } = useContext(DataContext)
    const [cart, setCart] = Ncart

    const handleAddItem = () => {
        addToCart({
            'id': props.Id,
            'name': props.Name,
            'price': props.Price,
        })
    }

    const handleSubtractItem = () => {
        removeFromCart(props.Id)
    }

    const handleAddButtonTouch = () => {
        handleAddItem()
    }

    const handleCardPress = () => {
        navigation.navigate("ProductDetails", { "imageUrl": props?.Image, "foodName": props?.Name })
    }

    const getCount = (array, id) => {
        let newArr = array.filter(item => item.id == props.Id)
        return newArr.length
    }

    return (
        <TouchableOpacity
            style={Styles.foodCard}
            onPress={handleCardPress}
        >
            <View style={styles.cardSizeImageContainer}>
                <Image
                    source={{ uri: props.Image }}
                    style={styles.cardSizeImage}
                    onLoadEnd={() => setIsImageLoaded(true)}
                />
                {!isImageLoaded && (
                    <View style={styles.activityIndicatorContainer}>
                        <ActivityIndicator
                            style={styles.activityIndicator}
                            color={Colors.priceLabelOrange}
                        />
                    </View>
                )}
            </View>
            <Text
                style={Styles.foodNameText}
            >
                {props.Name}
            </Text>
            <View style={[Styles.horizontalContainer, Styles.fullWidthContainer]}>
                <Text style={Styles.priceText}
                >
                    <Text

                        style={Styles.priceKey}>Price:
                    </Text>
                    ${props.Price}
                </Text>
                {

                    <TouchableOpacity
                        onPress={handleAddButtonTouch}
                        style={[Styles.horizontalContainer, Styles.addItemBox]}>
                        {
                            getCount(cart, props.Id) == 0
                                ?
                                <TouchableOpacity onPress={handleAddItem}>
                                    <Text

                                        style={Styles.greenText}
                                    >ADD</Text>
                                </TouchableOpacity>
                                :
                                <>
                                    <TouchableOpacity
                                        onPress={handleAddItem}
                                        style={Styles.plusMinusButton}>
                                        <Text

                                            style={Styles.greenText}
                                        >+</Text>
                                    </TouchableOpacity>
                                    <Text
                                        style={[Styles.quantityText, Styles.greenText]}
                                    >{getCount(cart, props.Id)}</Text>
                                    <TouchableOpacity
                                        onPress={handleSubtractItem}
                                        style={Styles.plusMinusButton}>
                                        <Text

                                            style={Styles.greenText}
                                        >-</Text>
                                    </TouchableOpacity>
                                </>}
                    </TouchableOpacity>
                }

            </View >
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardSizeImageContainer: {
        position: 'relative',
        width: '100%',
        aspectRatio: 1,
    },
    cardSizeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    activityIndicatorContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -15 }, { translateY: -15 }],
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    activityIndicator: {
        flex: 1,
    },
});

export default FoodCard