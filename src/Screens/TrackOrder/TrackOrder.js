import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../Components/Header/Header';
import { Styles } from '../../Schemes/Styles';
import { Text } from 'react-native-paper';

const TrackOrder = () => {
    const [status, setStatus] = useState(2);

    const steps = [
        { label: 'Order Accepted', completed: status >= 1 },
        { label: 'Preparing Order', completed: status >= 2 },
        { label: 'Out For Delivery', completed: status >= 3 },
        { label: 'Delivered', completed: status >= 4 },
    ];

    const renderStep = (step, index) => {
        return (
            <View key={index} style={[styles.step, step.completed && styles.completed]}>
                <View style={[styles.dot, step.completed && styles.completedDot]} />
                <Text style={styles.label}>{step.label}</Text>
            </View>
        );
    };

    return (
        <View style={Styles.primaryContainerOrder}>
            <Header Title="Track Order"/>
            <Text style={[Styles.boldVeryLarge, Styles.paddingToText]}>Order Status</Text>
            <View style={Styles.stepsContainer}>{steps.map(renderStep)}</View>
        </View>
    );
};

const styles = StyleSheet.create({
   
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    step: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    completed: {
        opacity: 0.5,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: 'gray',
    },
    completedDot: {
        backgroundColor: 'green',
    },
    label: {
        fontSize: 16,
    },
});

export default TrackOrder;
