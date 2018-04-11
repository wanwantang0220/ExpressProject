/**
 * 待接单
 **/


import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar,
    Button,
    ImageBackground,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class WaitingOrderPage extends Component {


    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.props.navigation.state.key = 'WaitingOrder'; //set the key's name that you want
    }

    render() {


        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'#00000000'} //状态栏的背景色
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
                />

                <View style={{width: width, height: 60,}}>
                    <ImageBackground
                        style={[styles.image,{flexDirection: 'column'}]}
                        source={require('../../img/banner3.jpg')}>
                        <TouchableOpacity
                            style={{}}
                            onPress={() => this.props.navigation.goBack()}>
                            <Text style={{color: '#ffffff', marginTop: 30, marginLeft: 10}}>back</Text>

                        </TouchableOpacity>

                        <Text>待接单 </Text>
                    </ImageBackground>
                </View>
                <Text>待接单</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: width,
        height: height
    },
    image: {
        width: width,
        height: 60,
        // 设置图片填充模式
        // resizeMode: 'stretch'
    },
});