import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Keyboard} from 'react-native';
import {Container, Content} from 'native-base';
import SearchHeader from './SearchHeader';
import axios from 'axios';

class SearchTab extends Component{
  static navigationOptions = {
    header:null
  }

  state = {
    searchBeer: '',
    beerData: {}
  }

  beerSearch = () => {
      Keyboard.dismiss()
      const beerName  = this.state.searchBeer.toLowerCase();

      const query = `http://api.brewerydb.com/v2/search?q=` + beerName + `&type=beer&
      key=2e97681b46666b733eaf24a940bc7e85`

      axios.get(query)
        .then((response) => {
          var data = response.data.data[0] ? response.data.data[0] : false
          console.log(data)
        })
  }

  render() {
    return (
      <Container>
        
          <SearchHeader 
            value={this.state.searchBeer}
            onChangeText={(searchBeer)=> this.setState({searchBeer})}
            beerSearch={this.beerSearch}
          />

        <Content>

        </Content>
      </Container>
    );
  }
}

export default SearchTab;