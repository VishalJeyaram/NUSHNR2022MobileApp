import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import Profile from '../screens/Profile';
import React, { useState, useEffect } from 'react';
import DrawerNavigator from './DrawerNavigator';
import FriendsList from '../screens/FriendsList';
import MyCircles from '../screens/MyCircles';

const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#00FF00"
            barStyle={{ backgroundColor: '#800080' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />


            <Tab.Screen
                name="FriendsList"
                component={FriendsList}
                options={{
                    tabBarLabel: 'Friends list',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-box" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="My Circles"
                component={MyCircles}
                options={{
                    tabBarLabel: 'My circles',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="circle" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Messages Screen"
                component={MessagesScreen}
                options={{
                    tabBarLabel: 'Chats',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="forum" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;