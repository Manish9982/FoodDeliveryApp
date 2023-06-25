import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Styles } from '../../Schemes/Styles'

const ItemCard = (props) => {
    return (
        <TouchableOpacity onPress={{}}
            style={{}}>

            <View style={Styles.horizontalContainerCart}>
                <Image
                    source={require('../../Assets/Images/Star.png')}
                    style={Styles.imageonCart}
                />
                <Text
                    style={Styles.foodnameTitleCart} >
                    {props.name}
                    <Text
                        style={Styles.foodnameTitleCart} >  x  {props.qty}
                    </Text>
                </Text>
                <Text
                    style={Styles.foodPriceCart} >{props.price}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default ItemCard