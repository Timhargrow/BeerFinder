import React, {Component} from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';
import {Content, ListItem} from 'native-base';

class SearchBody extends Component{
        render(){
            const beerData = this.props.beerData
            
            return(

                <Content>
                <List style={{backgroundColor: 'white'}}>
                    <ListItem itemDivider>
                        <Text>Name</Text>
                    </ListItem>
                <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text>{beerData.name}</Text>
                </View>
                <View>
                    <Button onPress={()=> this.addToFavourites(beerData.name)} title="Favourites"></Button>
                </View>
            </ListItem>
            <ListItem itemDivider>
                <Text>Category</Text>
            </ListItem>
            <ListItem>
                <Text>{beerData.style.category.name}</Text>
            </ListItem>
            <ListItem itemDivider>
                <Text>Descpription</Text>
            </ListItem>
            <ListItem>
                <Text>{beerData.description}</Text>
            </ListItem>
            <ListItem>
                <Text>
                    Rating
                </Text>
                </ListItem>
            </List>
            </Content>
        

            );
        }
    }
export default SearchBody;