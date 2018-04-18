import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class DrawerLeftPage extends Component {


    static navigationOptions = {
        drawerLabel: '购物车'
    }


    render(){

        return(
            <View style={styles.container}>npm i -S react-native-bluetooth-serial
                <TouchableOpacity onPress={()=>{
                    //点击关闭侧滑
                    this.props.navigation.navigate('DrawerClose')
                }}>
                    <Text>关闭侧滑栏</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});