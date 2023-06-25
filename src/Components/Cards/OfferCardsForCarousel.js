import { TouchableOpacity, StyleSheet, Image, useWindowDimensions, Dimensions, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native-paper'
import { Colors } from '../../Schemes/Colors'
import ImageLoaderGlobal from './ImageLoaderGlobal'

const H = Dimensions.get('window').height

const OfferCardsForCarousel = (props) => {
    const navigation = useNavigation()
    const H = useWindowDimensions().height
    const [loaderForImage, setLoaderForImage] = useState(true)
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(props?.clickAction)}
            style={styles.itemContainer}>
            {loaderForImage &&
                <ImageLoaderGlobal />
            }
            <Image
                source={{ uri: props.image }}
                style={styles.image}
                onLoadEnd={() => setLoaderForImage(false)}
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    activityIndicator: {
        alignSelf: "center",
    },
    activityIndicatorContainer:
    {
        height: '30%',
        width: '40%',
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        top: '40%',
        borderRadius: 50,
        justifyContent: 'center'
    }
});

export default OfferCardsForCarousel