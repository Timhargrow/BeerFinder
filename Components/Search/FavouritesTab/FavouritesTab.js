import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button} from 'native-base';
var backgroundImage = require('../../../Lovebeer.jpg');

class FavouritesTab extends Component{
  render() {
    return (
      <View style={styles.homeScreenView}>
       
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%', ...styles.homeScreenView}}> 
        <Button>
          <Text>
            "This is a button!!!""
        </Text>
        </Button>
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
export default FavouritesTab;