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
const paper2 =require("../Images/images2.jpg");
const paper3 =require("../Images/images3.jpg");
import axios from 'axios';
import { baseurl } from '../screens/baseurl';
const grievance = baseurl +'all_grivencelistotherthenstf'; 
const grievance2 = baseurl +'all_grivencereopenotherthenstf'; 
// const car = require("../Images/car.jpg");
// const wood = require("../Images/wood.jpg");
// const iron = require("../Images/iron.jpg");
export default class  userviewacomplaintotherthenstf extends Component {
clickHandler = () => {
      //function to handle click on floating Action Button
      alert('Floating Button Clicked');
    };
    constructor(props) {
      super(props);
      this.state = {
      choosenIndex: 0,
      filelist: [],
      filelist2: []

   
  };
   
    this.PostAPI();
  }
  PostAPI = () => {
    // const datad = { user_id: this.state.user }
    axios.get(grievance)
      .then(Response => {
        console.log('DATA got');
        console.log(Response.data)
        this.setState({
          filelist : Response.data
        })
        
       //  console.log(Response.data);
        //console.log(this.state.rows);
        console.log('G');
      this.postapi2();
      })
      .catch(err => {
        console.log('Error is ' + err);
      })
  }
  
  postapi2=()=>{
    axios.get(grievance2)
    .then(Response => {
      console.log('DATA got');
      console.log(Response.data)
      this.setState({
        filelist2 : Response.data
      })
      
     
    })
    .catch(err => {
      console.log('Error is ' + err);
    })
  }
  //Screen2 Component
  render() {
    const details=this.state.filelist
    const details2=this.state.filelist2

    console.log("render data")
    console.log(details)
    console.log(details2)

   
    return (
      <  Block   style={styles.linearGradient}>
      
     
      <ScrollView>
      <Content>
     
      <View style={{borderLeftWidth:1,borderRightWidth:1,}}  >
            {
               details.map((item, index) => (
                 <View   key = {item._id}
                 style = {styles.container}>

                
                 <TouchableOpacity onPress={() => this.props.navigation.navigate("userotherthensSTFcomplaintdetails",item._id)}>

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
    className="text-muted">{item._id}
    </Text>
    </View>
    {/* <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Name
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">Devender(9214044504)
    </Text>
    </View> */}
<View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Category:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">{item.complaintCategory}
    </Text>
    </View>
    <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:1}} 
    >Type of Compalint:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">{item.complaintype}
    </Text>
    </View>
  
    
    <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Status:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">{item.status}
    </Text>
    </View>
    {/* <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Tag:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">Action not Taken
    </Text>
    </View> */}
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
 </View>
               ))
            }
         </View> 
         
      <View style={{borderLeftWidth:1,borderRightWidth:1,}}  >
            {
               details2.map((item, index) => (
                 <View   key = {item._id}
                 style = {styles.container}>

                
                 <TouchableOpacity onPress={() => this.props.navigation.navigate("userotherthensSTFcomplaintdetails",item._id)}>

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
    className="text-muted">{item._id}
    </Text>
    </View>
    {/* <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Name
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">Devender(9214044504)
    </Text>
    </View> */}
<View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Category:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">{item.complaintCategory}
    </Text>
    </View>
    <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:1}} 
    >Type of Compalint:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">{item.complaintype}
    </Text>
    </View>
  
    
    <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Status:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">{item.status}
    </Text>
    </View>
    {/* <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Tag:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">Action not Taken
    </Text>
    </View> */}
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
 </View>
               ))
            }
         </View>
    </Content>
    
      </ScrollView>
    </Block>
    );
  }
}
 
const styles = StyleSheet.create({

  mb: {
    
   marginBottom:5
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