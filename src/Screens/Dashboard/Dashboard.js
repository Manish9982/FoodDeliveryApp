import { FlatList, Modal, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native'
import React, { useState, useRef, useEffect, useContext } from 'react'
import { Searchbar, Text } from 'react-native-paper'
import { Styles } from '../../Schemes/Styles';
import Headings from '../../Components/Headings/Headings';
import FoodCard from '../../Components/Cards/FoodCard';
import DashboardLoader from './DashboardLoader';
import CartViewCard from '../../Components/Cards/CartViewCard';
import DataContext from '../../Context/DataContext';
import Header from '../../Components/Header/Header';

const DATA = [
    {
        'id': '1',
        'name': 'Roti with Mix veg & Daal',
        'price': '12',
        'image': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    },
    {
        'id': '2',
        'name': 'Burger with Hot Chilli',
        'price': '15',
        'image': 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
    },
    {
        'id': '3',
        'name': 'Hot Dog',
        'price': '10',
        'image': 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg'
    },
]
const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loader, setLoader] = useState(true)
    const { Ncart, removeFromCart, addToCart } = useContext(DataContext)
    const [cart, setCart] = Ncart
    const { height, width } = useWindowDimensions()

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])

    const onChangeSearch = query => setSearchQuery(query);

    const renderItem = (item, index) => {
        return (

            <FoodCard
                key={index}
                Id={item?.id}
                Name={item?.name}
                Price={item?.price}
                Image={item?.image}
            />

        )
    }

    console.log(cart)
    return (
        loader

            ?
            <DashboardLoader />
            :
            <>
                <Header Title="Order Now" />
                {
                    cart?.length !== 0 &&
                    <View style={Styles.cartViewCard}>
                        <CartViewCard />
                    </View>
                }
                <ScrollView
                    contentContainerStyle={[Styles.primaryContainer, { paddingBottom: cart?.length !== 0 ? height * 0.12 : 0 }]}>
                    <Searchbar
                        style={Styles.searchBar}
                        placeholder='Search'
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                    <Headings
                        Title='Food Items' />
                    <View>
                        {DATA.map(renderItem)}
                    </View>
                </ScrollView>
            </>
    )
}

export default Dashboard