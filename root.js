import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './pageOne';
import PageTwo from './pageTwo';

class Root extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    );
  }
}

export default Root;
