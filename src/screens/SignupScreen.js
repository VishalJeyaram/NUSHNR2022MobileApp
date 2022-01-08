import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import AntDesign from 'react-native-vector-icons';


const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState('');

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/contact-book1.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Create your ContactBook account here!</Text>

            <FormInput
                labelValue={username}
                onChangeText={(userName) => setUsername(userName)}
                placeholderText="Username"
                iconType='user'
                keyboardType="email-address"
                autoCapitalize='none'
                autoCorrect={false}
            />

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType='mail'
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

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
                placeholderText="Confirm Password"
                iconType='lock'
                secureTextEntry={true}
            />

            {
                error ?
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null
            }

            <FormButton
                buttonTitle="Sign Up"
                onPress={() => signUp()}
            />


            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>
                    Have an account? Sign in here!
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupScreen;

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
        fontSize: 15,
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