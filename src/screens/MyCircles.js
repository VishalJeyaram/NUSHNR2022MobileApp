import React from 'react';
import { View, Text, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';


const MyCircles = ({ navigation }) => {

    return (

        <View styles={styles.container}>
            <Text>
                Welcome to your circles!
            </Text>
        </View>

    )
}

export default MyCircles;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
});