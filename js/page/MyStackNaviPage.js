import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomePage from "./HomePage";
import ThirdScreenPage from './ThirdScreenPage';


const MyStackNaviPage = StackNavigator({
    Main: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <Button
                    title='back'
                    onPress={() => navigation.navigate('DrawerOpen')}
                />
            ),
        }),

    },
    Third: {
        screen: ThirdScreenPage,
        navigationOptions: ({navigation}) => ({
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerLeft: (
                <Button
                    title='Menu'
                    onPress={() => navigation.navigate('DrawerOpen')}
                />
            ),
        }),
    }

})

export default MyStackNaviPage;
