import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import Header from '../../Components/Header/Header';
import { Spacings } from '../../Schemes/Spacings';
import { Colors } from '../../Schemes/Colors';
import { Styles } from '../../Schemes/Styles';

const CustomerSupportScreen = () => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [comment, setComment] = useState('');
    const [commentLength, setCommentLength] = useState(0)

    const isEmailValid = (email) => {
        // Add email validation logic here
        return true;
    };

    const isMobileValid = (mobile) => {
        // Add mobile validation logic here
        return true;
    };

    const isCommentValid = (comment) => {
        if (comment.length > 250) {
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (!isEmailValid(email)) {
            alert('Invalid email');
            return;
        }

        if (!isMobileValid(mobile)) {
            alert('Invalid mobile number');
            return;
        }

        if (!isCommentValid(comment)) {
            alert('Comment must be less than or equal to 250 characters');
            return;
        }

        // Add logic to submit the form here
        console.log('Form submitted');
    };


    return (
        <>
            <Header Title='Customer Support' />
            <View style={styles.container}>
                <TextInput
                    activeUnderlineColor={Colors.yellowColorForBorder}
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                />
                <TextInput
                    label="Mobile Number"
                    activeUnderlineColor={Colors.yellowColorForBorder}
                    value={mobile}
                    onChangeText={setMobile}
                    keyboardType="phone-pad"
                    style={styles.input}
                />
                <TextInput
                    label="Comment"
                    activeUnderlineColor={Colors.yellowColorForBorder}
                    value={comment}
                    onChangeText={(text) => {
                        setComment(text);
                        setCommentLength(250 - text.length);
                    }}
                    multiline={true}
                    maxLength={250}
                    style={styles.commentInput}
                />
                <Text style={styles.commentLengthText}>
                    {`${commentLength} characters remaining`}
                </Text>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={Styles.button}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Spacings.med,
        paddingVertical: Spacings.med,
    },
    input: {
        marginBottom: Spacings.med,
        color: 'white'
    },
    commentInput: {
        marginBottom: Spacings.med,
        maxHeight: 200,
        textAlignVertical: 'top',
    },
    commentLengthText: {
        marginBottom: Spacings.med,
        textAlign: 'right',
        fontStyle: 'italic',
        color: 'gray',
    },
});

export default CustomerSupportScreen;
