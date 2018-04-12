import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');
export default class PrintOrderDetailPage extends Component {


    static navigationOptions = {
        title: '订单详情',
    }


    render() {

        return (
            <View style={pOrderDetailStyles.container}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'#000000'} //状态栏的背景色
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'default'} // enum('default', 'light-content', 'dark-content')
                />
                <View style={[pOrderDetailStyles.background1, {flexDirection: 'row'}]}>
                    <Text style={[pOrderDetailStyles.text1, {flex: 5}]}>订单:1000000000</Text>
                    <Text style={[pOrderDetailStyles.text1, {flex: 1}]}>待完善</Text>
                </View>
                <View style={[pOrderDetailStyles.background2, {flexDirection: 'column'}]}>
                    <View>

                    </View>
                </View>

            </View>
        )
    }
}

const pOrderDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    background1: {
        backgroundColor: '#dcdcdc',
        width: width,
        height: 35,
        // borderTopWidth:0.5,
        borderBottomWidth: 0.5,
        // borderTopColor:'#ededed',
        borderBottomColor: '#ededed',
    },
    background2: {
        backgroundColor: '#ffffff',
        width: width,
    },
    text1: {
        fontSize: 14,
        marginTop: 8,
        marginLeft: 10,
        marginRight: 10,
        color: '#7A7A7A',
    }
});