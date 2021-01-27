import React from 'react';
import { StyleSheet,  View, TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab, H2 } from 'native-base';
import { Block, Checkbox, Text, theme } from "galio-framework";

import axios from 'axios';
import { baseurl } from '../screens/baseurl';
const comment = baseurl +'grievancesendcomment';
export default class sendComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
      }
    submit=()=>{
    data={
    comment:this.state.description  
    }
    axios.post(comment, data)
  .then(Response => {
      console.log('DATa saveed');
      console.log(Response)
      
  
      console.log('details');
      this.props.navigation.navigate('floating')
      // console.log(this.state.name)
    })
    .catch(err => {
      console.log('Error is ' + err);
    })
    }
    handleDescriptionChange = event =>{
      this.setState({
        description: event.nativeEvent.text
        });
    }
  render(){
    const state = this.state;
    return (
    <Container style={styles.container}>
         
       <View style={styles.container}>

            
              <View   >
                       
              <Text h1 style={{textAlign:"center", fontSize:16}}>Add Comments</Text>
            
                <Card style={{ width:400,marginTop:15}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Comments"
      // value='shamli'
      onChange={this.handleDescriptionChange} 

      placeholderTextColor="black"
      numberOfLines={40}
      multiline={true}
    />
       </View>
                  </CardItem>
                  <Block >
              <TouchableOpacity style={styles.button} onPress={this.submit} >
                  <Text style={styles.buttontext}>Submit</Text>
                </TouchableOpacity>
                </Block>
                </Card>

               
                </View>
 
          </View>
          </Container>
        
   
    
      
    );
  }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#E8E8E8' ,
alignItems: 'center',
},
textAreaContainer: {
    borderColor:"black",
    width:"100%",
    borderRadius:5,
    borderWidth: 1,
    padding: 5,
    marginTop:20,
    textAlignVertical:'top',
    // justifyContent:"center",
    height:100,
  },
  textArea: {
    height: 50,
    textAlignVertical:'top',
   
  },
  button: {
    width: 100,
    // borderRadius: 20,
    backgroundColor: "#004CA1",
     marginLeft: 20,
    marginTop:10,
    marginBottom :30

  },
  buttontext: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#ffffff',
  },
    text: { margin: 6 }
  });