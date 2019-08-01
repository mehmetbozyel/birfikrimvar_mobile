import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Body, Header, Title} from "native-base";

import IdeaForm from './IdeaForm';

export default class AddProject extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <Body>
            <Title> Yeni Fikir </Title>
          </Body>
        </Header>
        <IdeaForm />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});
