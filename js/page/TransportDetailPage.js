import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

const {width, height} = Dimensions.get('window');


/**
 运输订单详情
 **/
export default class TransportDetailPage extends Component {


    static navigationOptions = {
        title: '订单详情',
        drawerLabel: '订单详情'
    }


    render() {

        return (
            <View style={transportStyles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Text>订单详情</Text>
                    <Text>订单详情</Text>
                </View>
                <View>
                    <ScrollableTabView
                        style={{}}
                        renderTabBar={() => <DefaultTabBar/>}
                        tabBarUnderlineStyle={transportStyles.lineStyle}
                        tabBarActiveTextColor='#FF0000'>

                        <Text style={transportStyles.textStyle} tabLabel='运单详情'>运单详情</Text>
                        <Text style={transportStyles.textStyle} tabLabel='物流详情'>物流详情</Text>
                    </ScrollableTabView>
                </View>
            </View>
        )
    }
}

const transportStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineStyle: {
        width: width / 4,
        height: 2,
        backgroundColor: '#FF0000',
    },
    textStyle: {
        flex: 1,
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    },
});
