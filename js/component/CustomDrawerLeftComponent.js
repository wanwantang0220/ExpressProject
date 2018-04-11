import React, {Component} from "react";
import {StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from "react-native";
import {DrawerItems} from 'react-navigation';

const {width, height} = Dimensions.get('window');


const CustomDrawerLeftComponent = (props) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={[styles.image]}
                    source={require('../../img/banner2.png')}/>
                <DrawerItems {...props} />
                {/*<View style={[styles.text]}>*/}
                {/*<Text>我的</Text>*/}
                {/*</View>*/}
            </View>
        </ScrollView>
    )
};
export default CustomDrawerLeftComponent;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
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
