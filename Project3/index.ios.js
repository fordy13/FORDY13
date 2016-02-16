'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

var WelcomeView = require('./modules/WelcomeView');

function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

var Project3 = React.createClass({
  render() {
        return (
            <Navigator
                initialRoute={{component: WelcomeView}}
                configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}
                renderScene={renderScene}
             />
        );
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Project3', () => Project3);
