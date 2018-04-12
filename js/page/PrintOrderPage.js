import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import HeaderTitle from '../component/HeaderTitle';


export default class PrintOrderPage extends Component {


    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.props.navigation.state.key = 'PrintOrder'; //set the key's name that you want
    }


    render() {
        return (
            <View style={styles.printcontainer}>
                <HeaderTitle title='待打单'  onBack={()=> this.props.navigation.goBack()}/>
                <Text>待打单</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    printcontainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    }
});