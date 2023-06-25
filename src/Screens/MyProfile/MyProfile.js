import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '../../Schemes/Colors';
import { ActivityIndicator, Text } from 'react-native-paper';
import Headings from '../../Components/Headings/Headings';
import Header from '../../Components/Header/Header';
import ImageLoader from './ImageLoader';

const ProfileScreen = () => {
    const [imageLoader, setImageLoader] = useState(true)
    return (
        <View style={styles.container}>
            <Header Title="My Profile" />
            <View style={styles.profile}>
                {imageLoader ?

                    <ImageLoader />

                    :
                    <Image
                        style={styles.profilePicture}
                        source={{ uri: 'https://images.pexels.com/photos/3584928/pexels-photo-3584928.jpeg' }}
                        onLoadEnd={() => setImageLoader(false)}
                    />}

                <Text style={styles.profileName}>John Doe</Text>
            </View>
            <View style={styles.section}>
                <Headings Title="Personal Information" />
                <View style={styles.item}>
                    <Text>Name:</Text>
                    <Text>John Doe</Text>
                </View>
                <View style={styles.item}>
                    <Text>Email:</Text>
                    <Text>johndoe@example.com</Text>
                </View>
                <View style={styles.item}>
                    <Text>Phone:</Text>
                    <Text>555-555-5555</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Headings Title="Favourite Meals" />
                <View style={styles.item}>
                    <Text>Meal 1</Text>
                </View>
                <View style={styles.item}>
                    <Text>Meal 2</Text>
                </View>
                <View style={styles.item}>
                    <Text>Meal 3</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    header: {
        backgroundColor: Colors.yellowColorForBorder,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: Colors.WHITE,
        fontSize: 24,
        fontWeight: 'bold',
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 5,
        borderColor: Colors.yellowColorForBorder,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    section: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingVertical: 10,
    },
    activityIndicator:
    {
        position: "absolute",
        alignSelf: "center",
    }
});

export default ProfileScreen;