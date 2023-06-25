import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Styles } from '../../Schemes/Styles';

const OrdersCard = (props) => {
    return (
        <View style={Styles.orderCardcontainer}>
            <View style={Styles.orderCardheader}>
                <Text style={Styles.boldLarge}>{props?.RestaurantName}</Text>
                <Text style={Styles.displayMedium}>{props?.RestaurantAddress}</Text>
            </View>
            <View style={Styles.orderCardbody}>
                <Text style={Styles.boldMedium}>{props?.DishName}</Text>
                <Text style={[Styles.priceText, { padding: 0 }]}>{props?.Price}</Text>
                <Text style={Styles.displayMedium}>{props?.OrderDate}</Text>
                <Text style={[Styles.boldSmall, { color: props?.OrderStatus === 'Delivered' ? '#189657' : '#000000', }]}>{props?.OrderStatus}</Text>
            </View>
            <TouchableOpacity style={Styles.orderCardbutton} onPress={props?.OnPressTrackOrder}>
                <Text style={[Styles.whiteText, Styles.displayLarge, { textAlign: "center" }]}>Track Order</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OrdersCard;
