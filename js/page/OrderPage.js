import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class OrderPage extends Component {


    static navigationOptions = {
        drawerLabel: '订单'
    }


    render() {

        return (
            <View style={styles.container}>
                <Text>订单</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});