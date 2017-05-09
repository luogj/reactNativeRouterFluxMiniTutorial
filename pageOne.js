import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  goToPageTwo() {
    Actions.pageTwo({text: 'Hello World!'});
  }

  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={() => {this.goToPageTwo();}}>This is Page One!</Text>
      </View>
    );
  }
}
