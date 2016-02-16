'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Button = require('react-native-button');

var AppView = React.createClass({
  render() {
    var signedUp;
    var routeStack = this.props.navigator.state.routeStack
    for (var route in routeStack){
      if (routeStack[route].name === 'Sign Up'){
        signedUp = <Text>VerbalCare thanks you for signing up!</Text>;
      }
    }
    return (
      <View navigator={this.props.navigator} style={styles.container}> 
        {signedUp}
        <Text>This is where we make it 'Appen</Text>
        <Text>Your username is {this.props.route.passProps.username}</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AppView', () => AppView);

module.exports = AppView;
