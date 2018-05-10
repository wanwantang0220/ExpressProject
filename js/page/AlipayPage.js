import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Image} from 'react-native';
import Alipay from '../util/Alipay';
import axios from 'axios';

export default class AlipayPage extends Component {


    static navigationOptions = {
        drawerLabel: '支付宝',
        title: "支付宝支付"
    }


    constructor(props) {
        super(props);
        this.state = {
            signedString:{}
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={{width: width - 80, height: 40, alignItems: 'center', marginTop: 50}}
                    underlayColor='#28780b'
                    onPress={() => this.nativeAndroid()}>
                    <View style={{
                        width: width - 80, height: 40, alignItems: 'center', justifyContent: 'center',
                        backgroundColor: '#35a40c', borderRadius: 5
                    }}>
                        <Text style={{color: 'white', fontSize: 17}}>确定</Text>
                    </View>
                </TouchableHighlight>


            </View>
        )
    }

    nativeAndroid(){

        var payAction = NativeModules.PayAction
        //调用支付宝服务端集成的方法，获取订单信息
        axios.post('http://192.168.1.45:3000/alipay/pay').then(({ data }) => {
            return payAction.pay(data)
        }).then((res) => {
            alert(res)
            //此处处理支付成功的方法
            console.log(res)
        }).catch((err) => {
            alert(err)
            console.log(err)
        })
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});