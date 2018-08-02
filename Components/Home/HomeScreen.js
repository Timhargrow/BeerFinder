import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button} from 'native-base';
var backgroundImage = require('../../Beer-snob.jpg');

class HomeScreen extends Component{
static navigationOptions = {
  header:null
}

  render() {
    return (
      <View style={styles.homeScreenView}>
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%', ...styles.homeScreenView}}>
        <Button
          block={true}
          onPress={()=> this.props.navigation.navigate('SearchTab')}
        >
        <Text style={{color: 'white'}}>Welcome To KC Beer Snob!</Text>
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

export default HomeScreen;
