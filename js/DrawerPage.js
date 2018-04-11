import React, {Component} from 'react';
import {StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import DrawerLeftPage from './page/DrawerLeftPage';
import MyStackNaviPage from './page/MyStackNaviPage';
import SettingPage from './page/SettingPage';
import HomePage from "./page/HomePage";
import OrderPage from './page/OrderPage';

const {width, height} = Dimensions.get('window');
/**
 * 侧滑根目录
 */
const Drawer = DrawerNavigator({
    Home: {
        screen: HomePage
    },
    Order: {
        screen: OrderPage
    },
    Setting: {
        screen: SettingPage
    },
}, {
    drawerWidth: 300,
    drawerPosition: 'left',
    // contentComponent: CustomDrawerLeftComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: 'Home', // 默认页面组件
        activeItemKey: 'MyStackNavi',
        labelStyle: {//标签样式
            // color : 'red',
            height: 30,
        },
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式
            marginVertical: 0,
        },
    },
    contentComponent: props => {
        console.log('contentComponent');
        console.log(props);
        return (
            <ScrollView>
                <View>
                    <Image
                        style={[styles.image]}
                        source={require('../img/banner2.png')}/>
                    <DrawerItems
                        {...props}
                        activeTintColor='#000000'
                        activeBackgroundColor='rgba(0, 0, 0, .04)'
                        inactiveTintColor='rgba(0, 0, 0, .87)'
                        inactiveBackgroundColor='transparent'
                        style={{backgroundColor: '#ffffff'}}
                        labelStyle={{color: '#000000'}}
                    />
                </View>
            </ScrollView>
        )
    },
});


export default class DrawerPage extends Component {

    render() {
        return (
            <Drawer/>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: width,
        height: 150
    },
    text: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#DDD8CE',
        marginTop: 40,
        height: 65,
        flexDirection: 'row',
        paddingTop: 10,

    }
});
