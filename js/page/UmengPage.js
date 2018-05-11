import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class UmengPage extends Component {


    static navigationOptions = {
        drawerLabel: '友盟统计'
    }


    render() {

        return (
            <View style={styles.container}>
                <Text>友盟统计</Text>
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