import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions,
    ScrollView,
    PixelRatio,
    Button,
} from 'react-native';


const {width, height} = Dimensions.get('window');
export default class PrintOrderDetailPage extends Component {


    static navigationOptions = {
        title: '订单详情',
    }

    constructor(props) {
        super(props);
        // this.props.navigation.state.key = 'PrintOrder'; //set the key's name that you want
        this.state={
        }

    }

    render() {

        return (
            <ScrollView>
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

                    <View style={[pOrderDetailStyles.background2,]}>
                        <View style={[pOrderDetailStyles.view1]}>
                            <Image
                                style={{flex: 1, marginTop: 20}}
                                source={require('../../img/ic_find_hot.png')}/>
                            <View style={[pOrderDetailStyles.view2]}>
                                <Text style={[pOrderDetailStyles.text2]}>张林</Text>
                                <Text style={[pOrderDetailStyles.text3]}>无锡市新吴区菱湖大道中国传感网创新园E1楼</Text>
                            </View>
                            <Image
                                style={{flex: 1, marginTop: 20}}
                                source={require('../../img/ic_find_hot.png')}/>
                        </View>
                        <View style={[pOrderDetailStyles.view1]}>
                            <Image
                                style={{flex: 1, marginTop: 20}}
                                source={require('../../img/ic_find_hot.png')}/>
                            <View style={[pOrderDetailStyles.view2]}>
                                <Text style={[pOrderDetailStyles.text2]}>张林</Text>
                                <Text style={[pOrderDetailStyles.text3]}>无锡市新吴区菱湖大道中国传感网创新园E1楼</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[pOrderDetailStyles.background2, {height: 180}]}>

                        <View style={[pOrderDetailStyles.view3]}>
                            <Text style={[pOrderDetailStyles.text4, {textAlign: 'left', color: '#333333'}]}>预约取件</Text>
                            <Text style={[pOrderDetailStyles.text4, {textAlign: 'right'}]}>今天 18:00-19:00</Text>
                        </View>
                        <View style={[pOrderDetailStyles.view3]}>
                            <Text style={[pOrderDetailStyles.text4, {textAlign: 'left', color: '#333333'}]}>物品类型</Text>
                            <Text style={[pOrderDetailStyles.text4, {textAlign: 'right'}]}>日用品</Text>
                        </View>
                        <View style={[pOrderDetailStyles.view3]}>
                            <Text style={[pOrderDetailStyles.text4, {textAlign: 'left', color: '#333333'}]}>物品重量</Text>
                            <Text style={[pOrderDetailStyles.text4, {textAlign: 'right'}]}>2kg</Text>
                        </View>
                        <View style={[pOrderDetailStyles.view4, {justifyContent: 'flex-end'}]}>
                            <TouchableOpacity style={[pOrderDetailStyles.view5]}>
                                <Text style={[pOrderDetailStyles.text5]}>转移订单</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[pOrderDetailStyles.view5, {marginLeft: 10}]}>
                                <Text style={[pOrderDetailStyles.text5]}>取消订单</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[pOrderDetailStyles.background3, {height: 150}]}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            underlayColor={'red'}
                            style={[pOrderDetailStyles.view5]}
                            onPress={() => this.props.navigation.navigate('TransportDetail')}
                            underlayColor="#E1F6FF">
                            <Text style={[pOrderDetailStyles.text6]}>下一步</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            underlayColor={'red'}
                            style={[pOrderDetailStyles.view5,{marginTop:10}]}
                            onPress={() => {
                                console.log('编辑订单信息')
                            }}
                            underlayColor="#E1F6FF">
                            <Text style={[pOrderDetailStyles.text6]}>编辑订单信息</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        )
    }
}

const pOrderDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
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
        width: width - 20,
        height: 200,
        shadowColor: '#CFCFCF',
        borderRadius: 5,
        elevation: 50,
        marginTop: 15,
    },
    background3: {
        flexDirection: 'column',
        width: width - 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20
    },
    view1: {
        flexDirection: 'row',
        flex: 1,
        borderBottomColor: '#ededed',
        borderBottomWidth: 0.5,
        marginLeft: 10,
        marginRight: 10
    },
    view2: {
        flex: 3,
        borderRightWidth: 0.5,
        borderRightColor: '#ededed',
        marginTop: 5,
        marginBottom: 5
    },
    view3: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ededed'
    },
    view4: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    view5: {
        borderRadius: 15,
        backgroundColor: '#ffffff',
        borderColor: 'red',
        borderTopColor: 'red',
        borderBottomColor: 'red',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),
    },
    text1: {
        fontSize: 14,
        marginTop: 8,
        marginLeft: 10,
        marginRight: 10,
        color: '#7A7A7A',
    },
    text2: {
        fontSize: 18,
        color: '#333333',
        // fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10
    },
    text3: {
        fontSize: 12,
        color: '#7A7A7A',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    text4: {
        flex: 1,
        paddingBottom: 10
    },
    text5: {
        textAlign: 'right',
        color: 'red',
        paddingBottom: 10,
        fontSize: 12,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        textShadowOffset: {width: 0.5, height: 1},
    },
    text6: {
        textAlign: 'center',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        color:'red',
        textShadowOffset: {width: 0.5, height: 1},
    }

});