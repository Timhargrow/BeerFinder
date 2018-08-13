import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button} from 'native-base';
var backgroundImage = require('../../Tank7
.jpg');

class BlvrdWht extends Component{
static navigationOptions = {
  header:null
}

  render() {
    return (
      <View style={styles.homeScreenView}>
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%', ...styles.homeScreenView}}>
            <Text>
            Tank 7 Farmhouse Ale
            </Text>
            <Text>
            Saison/Farmhouse Ale
            </Text>
            <Text>
            When our brewers were experimenting with variations on a traditional Belgian-style farmhouse ale, 
            the perfect combination of elements came together in fermenter number seven. 
            You could call it fate, but they called it Tank 7, and so it is. 
            Beginning with a big surge of fruity aromatics and grapefruit-hoppy notes, 
            the flavor of this complex, straw-colored ale tapers off to a peppery, dry finish.
            </Text>
            <Text>
            Recommended Glassware: Tank 7 Tulip Glass
            </Text>
            <Text>
            ABV?
            Alcohol
            8.5%
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
