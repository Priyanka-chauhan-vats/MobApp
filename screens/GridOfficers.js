import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import { Searchbar } from 'react-native-paper';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail,  } from 'native-base';
export default class GridOfficers extends React.Component {
      
    
   onChangeSearch = query => setSearchQuery(query);
   render(){
  return (
      <Container >
          <View  style={{padding:5}}>
    <Searchbar
    style={{borderWidth:1}}
      placeholder="Search here"
      onChangeText={this.onChangeSearch}
    //   value={searchQuery}
    />
    </View>
    <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnsgq3waTxC12c6j5aWFupIbk-JET2GAH7aQ&usqp=CAU' }} />
              </Left>
              <Body>
                <Text style={{color:"blue"}}> Sh.Munazzar </Text>
                {/* <Text note>Doing what you like will always keep you happy . .</Text> */}
                <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Designation:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Sr.C.A
          </Text>
          </View>
                <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Authority:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Archaeological of India
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Ward:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">North
          </Text>
          </View>
              </Body>
              {/* <Right>
                <Text note>3:43 pm</Text>
              </Right> */}
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnsgq3waTxC12c6j5aWFupIbk-JET2GAH7aQ&usqp=CAU' }} />
              </Left>
              <Body>
                <Text style={{color:"blue"}}> Sh. Satender</Text>
                {/* <Text note>Doing what you like will always keep you happy . .</Text> */}
                <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Designation:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Jr.C.A
          </Text>
          </View>
                <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Authority:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Archaeological Survey of India
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Ward:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">South
          </Text>
          </View>
              </Body>
              {/* <Right>
                <Text note>3:43 pm</Text>
              </Right> */}
            </ListItem><ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnsgq3waTxC12c6j5aWFupIbk-JET2GAH7aQ&usqp=CAU' }} />
              </Left>
              <Body>
                <Text style={{color:"blue"}}> Sh.Imran </Text>
                {/* <Text note>Doing what you like will always keep you happy . .</Text> */}
                <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Designation:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">C.A
          </Text>
          </View>
                <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Authority:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Archaeological of India
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Ward:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Rohini
          </Text>
          </View>
              </Body>
              {/* <Right>
                <Text note>3:43 pm</Text>
              </Right> */}
            </ListItem>
          </List>
        </Content>
    </Container>
  );
};
}


