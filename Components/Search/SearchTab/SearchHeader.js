import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Header, Item, Icon, Input} from 'native-base'
var backgroundImage = require('../../../4myhomies.jpg');

class SearchHeader extends Component{
  render() {
    return (
        <View style={styles.homeScreenView}>
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%', ...styles.homeScreenView}}>
      <Header
        style={{height:50}}
        searchBar
        rounder
      >
        <Item>
            <Icon name="ios-search" color="Black" />
            <Input 
                placeholder="Expand your local beer horizon..."
                onChangeText={this.props.onChangeText}
                returnKeyType="search"
                onSubmitEditing = {this.props.beerSearch}
                />
        </Item>
    </Header>
    </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    homeScreenView: {
      flex:100,
      justifyContent: 'flex-end'
    }
  })
  
export default SearchHeader;