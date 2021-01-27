import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab } from 'native-base';

export default class mystuff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                 }
      }
    
  render(){
    const state = this.state;
    return (
    <Container>
                <View style={styles.container}>
                         <View   >
              <TouchableOpacity    onPress={() => this.props.navigation.navigate("workflow")}>
                <Card style={{ width:400,marginTop:-4}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>
                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',paddingHorizontal:10,paddingVertical:10 }} >
Issues Assign to me
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate("IssuesClosed")}>
                <Card style={{ width:400,marginTop:-4}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>
                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',paddingHorizontal:10,paddingVertical:10 }} >
                Issues that I have closed
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate("issueAssignByme")}>
                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>
                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',paddingHorizontal:10,paddingVertical:10 }} >
        Issues Assigned by me
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