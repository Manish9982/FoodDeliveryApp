import { View, Image, TouchableOpacity, FlatList, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React from 'react'
import { Styles } from '../../Schemes/Styles'
import { Text } from 'react-native-paper'
import Headings from '../../Components/Headings/Headings'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../Components/Header/Header'
import ItemCard from '../../Components/Cards/ItemCard'


const DATA = [
    {
        'name': 'Roti with Mix veg & Daal',
        'qty': '2',
        'price': '$12',
        'image': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    },
    {
        'name': 'Roti with Mix veg & Daal',
        'qty': '2',
        'price': '$12',
        'image': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    },
    {
        'name': 'Roti with Mix veg & Daal',
        'qty': '2',
        'price': '$12',
        'image': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    },
]
const Cart = () => {

    const { width } = useWindowDimensions()

    const handlePress = () => {
        Alert.alert('Coming Soon..')
    }

    const renderItem = (item, index) => {


        return (
            <ItemCard
                key={index}
                name={item?.name}
                qty={item?.qty}
                price={item?.price}
            />
        )
    }
    return (
        <>
            <Header
                Title="Cart" />
            <ScrollView
                style={Styles.primaryContainer}>
                <View style={Styles.DeliveryCardCart}>
                    <Image source={require('../../Assets/Images/Star.png')}
                        style={Styles.starImage} />
                    <Text style={Styles.foodDescriptionHome}> Delivery Time </Text>
                    <Text style={Styles.cartTimeText}> 10-15 min </Text>
                </View>
                <Headings
                    Title='Added Item(s)' />

                <View style={Styles.foodCardListCart}>
                    {DATA.map(renderItem)}
                </View>

                <View style={Styles.DeliveryCardCart}>

                    <Image source={require('../../Assets/Images/Star.png')}
                        style={Styles.starImage} />

                    <Text style={Styles.foodDescriptionHome}>Add more items </Text>

                    <Image source={require('../../Assets/Images/Star.png')}
                        style={Styles.forwordImageCart} />
                </View>

                <Headings
                    Title='Savings Corner' />

                <View style={Styles.savingsCornerhorizentalContainercart2}>


                    <View style={Styles.savingsCornerhorizentalContainercart}>
                        <View style={{}}>
                            <Text style={Styles.coupanNameTextCart}>Saved $20 more on this</Text>
                            <Text style={Styles.coupanCodeTextCart}>Trynew</Text>
                        </View>
                        <Text style={Styles.applyTextCart}>Apply</Text>
                    </View>

                    <View style={Styles.borderCart} />

                    <Text style={Styles.seeallcoupantextCart}>View all coupons {">"}</Text>


                </View>

                <Headings
                    Title='Bill Summary' />

                <View style={[Styles.savingsCornerhorizentalContainercart2]}>
                    <View style={Styles.subTotalCart}>
                        <Text style={Styles.foodnameTitleCart}>Sub Total</Text>
                        <Text style={Styles.subTotalfoodPriceCart} >200</Text>

                    </View>

                    <View style={Styles.subTotalCart}>
                        <Text style={Styles.foodnameTitleCart}>Taxes and other charges</Text>
                        <Text style={Styles.subTotalfoodPriceCart} >200</Text>
                    </View>
                    <View style={Styles.subTotalCart}>
                        <Text style={Styles.foodnameTitleCart}>Grand Total</Text>
                        <Text style={Styles.subTotalfoodPriceCart} >200</Text>
                    </View>




                </View>


                <TouchableOpacity
                    onPress={() => { handlePress() }}
                    style={{}}>
                    <LinearGradient start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        // colors={['#90E1FF', '#00AEEF', '#00AEEF']}
                        colors={['#FBB117', '#FBB117', '#FBB117']}
                        style={Styles.linearGradient}>
                        <Text
                            style={[Styles.buttonText, Styles.boldLarge]}>Check out to proceed {">"}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </ScrollView>
        </>
    )
}

export default Cart