import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {inject} from 'mobx-react';

@inject('AuthStore')
export default class AuthLoading extends Component {
    async componentDidMount() {
        await this.props.AuthStore.getToken();
    }

    render() {
        return (
            <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
                <Text> Auth Loading... </Text>
            </View>
        )
    }
}
