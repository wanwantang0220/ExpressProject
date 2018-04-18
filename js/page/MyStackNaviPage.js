import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomePage from "./HomePage";
import ThirdScreenPage from './ThirdScreenPage';
import WaitingOrderPage from "./WaitingOrderPage";
import PrintOrderPage from './PrintOrderPage';
import PrintOrderDetailPage from './PrintOrderDetailPage';
import TransportDetailPage from "./TransportDetailPage";
import BluetoothPage from './BluetoothPage';

const MyStackNaviPage = StackNavigator({
    Home: {
        screen: HomePage,
        // navigationOptions: ({navigation}) => ({
        //     headerTitleStyle: {
        //         alignSelf: 'center',
        //     },
        //     headerLeft: (
        //         <Button
        //             title='back'
        //             onPress={() => navigation.navigate('DrawerOpen')}
        //         />
        //     ),
        // }),

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
    },
    WaitingOrder: {
        screen: WaitingOrderPage
    },
    PrintOrder: {
        screen: PrintOrderPage
    },
    PrintOrderDetail: {
        screen: PrintOrderDetailPage
    },
    TransportDetail: {
        screen: TransportDetailPage
    },
    Bluetooth: {
        screen: BluetoothPage
    }
})

export default MyStackNaviPage;
