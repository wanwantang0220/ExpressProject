import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
import HeaderTitle from '../component/HeaderTitle';

const {width, height} = Dimensions.get('window');


export default class OtherPage extends Component {


    static navigationOptions = {
        title: '高德地图',
        drawerLabel: '高德地图',
        // header: null,

    }


    render() {

        return (
            <View style={styles.container}>
                <View style={[styles.itemBg, {flexDirection: 'column'}]}>
                    <Text>高德地图</Text>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    itemBg: {
        width: width - 20,
        height: 100,
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#CFCFCF',
        elevation: 50,
        borderRadius: 5,
    },
});