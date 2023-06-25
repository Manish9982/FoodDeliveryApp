import { View, Image } from 'react-native'
import React, { useState } from 'react'
import { ActivityIndicator, Text } from 'react-native-paper'
import { Styles } from '../../Schemes/Styles'
import { Colors } from '../../Schemes/Colors'
import Headings from '../../Components/Headings/Headings'
import Header from '../../Components/Header/Header'
import ImageLoaderGlobal from '../../Components/Cards/ImageLoaderGlobal'

const ProductDetails = ({ navigation, route }) => {
    const [loaderImage, setLoaderImage] = useState(true)
    return (
        <View>
            <Header Title="Description" />
            <View>
                <Image
                    source={{ uri: route.params.imageUrl }}
                    style={Styles.productDetailsImage}
                    onLoadEnd={() => setLoaderImage(false)}
                />
                {loaderImage && <ImageLoaderGlobal />}
            </View>
            <View>
                <Text style={[Styles.mediumSpacingText, Styles.underLineText]}
                >{route.params.foodName}</Text>
                <Headings Title="Description" />
                <Text style={Styles.mediumSpacingText}>
                    Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                </Text>
            </View>
        </View>
    )
}

export default ProductDetails