import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab } from 'native-base';

export default class circular extends React.Component {
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

              <ScrollView  style={{marginTop:10}}>
              <View   style={{paddingHorizontal:10}}>
<TouchableOpacity   onPress={() => this.props.navigation.navigate('statusReport',"1")} >
                <Card style={{ width:400,}}>
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }}>
                    OFFICE MEMORANDUM AND GAZETTE NOTIFICATION
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => this.props.navigation.navigate('statusReport',"6")} >

                <Card style={{ width:400,}} >
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }} >
                    LIST OF NODAL OFFICERS OF STF
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate('statusReport',"2")}>
                {/* this.props.navigation.navigate('Attendance',  JSON.parse(res.request._response).Body); */}

                <Card style={{ width:400,}} >
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }} >
                    STATUS REPORTS
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate('statusReport',"3")}>

                <Card style={{ width:400,}} >
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }} >
                    STF NEWS PAPER CLIPS
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate('statusReport',"4")}>

                <Card style={{ width:400,}} >
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }} >
                    PUBLIC NOTICE
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate('statusReport',"5")}>

                <Card style={{ width:400,}} >
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }} >
    STF MEETING AGENDA
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate('statusReport',"7")}>

                <Card style={{ width:400,}} >
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }} >
                    MINUTES OF METTING OF THE STF
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate('statusReport',"8")}>

                <Card style={{ width:400,}} >
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }} >
                    MINUTES OF QUARTERLY MEETING IN THE  MINISTRY OF THE STF
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate('statusReport',"9")}>

                <Card style={{ width:400,}} >
                  <CardItem style={{ backgroundColor: '#0C4DA1',  borderWidth: 1, flexDirection: 'row' }}>

                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, justifyContent: 'center',paddingHorizontal:10 }} >
                    INSTRUCTIONS AND GUIDELINES
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
    container: { flex: 1, padding:7, backgroundColor: '#fff' ,
alignItems: 'center',
    justifyContent: 'center',},
    text: { margin: 6 }
  });