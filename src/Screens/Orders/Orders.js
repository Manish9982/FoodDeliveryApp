import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import OrdersCard from '../../Components/Cards/OrdersCard'
import Header from '../../Components/Header/Header'
import { Styles } from '../../Schemes/Styles'

const Orders = ({ navigation }) => {

  const DATA = [
    {
      'id': '1',
    },
    {
      'id': '2',
    },
    {
      'id': '3',
    },
    {
      'id': '4',
    },
    {
      'id': '5',
    },
    {
      'id': '6',
    },
    {
      'id': '7',
    },
    {
      'id': '8',
    },
    {
      'id': '9',
    },
  ]

  const OnPressTrackOrder = (index) => {
    navigation.navigate('TrackOrder', { 'OrderNumber': `${index}` })
  }

  const renderItem = ({ item, index }) => {
    return (
      <OrdersCard
        RestaurantName={'Red Chillies'}
        RestaurantAddress={'221B, Baker Street'}
        DishName={'Garlic Noodles'}
        Price={'$10'}
        OrderDate={'23rd Jan, 5:00 PM'}
        OrderStatus={'Delivered'}
        OnPressTrackOrder={() => OnPressTrackOrder(index)}
      />
    )
  }

  return (
    <View style={Styles.primaryContainerOrder}>
      <Header Title="Orders" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => `_key${index}`}
      />
    </View>
  )
}

export default Orders