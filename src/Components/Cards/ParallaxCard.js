import React, { useRef } from 'react';
import { FlatList, View, StyleSheet, Image, Animated, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const ParallaxCard = ({ data, renderItem, keyExtractor, horizontal = true }) => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const parallaxImage = ({ item, index }) => {
        const inputRange = [(index - 1) * screenWidth, index * screenWidth, (index + 1) * screenWidth];
        const translateY = scrollY.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
            extrapolate: 'clamp',
        });
        return (
            <Animated.View style={{ transform: [{ translateY }] }}>
                <Image source={item.image} style={styles.image} />
            </Animated.View>
        );
    };

    const FlatListComponent = Animated.createAnimatedComponent(FlatList);

    return (
        <View style={styles.container}>
            <FlatListComponent
                data={data}
                keyExtractor={keyExtractor}
                horizontal={horizontal}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                snapToInterval={horizontal ? 300 : 0}
                snapToAlignment="center"
                decelerationRate="fast"
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        {parallaxImage({ item, index })}
                        {renderItem({ item })}
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    image: {
        width: screenWidth - 60,
        height: screenWidth - 60,
        borderRadius: 10,
    },
});

export default ParallaxCard;