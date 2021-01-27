import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab } from 'native-base';

export default class complaintTranfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
      }
    
  render(){
    const state = this.state;
    return (
    
       <View style={styles.container}>
                         {/* <Image     style={{width:170,height:160,marginBottom:20,paddingVertical:70,marginTop:10}} source={require("../Images/Logo2.jpeg")} /> */}

              <ScrollView>
              <View   style={{paddingHorizontal:0}}>
              <TouchableOpacity    onPress={() => this.props.navigation.navigate('tranfer',"1")}>

                <Card style={{ width:400,marginTop:20}} >
               

                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5,textAlign:'center' ,
                    justifyContent: 'center',paddingHorizontal:5 }}>
                Transfer to Grid Officer
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate("tranfer","2")}>

                <Card style={{ width:400,marginTop:2}} >
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }} >
                Transfer to Other Govt Agencies(if don't pertains to nodal officer)
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate("tranfer","3")}>

                <Card style={{ width:400,marginTop:2}} >
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }} >
                    NO Action required
                </Text>
                  </CardItem>
                </Card>
               </TouchableOpacity>
               
              </View>
              
            </ScrollView>
          </View>
       
        
   
    
      
    );
  }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding:5, backgroundColor: '#fff' ,
alignItems: 'center',
    justifyContent: 'center',},
    text: { margin: 6 }
  });