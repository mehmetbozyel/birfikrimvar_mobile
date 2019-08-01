import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.button, { backgroundColor: this.props.bgColor }]}>
                <Text style={[styles.buttonText, style={ color: this.props.textColor }]}>  {this.props.text} </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height:50,
        margin:10,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize:20,
        fontWeight:'bold',
    }
});