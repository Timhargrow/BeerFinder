import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Keyboard} from 'react-native';
import {Container, Content} from 'native-base';
import SearchHeader from './SearchHeader';
import axios from 'axios';
import SearchBody from './SearchBody';
import searchYouTube from 'youtube-search-api-with-axios';

const API_KEY = 'AIzaSyAKWS_bxSadO2Jig2PCq5UChUk6WNr5Tx4';
class SearchTab extends Component{
    render(){
        return(
            searchYouTube({key: API_KEY, term: term, maxResults: 6}, (videos) => {
                console.log(videos);

            })
        );
    }
  }
  
  export default SearchTab;