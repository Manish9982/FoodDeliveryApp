import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OfferCard = ({ couponCode, discountPercentage, offerDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.discount}>{discountPercentage}% OFF</Text>
        <Text style={styles.couponCode}>{couponCode}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.offerDetails}>{offerDetails}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ecab2f',
    borderRadius: 10,
    backgroundColor: '#ffeee6',
    margin: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  discount: {
    color: '#c06e63',
    fontWeight: 'bold',
    fontSize: 16,
  },
  couponCode: {
    color: '#FBB117',
    fontWeight: 'bold',
    fontSize: 16,
  },
  body: {
    marginBottom: 10,
  },
  offerDetails: {
    fontSize: 14,
  },
});

export default OfferCard;