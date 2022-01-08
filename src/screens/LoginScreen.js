import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import AntDesign from 'react-native-vector-icons';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/contact-book1.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Welcome to ContactBook!</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType='user'
                keyboardType="email-address"
                autoCapitalize='none'
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType='lock'
                secureTextEntry={true}
            />

            {
                error ?
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null
            }

            <FormButton
                buttonTitle="Sign In"
                onPress={() => login()}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <FormButton
                buttonTitle="Don't have an acount? Create here"
                onPress={() => navigation.navigate('Signup')}
            />

        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
    },
    logo: {
        height: 150,
        width: 300,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'sans-serif-light',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 20,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'sans-serif-light',
    },
});