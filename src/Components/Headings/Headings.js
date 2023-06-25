import { View } from 'react-native'
import React from 'react'
import { Styles } from '../../Schemes/Styles'
import { Text } from 'react-native-paper'

const Headings = (props) => {
    return (
        <View style={Styles.horizontalContainer}>
            <View style={Styles.dividerViewAtDashboard}></View>
            <Text 
            numberOfLines={1}
            style={[Styles.headingWithDivider, Styles.boldLarge]}>{props.Title}</Text>
            <View style={Styles.dividerViewAtDashboard}></View>
        </View>
    )
}

export default Headings