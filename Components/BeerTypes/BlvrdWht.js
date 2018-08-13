import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button} from 'native-base';
var backgroundImage = require('../../UWB-01.png');

class BlvrdWht extends Component{
static navigationOptions = {
  header:null
}

  render() {
    return (
      <View style={styles.homeScreenView}>
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%', ...styles.homeScreenView}}>
            <Text>
            Boulevard Wheat
            </Text>
            <Text>
            American-Style Wheat Beer
            </Text>
            <Text>
            Boulevard Unfiltered Wheat Beer is a lively, 
            refreshing ale with a natural citrusy flavor and distinctive cloudy appearance. 
            This easy drinking American-style wheat beer has become our most popular offering, 
            and the best-selling craft beer in the Midwest.
            </Text>
            <Text>
            ABV?
            Alcohol
            4.4%
            </Text>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  homeScreenView: {
    flex:1,
    justifyContent: 'flex-end'
  }
})

export default BlvrdWht;
