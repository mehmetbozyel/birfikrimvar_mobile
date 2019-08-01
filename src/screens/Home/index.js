import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


import ProjectList from '../../components/ProjectList';
import LogoutButton from '../../components/LogoutButton';


export default class Home extends Component {
  static navigationOptions = {
    headerRight: <LogoutButton />
  };


  render() {
    return (
      <View style={styles.container}>
        <ProjectList />
      </View>
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