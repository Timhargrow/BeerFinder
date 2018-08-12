import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Keyboard} from 'react-native';
import {Container, Content} from 'native-base';
import SearchHeader from './SearchHeader';
import axios from 'axios';
import SearchBody from './SearchBody';
import searchYouTube from 'youtube-search-api-with-axios';

class SearchTab extends Component{
  static navigationOptions = {
    header:null
  }

  state = {
    searchBeer: '',
    beerData: {},
    beerFound: false
  }

  beerSearch = () => {
      
      // Keyboard.dismiss()
      const beerName  = this.state.searchBeer.toLowerCase();
      // const API_KEY = 'AIzaSyAKWS_bxSadO2Jig2PCq5UChUk6WNr5Tx4';
      // const query = `https://api.brewerydb.com/v2/search?=` + beerName + `&type=beer&key=2e97681b46666b733eaf24a940bc7e85`

      axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
          
          var data = response.data.data[0] ? response.data.data[0] : false
          console.log(data)

          if (data) {
            this.setState({
              beerData: data,
              beerFound: true
            })
          
          }
        }).catch((error)=> {
          
          this.setState({
              beerFound: false
          })
        })
  }

  renderContent = () =>{
    if(this.state.beerFound){
      return <SearchBody beerData={this.state.beerData}/>
    }
    else{
      alert("Beer not found")
    }
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
            {this.renderContent()}
        </Content>
      </Container>
    );
  }
}

export default SearchTab;