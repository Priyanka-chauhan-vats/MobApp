import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab } from 'native-base';

export default class ClickonTransferOtherthenstf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
      }
    
  render(){
    const state = this.state;
    return (
    <Container>
        {/* <Header>
            <Text  style={{ color:'white', fontWeight: 'bold',fontSize:20,marginTop:15,marginRight:300 }}>Other</Text>
        </Header> */}
   
       <View style={styles.container}>

            
              <View >
              {/* <TouchableOpacity >

<Card style={{ width:400,marginTop:-3}} >
  <CardItem style={{ backgroundColor: '#FFFFF'}}>

  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
  paddingHorizontal:10,paddingVertical:5 }} >
Transfer
</Text>
  </CardItem>
</Card>
</TouchableOpacity> */}
              <TouchableOpacity    onPress={() => this.props.navigation.navigate("NodalOfficersOyherthenstf")}>

                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:15}} >
NODAL
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate("gridOfficersOyherthenstf")}>

                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:15 }} >
GRID
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
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
    text: { margin: 6 }
  });