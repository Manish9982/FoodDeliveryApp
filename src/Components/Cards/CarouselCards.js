import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Styles } from '../../Schemes/Styles';

const CarouselCards = ({ data, renderItem, keyExtractor, horizontal = true }) => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            snapToInterval={true ? 300 : 0}
            snapToAlignment="center"
            contentContainerStyle={Styles.centerContainer}
        />
    );
};

export default CarouselCards;