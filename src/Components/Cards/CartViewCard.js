import { View } from 'react-native'
import React, { useContext } from 'react'
import { Styles } from '../../Schemes/Styles'
import { Text } from 'react-native-paper'
import DataContext from '../../Context/DataContext'

const CartViewCard = () => {
    const { Ncart } = useContext(DataContext)
    const [cart, setCart] = Ncart

    const getPrice = (array) => {
        let newArr = array.map(item => parseInt(item.price))
        let price = newArr.reduce((acc, curr) => acc + curr, 0);
        return price
    }

    return (
        <View style={[Styles.cartViewContainer, Styles.horizontalContainer]}>

            <View style={Styles.secondaryContainerCartView}>
                <Text>
                    <Text style={Styles.whiteText}>{cart?.length}</Text>
                    {
                        cart?.length == 1
                            ?
                            <Text style={Styles.whiteText}> Item</Text>
                            :
                            <Text style={Styles.whiteText}> Items</Text>
                    }
                    <Text style={Styles.whiteText}> | </Text>
                    <Text style={Styles.whiteText}>${getPrice(cart)}</Text>
                </Text>
                <Text style={Styles.whiteText}>Extra charges may apply</Text>
            </View>
            <Text style={Styles.viewCartText}>View Cart</Text>

        </View>
    )
}

export default CartViewCard