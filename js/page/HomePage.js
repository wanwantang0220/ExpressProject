import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    StatusBar,
    ImageBackground,
    PixelRatio
} from 'react-native';
import {StackNavigator} from 'react-navigation';

const {width, height} = Dimensions.get('window');


/**
 * 首页
 */
export default class HomePage extends Component {

    static navigationOptions = {
        header: null,
        drawerLabel: '首页',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../../img/ic_find_hot.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    }

    // static navigationOptions = {
    //     title: '首页',
    //     headerTitleStyle: {
    //         alignSelf: 'center',
    //         textAlign: 'center',
    //         flexGrow: 1,
    //         color: '#ffcd32',
    //         fontFamily: 'Montserrat-Regular',
    //     },
    //     headerRight: <View/>,
    //     headerStyle: {
    //         elevation: 0,
    //         height: 50,
    //         backgroundColor: '#00000000',
    //         paddingLeft: 20,
    //         paddingRight: 0,
    //     },
    //     cardStack: {
    //         gesturesEnabled: false
    //     },
    //     headerTitleStyle: {
    //         alignSelf: 'center',
    //     },
    //     headerLeft: (
    //         <Button
    //             title='back'
    //             onPress={() => navigation.navigate('DrawerOpen')}
    //         />
    //     ),
    //     header:null,
    //     drawerLabel: '首页',
    //     drawerIcon: ({tintColor}) => (
    //         <Image
    //             source={require('../../img/ic_find_hot.png')}
    //             style={[styles.icon, {tintColor: tintColor}]}
    //         />
    //     ),
    // }


// <StatusBar
// animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
// hidden={false}  //是否隐藏状态栏。
// backgroundColor={'#00000000'} //状态栏的背景色
// translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
// barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
// />

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <ImageBackground
                    style={[styles.image]}
                    source={require('../../img/banner3.jpg')}>
                    <TouchableOpacity onPress={() => {
                        //点击打开抽屉
                        navigate('DrawerOpen')
                    }}>
                        <Text style={{color: '#ffffff', marginTop: 30, marginLeft: 10}}>Back</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <View style={{marginTop: 10, marginLeft: 15, width: width}}>
                    <Text style={{fontSize: 18, color: '#333333'}}>张xxx，你好</Text>
                    <Text style={{fontSize: 14, color: '#7A7A7A'}}>无锡市新吴区新安站</Text>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 20}}>
                    <TouchableOpacity
                        style={[styles.viewBg, {flex: 1, marginLeft: 15}]}
                        activeOpacity={0.85}
                        underlayColor='white'
                        onPress={() => this.props.navigation.navigate('WaitingOrder')}>
                        <Text style={{
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#333333'
                        }}>接单</Text>
                        <Text style={{marginLeft: 15, marginTop: 5, fontSize: 14, color: '#7A7A7A'}}>1/10</Text>
                        <Text style={{marginLeft: 15, marginTop: 15, color: '#7A7A7A'}}>......</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.viewBg, {flex: 1, marginLeft: 10, marginRight: 10}]}
                        activeOpacity={0.85}
                        underlayColor='white'
                        onPress={() => this.props.navigation.navigate('PrintOrder')}>
                        <Text style={{
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#333333'
                        }}>打单</Text>
                        <Text style={{marginLeft: 15, marginTop: 5, fontSize: 14, color: '#7A7A7A'}}>1/10</Text>
                        <Text style={{marginLeft: 15, marginTop: 15, color: '#7A7A7A'}}>......</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.viewBg, {flex: 1, marginRight: 15}]}
                        activeOpacity={0.85}
                        underlayColor='white'
                        onPress={() => this.props.navigation.navigate('AliPay')}>
                        <Text style={{
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#333333'
                        }}>支付宝支付</Text>
                        <Text style={{marginLeft: 15, marginTop: 5, fontSize: 14, color: '#7A7A7A'}}>1/10</Text>
                        <Text style={{marginLeft: 15, marginTop: 15, color: '#7A7A7A'}}>......</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 10}}>
                    <TouchableOpacity
                        style={[styles.viewBg, {flex: 1, marginLeft: 15}]}
                        onPress={() => this.props.navigation.navigate('Maps')}>

                        <Text style={{
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#333333'
                        }}>高德地图</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.viewBg, {flex: 1, marginLeft: 10, marginRight: 15}]}
                        onPress={() => this.props.navigation.navigate('JPush')}>
                        <Text style={{
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#333333'
                        }}>极光推送</Text>
                        <Text style={{marginLeft: 15, marginTop: 5, fontSize: 14, color: '#7A7A7A'}}>10</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: width, flexDirection: 'row'}}>
                    <TouchableOpacity style={[styles.viewTextBg, {marginTop: 20, marginLeft: 50}]}
                                      onPress={() => this.props.navigation.navigate('Bluetooth')}>
                        <Text style={{color: '#333333', textAlign: 'center',}}>蓝牙</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
    },
    image: {
        width: width,
        height: 180,
        // 设置图片填充模式
        // resizeMode: 'stretch'
    },
    bannerBg: {
        width: width,
        height: 150,
    },
    viewBg: {
        width: 120,
        height: 120,
        backgroundColor: '#ffffff',
        shadowColor: '#CFCFCF',
        borderRadius: 25,
        elevation: 50,
    },
    viewTextBg: {
        width: 220,
        height: 30,
        backgroundColor: '#ffffff',
        borderColor: '#080808',
        justifyContent: 'center',
        borderRadius: 15,
        borderStyle: 'solid',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),
    }
});
