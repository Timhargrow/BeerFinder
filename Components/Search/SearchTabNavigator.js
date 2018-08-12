import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import FavouritesTab from './FavouritesTab/FavouritesTab'
import SearchTab from './SearchTab/SearchTab'
import {Footer, FooterTab, Button, Icon} from 'native-base'

const SearchTabNavigator = createBottomTabNavigator({
  SearchTab,
  FavouritesTab
},{

  tabBarPosition: 'bottom',
  tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              onPress= {()=> props.navigation.navigate('SearchTab')}
            >
            <Icon name="beer" />
            <Text>Search</Text>
            </Button>

            <Button
              vertical
              onPress= {()=> props.navigation.navigate('FavouritesTab')}
            >
              <Icon name="star" />
              <Text>FavouritesTab</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
  }
})

export default SearchTabNavigator;