import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ProjectDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> ProjectDetail </Text>
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