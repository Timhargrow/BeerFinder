import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './Components/Home/HomeScreen'
import SearchTabNavigator from './Components/Search/SearchTabNavigator'

const App = createStackNavigator({
  
  HomeScreen: {screen: HomeScreen},
  SearchTabNavigator: {
    screen: SearchTabNavigator
  },
  initialRouteName:'SearchTabNavigator'
  }
);

export default App;