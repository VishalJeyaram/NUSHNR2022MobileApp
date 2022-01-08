import color from 'color';
import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 80, color: 'white', fontFamily: 'Roboto' }}>Loading</Text>
            <ActivityIndicator size='large' color="#FFA500" />
        </View>
    );
};

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(56,172,236)'
    },
});