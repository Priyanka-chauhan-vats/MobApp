import React, { Component } from "react";
import { StyleSheet, Image,SafeAreaView } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,View,
  Right
} from "native-base";
import { ScrollView,TouchableOpacity } from "react-native-gesture-handler";
import { Block } from "galio-framework";
const paper =require("../Images/images1.jpg");

export default class  IABMnotView extends Component {
clickHandler = () => {
      //function to handle click on floating Action Button
      alert('Floating Button Clicked');
    };
  //Screen2 Component
  render() {
    return (
      <  Block   style={styles.linearGradient}>
      
     
      <ScrollView>
      <Content>
      <TouchableOpacity    onPress={() => this.props.navigation.navigate("IABMcomplaintDetails")}>

      <Card style={styles.mb}   className=" shadow border-0 ">
         <CardItem >
       <Body className="px-lg-3 py-lg-3">
       <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={paper} 
       style={styles.image}   className="responsiveImg "  />
     <View style={{width:"60%",paddingHorizontal:3}}>
        <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Compalint#:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">202021006217
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Name
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Devender(9214044504)
          </Text>
          </View>
      
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Type of Compalint:Repair of DDA flats
          </Text>
         
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Status:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Assigned
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Tag:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Action not Taken
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Submitted Date:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">29-6-2020
          </Text>
          </View>


         </View>
        </View>
        </Body>
       </CardItem>
        </Card>
        
        </TouchableOpacity>


         <Card style={styles.mb}   className=" shadow border-0 ">
         <CardItem >
       <Body className="px-lg-3 py-lg-3">
       <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={paper} 
       style={styles.image}   className="responsiveImg "  />
     <View style={{width:"60%",paddingHorizontal:3}}>
        <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Compalint#:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">202021006578
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Name
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Vikas Rana(9214044504)
          </Text>
          </View>
      
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Type of Compalint:Bilding Byelaws Violation
          </Text>
         
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Status:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Assigned
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Tag:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Action not Taken
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Submitted Date:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">9-6-2020
          </Text>
          </View>


         </View>
        </View>
        </Body>
       </CardItem>
        </Card>
        {/* <Card style={styles.mb}   className=" shadow border-0 ">
         <CardItem >
       <Body className="px-lg-3 py-lg-3">
       <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={paper} 
       style={styles.image}   className="responsiveImg "  />
     <View style={{width:"60%",paddingHorizontal:3}}>
        <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Compalint#:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">202021006576
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Name
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Ajay(9214044504)
          </Text>
          </View>
               <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Type of Compalint:Encroachment on public land
          </Text>
         
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Status:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Assigned
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Tag:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">Action not Taken
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Date:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">29-6-2020
          </Text>
          </View>
         </View>
        </View>
        </Body>
       </CardItem>
        </Card> */}
        
      </Content>
    
      </ScrollView>
    </Block>
    );
  }
}
 
const styles = StyleSheet.create({

  mb: {
    marginBottom: 5
  },
  container: {
   flex: 1,
   backgroundColor: 'white',
   padding: 10,
 },
 titleStyle: {
   fontSize: 28,
   fontWeight: 'bold',
   textAlign: 'center',
   padding: 10,
 },
 textStyle: {
   fontSize: 16,
   textAlign: 'center',
   padding: 10,
 },

  touchableOpacityStyle: {
   // position: 'absolute',
   // width: 50,
   // height: 50,
   alignItems: 'center',
   justifyContent: 'center',
   // right: 30,
   // bottom: 30,
 },
 floatingButtonStyle: {
   resizeMode: 'contain',
   width: 50,
   height: 50,
   //backgroundColor:'black'
 },
  linearGradient: {
    
    justifyContent:'center',
    alignContent:'center',
    padding:5
  },

  image:{
    width:"30%",
    height:120,
   //  marginTop:10,
    alignSelf:'stretch',
    backgroundColor:'white',
    // flexDirection: 'row',
    flex:1
 
 
    // alignSelf:'center'
  },
});