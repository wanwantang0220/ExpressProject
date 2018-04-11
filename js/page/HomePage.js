import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button,Image} from 'react-native';
import { StackNavigator  } from 'react-navigation';


export default class HomePage extends Component {

    static navigationOptions = {
        title:'首页',
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            flexGrow: 1,
            color: '#ffcd32',
            fontFamily: 'Montserrat-Regular',
        },
        headerRight: <View/>,
        headerStyle: {
            elevation: 0,
            height: 50,
            backgroundColor: '#00000000',
            paddingLeft: 20,
            paddingRight: 0,
        },
        cardStack: {
            gesturesEnabled: false
        },
        headerTitleStyle: {
            alignSelf: 'center',
        },
        headerLeft: (
            <Button
                title='back'
                onPress={() => navigation.navigate('DrawerOpen')}
            />
        ),
        drawerLabel:'首页',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../img/ic_find_hot.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    }



    render(){

        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    //点击打开抽屉
                    this.props.navigation.navigate('DrawerOpen')
                }}>
                    <Text>打开侧滑栏</Text>
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
    },
    icon: {
        width: 24,
        height: 24,
    },
});
