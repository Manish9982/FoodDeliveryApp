import { FlatList, Image, ScrollView, StyleSheet, Touchable, View, useWindowDimensions } from 'react-native'
import React, { useContext } from 'react'
import { Styles } from '../../Schemes/Styles'
import { Text } from 'react-native-paper'
import DataContext from '../../Context/DataContext';
import FoodCard2 from '../../Components/Cards/FoodCard2';
import Header from '../../Components/Header/Header';
import CarouselCards from '../../Components/Cards/CarouselCards';
import ParallaxCard from '../../Components/Cards/ParallaxCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import OfferCardsForCarousel from '../../Components/Cards/OfferCardsForCarousel';
import ApiRequest from '../../Schemes/ApiRequest';

const DATA = [
    {
        'name': 'Roti with Mix veg & Daal',
        'desc': '3.8 (100 +)',
        'price': ' $12',
        'image': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    },
    {
        'name': 'Roti with Mix veg & Daal',
        'desc': '3.8 (100 +)',
        'price': ' $12',
        'image': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    },
    {
        'name': 'Roti with Mix veg & Daal',
        'desc': '3.8 (100 +)',
        'price': ' $12',
        'image': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    },

]

const DATA2 = [
    {
        id: 1,
        title: 'Item 1',
        image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
        clickAction: 'Dashboard'
    },
    {
        id: 2,
        title: 'Item 2',
        image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
        clickAction: 'Dashboard'
    },
    {
        id: 3,
        title: 'Item 3',
        image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg',
        clickAction: 'Dashboard'
    },
    {
        id: 4,
        title: 'Item 4',
        image: 'https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg',
        clickAction: 'Dashboard'
    },
    {
        id: 5,
        title: 'Item 5',
        image: 'https://images.pexels.com/photos/1707920/pexels-photo-1707920.jpeg',
        clickAction: 'Dashboard'
    },
];

const Home = ({ navigation }) => {
    const { Ncart } = useContext(DataContext)
    const [cart, setCart] = Ncart
    const { height, width } = useWindowDimensions()

    const renderItem = (item, index) => {
        return (
            <FoodCard2
                key={index}
                Name={item?.name}
                Rating={item?.desc}
                Price={item?.price}
                Image={item?.image}
            />
        )
    }

    const renderItem2 = ({ item }) => {
        return (
            <OfferCardsForCarousel
                image={item?.image}
                clickAction={item?.clickAction}
            />
        );
    };

    const onPressExplore = () => {
        navigation.navigate('Dashboard')
    }

    const onPressSeeAll = () => {
        navigation.navigate('Dashboard')
    }

    const keyExtractor = (item) => item.id.toString()
    console.log(ApiRequest())

    return (
        <View style={Styles.primaryContainer}>
            <Header Title="Welcome, Gaurav"
                IsBackButtonNeeded={false}
                IsProfilePicNeeded={true}
            />
            <ScrollView contentContainerStyle={Styles.primaryContainerWithBottomTabs}>
                <View style={Styles.carouselView}>
                    <CarouselCards
                        data={DATA2}
                        renderItem={renderItem2}
                        keyExtractor={keyExtractor} />
                </View>


                <View style={Styles.horizentalContainerHome}>
                    <TouchableOpacity onPress={onPressExplore}>
                        <Text style={Styles.subheadingText}>Explore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressSeeAll}>
                        <Text style={Styles.subheadingText}>See All</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={[Styles.flatlistFoodItemsHorizontalViewHome]}>
                    {DATA.map(renderItem)}
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default Home