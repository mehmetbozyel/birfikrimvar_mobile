import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import {inject} from 'mobx-react';

@inject('AuthStore')
export default class LogoutButton extends Component {
    render() {
        return (
            <TouchableOpacity 
                onPress={() => this.props.AuthStore.removeToken()}
                style={styles.buttonContainer}>
                    <Text> Çıkış </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding:10
    }
});