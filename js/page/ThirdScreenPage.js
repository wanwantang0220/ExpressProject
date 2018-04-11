import React, {Component} from "react";
import {StyleSheet,View, Text } from "react-native";


export default class ThirdScreenPage extends Component {

    static navigationOptions = ({ navigation }) => {

        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
            title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
        };
    };

    render() {
        return <Text>I am the third Screen</Text>
    }
}