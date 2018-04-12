import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar,
    Button,
    ImageBackground,
    Dimensions,
    PixelRatio,
    Alert
} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');

export default class HeaderTitle extends Component {

    /**
     * 属性声明
     * @type {{userConfirmed: (*), userCanceled: (*)}}
     */
    static propTypes = {
        onBack: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
    }


    render() {

        const {title,onBack} = this.props;

        return (
            <View>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'#00000000'} //状态栏的背景色
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
                />

                <View style={{width: width, height: 60}}>
                    <ImageBackground
                        style={[styles.image, {flexDirection: 'row', width: width,}]}
                        source={require('../../img/banner3.jpg')}>
                        <TouchableOpacity
                            style={{flex: 1}}
                            onPress={() => this.props.onBack }>
                            <Text style={{color: '#ffffff', marginTop: 30, paddingLeft: 10}}>首页</Text>

                        </TouchableOpacity>

                        <Text style={{
                            flex: 8,
                            color: '#ffffff',
                            fontSize: 20,
                            marginTop: 30,
                            textAlign: 'center'
                        }}>{this.props.title} </Text>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: 60,
        // 设置图片填充模式
        // resizeMode: 'stretch'
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