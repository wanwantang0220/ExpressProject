import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class SettingPage extends Component {


    static navigationOptions = {
        drawerLabel: '设置'
    }


    render() {

        return (
            <View style={styles.container}>
                <Text>设置</Text>
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