import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Schemes/Colors'
import { ActivityIndicator } from 'react-native-paper'

const ImageLoaderGlobal = () => {
    return (
        <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator
                style={styles.activityIndicator}
                color={Colors.priceLabelOrange} />
        </View>
    )
}

export default ImageLoaderGlobal

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
    activityIndicator: {
        alignSelf: "center",
    },
    activityIndicatorContainer:
    {
        height: 120/3,
        width: 70,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        top: '40%',
        borderRadius: 50,
        justifyContent: 'center'
    }
});