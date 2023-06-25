import React from 'react';
import { View, StyleSheet } from 'react-native';
import OfferCard from '../../Components/Cards/OfferCard';
import Header from '../../Components/Header/Header';

const MyOffers = () => {
    const offers = [
        {
            id: 1,
            couponCode: 'OFFER10',
            discountPercentage: 10,
            offerDetails: 'Get 10% off on all orders above $50',
        },
        {
            id: 2,
            couponCode: 'SPRING15',
            discountPercentage: 15,
            offerDetails: 'Spring sale: Get 15% off on all items',
        },
        {
            id: 3,
            couponCode: 'WELCOME20',
            discountPercentage: 20,
            offerDetails: 'Welcome offer: Get 20% off on your first order',
        },
    ];

    return (
        <View style={styles.container}>
            <Header Title="My Offers" />
            {offers.map((offer) => (
                <OfferCard
                    key={offer.id}
                    couponCode={offer.couponCode}
                    discountPercentage={offer.discountPercentage}
                    offerDetails={offer.offerDetails}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecebeb',
    },
});

export default MyOffers;
