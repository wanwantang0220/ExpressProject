import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
import HeaderTitle from '../component/HeaderTitle';

const {width, height} = Dimensions.get('window');
export default class PrintOrderPage extends Component {


    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        // this.props.navigation.state.key = 'PrintOrder'; //set the key's name that you want
    }


    render() {


        return (
            <View style={printStyles.printcontainer}>
                <HeaderTitle title='待打单' onBack={() => this.props.navigation.goBack()}/>
                <View style={[printStyles.itemBg, {flexDirection: 'column'}]}>

                    <View style={{flex: 5, flexDirection: 'row'}}>
                        <View style={{flex: 5}}>
                            <Text style={[printStyles.text1]}>张林
                                <Text style={[printStyles.text3]}> 11111111111</Text>
                            </Text>
                            <Text style={[printStyles.text2, {marginTop: 10}]}
                                  numberOfLines={1}
                                  ellipsizeMode='middle'>
                                无锡市菱湖大道传感网创新园...
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{flex: 1}}
                            activeOpacity={0.85}
                            underlayColor='white'
                            onPress={() => this.props.navigation.navigate('PrintOrderDetail')}>
                            <Text style={[printStyles.text4]}>待完善</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 2, borderTopWidth: 0.5, borderColor: '#DDD8CE'}}>
                        <Text style={[printStyles.text3]}>预约时间 今天18:00-19:00</Text>
                    </View>
                </View>
                <View style={[printStyles.itemBg, {flexDirection: 'column'}]}>
                    <TouchableOpacity
                        style={{flex: 1}}
                        activeOpacity={0.85}
                        underlayColor='white'
                        onPress={()=>{
                            //蓝牙
                        }}>
                        <Text style={[printStyles.text4]}>蓝牙</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const printStyles = StyleSheet.create({
    printcontainer: {
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
    text1: {
        fontSize: 18,
        color: '#333333',
        // fontWeight: 'bold',
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
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'blue',
        paddingTop: 10,
        paddingRight: 10,

    }
});