import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Divider, Text } from 'react-native-paper'
import { Styles } from '../../Schemes/Styles'

const ElementCard = (props) => {
    return (
        <>
            <TouchableOpacity
                style={Styles.elementCard}
                onPress={props.Action}>
                <Text style={Styles.displayMedium}>{props.Title}</Text>
            </TouchableOpacity>
            <Divider />
        </>
    )
}

export default ElementCard