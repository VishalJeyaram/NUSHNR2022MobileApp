import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = () => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({ ...props }) => (
    <Button
        title='Skip'
        color='#000000'
        {...props}
    />
);

const Next = ({ ...props }) => (
    <Button
        title='Next'
        color='#000000'
        {...props}
    />
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style="fontsize:16">Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style="height: 1; width:2" source={require('../../assets/contact-book1.png')} />,
                    title: 'Welcome to ContactBook!',
                    subtitle: 'A revolutionary new way to manage your social life!',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../assets/contact-book2.png')} />,
                    title: 'We can provide you with the means,',
                    subtitle: 'to list information about your friends in a fun and interactive way! ',
                }, {
                    backgroundColor: '#fff',
                    image: <Image style="height: 1; width:2" source={require('../../assets/contact-book3.png')} />,
                    title: 'Ready?',
                    subtitle: 'Let\'s go!',
                }

            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});