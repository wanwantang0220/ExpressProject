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
    Dimensions,
    PixelRatio,
    Alert
} from 'react-native';
import HeaderTitle from "../component/HeaderTitle";

const {width, height} = Dimensions.get('window');

export default class WaitingOrderPage extends Component {


    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        // this.props.navigation.state.key = 'WaitingOrder'; //set the key's name that you want
    }


    render() {

        return (
            <View style={styles.waitordercontainer}>
                <HeaderTitle title='待接单'  onBack={()=> this.props.navigation.goBack()}/>
                <View style={[styles.itemBg, {flexDirection: 'row'}]}>
                    <View style={[styles.height100, styles.part_1_left]}>
                        <View style={{flex: 5}}>
                            <Text style={[styles.text1]}>张三李四</Text>
                            <Text style={[styles.text2]} numberOfLines={1}
                                  ellipsizeMode='middle'>无锡市菱湖大道传感网创新园...</Text>
                        </View>
                        <View style={{flex: 2, borderTopWidth: 0.5, borderColor: '#DDD8CE'}}>
                            <Text style={[styles.text3]}>预约时间 今天18:00-19:00</Text>
                        </View>
                    </View>
                    <View style={[styles.height100, styles.part_1_right]}>
                        <TouchableOpacity
                            onPress={this.onPressOrder}>
                            <Text style={[styles.text4]}>接单</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }

    onPressOrder() {

        Alert.alert('提示', '确定接单吗?',
            [{text: 'Ok', onPress: this.commit},
                {text: 'Cancle', onPress: this.cancle}]
        )
    }

    commit() {
        console.log('commit');
    }

    cancle() {
        console.log('cancle');
    }
}

const styles = StyleSheet.create({
    waitordercontainer: {
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
    height100: {
        height: 100
    },
    part_1_left: {
        flex: 5,
        borderColor: '#DCD7CD',
        borderRightWidth: 0.5,
        borderBottomWidth: 1,
    },
    part_1_right: {
        flex: 2,
        borderColor: '#DCD7CD',
        borderBottomWidth: 1,
    },
    text1: {
        fontSize: 18,
        color: '#333333',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10
    },
    text2: {
        fontSize: 14,
        color: '#7A7A7A',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    text3: {
        fontSize: 12,
        color: '#7A7A7A',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    text4: {
        lineHeight: 100,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'red',
        fontSize: 16,
        // fontWeight:'bold'
        // 阴影
        textShadowOffset: {width: 0.5, height: 1},
        // 阴影颜色
        // textShadowColor:'#7A7A7A'
        // 阴影圆角
        textShadowRadius: 3,
        // 字符间距
        letterSpacing: 5,
        // 字体类型
        fontFamily: 'Georgia'
    },
    line: {
        height: 1,
        borderColor: '#DCD7CD',
        marginTop: 10
    }
});