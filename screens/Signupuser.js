import React, { Component } from 'react';
import { Button, View, Image, Dimensions, StyleSheet, ImageBackground, AsyncStorage,ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Container, Header, Title, Content, Icon, Card, CardItem, Thumbnail,
  Left, Right,Body, Footer, FooterTab, Form, Item, Input, Label  
} from "native-base";
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';


import { Block, Checkbox, Text, theme } from "galio-framework";
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get("screen");
const { width: WIDTH } = Dimensions.get('window');

import axios from 'axios';
const form1sub = baseurl+'GrievanceResourceRegistration/form1';
import { baseurl } from '../screens/baseurl';

export default class Signup extends React.Component {
  state = {
    Name: '',
    email: '',
    phoneNumber: '',
    address:'',
    Password:'',
    showLoader:false


  };
  UserNameStr = async SK => {
    try {
        await AsyncStorage.setItem('USER_KEY', this.state.phoneNumber)
        const UserName = await AsyncStorage.getItem('USER_KEY')
        console.log('Value is ' + ' ' + UserName);
    } catch (e) {
        alert('Failed to fetch User.')
    }
}
  showLoader = () => { this.setState({ showLoader: true }); };
  hideLoader = () => { this.setState({ showLoader: false }); };
  handleNameChange = event => {
    this.setState({
      Name: event.nativeEvent.text
    });
  }
  handleEmailChange = event => {
    this.setState({
    email: event.nativeEvent.text
    });
  }
  handlePhoneChange = event => {
    this.setState({
      phoneNumber: event.nativeEvent.text
    });
  }
  handlePasswordChange = event => {
    this.setState({
    password: event.nativeEvent.text
    });
  }
  handleAddressChange = event => {
    this.setState({
    address: event.nativeEvent.text
    });
  }
  handleSubmit = async event => {
    const form1Obj = {
      Name: this.state.Name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      address:this.state.address,
      // password:this.state.Password
    }

    console.log('hit')
    this.showLoader();
    console.log(form1sub, form1Obj);
    if(this.state.phoneNumber.length > 0 && this.state.Name.length > 0 && this.state.email.length > 0)
    {
    axios.post(form1sub, form1Obj)
      .then(res => {
        console.log('aaya kya');
        console.log(res.data);
        ///// console.log('api value' + res.data);
        if (res.data.statusCode === 400) {
          alert("User is already Registered");
          this.hideLoader();

        }
        else if (res.status === 200) {

          // AsyncStorage.setItem('userId', res.data._id.toString());
          // AsyncStorage.setItem("Name", res.data.Name.toString());
          // AsyncStorage.setItem("email", res.data.email.toString());
          // AsyncStorage.setItem("phoneNumber", res.data.phoneNumber.toString());
          // console.log('userId' + res.data._id);
          // console.log('name' + res.data.Name);

          this.hideLoader();
          this.UserNameStr();
          // alert("otp-> "+res.data.Otp)

          // console.log("Successfully Registered")
          alert("successfully Register");
          // onPress={() => this.props.navigation.navigate('usersignupotp')}
                  //  this.props.navigation.navigate('usersignupotp')

        // this.props.navigation.navigate('usersignupotp',{ JSON_ListView_Clicked_Item: this.state.phoneNumber })
        this.props.navigation.navigate("userdeshboard");
        userdeshboard
        }

        // else {
        //   alert("errorrr");
        // }
      }
      )
      .catch(err => {
        this.hideLoader();

      console.log('Error is ' + err);
    })

    }
      else{
        this.hideLoader();
        alert("All field are Mandatory..")
      }
  }
  render(){
    return (
      <LinearGradient colors={['#feada6', '#f5efef']}
      >
                
     <View style={{height:'100%', width:'100%'}}>
     
     <Image source={require("../Images/logo.png")} style={{marginTop:4,
        width:170,height:170,justifyContent:'center',alignSelf:'center'}} />  
        
           {/* <Text style={{marginTop:10,paddingHorizontal:35,fontSize:28,fontWeight:'600',marginBottom:0}}>SignUp page</Text>  */}
<ScrollView>
    <View style={{justifyContent: 'center',alignItems:'center'}}>
    {/* <Image source={require("../Images/Logo2.png")} /> */}
        <View style={styles.block}>

        
        <Block width={width * 0.2} style={{ marginBottom: 5, marginTop: 0  }}>
            
            
            <TextInput
            style={styles.input}
            placeholder={"Name"} 
            onChange={this.handleNameChange}
           >
            </TextInput>
           
             
         </Block>
         <Block width={width * 0.2} style={{ marginBottom: 5, marginTop: 5  }}>
            
            
            <TextInput
            style={styles.input}
            placeholder={"Mobile Number"} 
            onChange={this.handlePhoneChange}
           >
            </TextInput>
           
             
         </Block>
         <Block width={width * 0.2} style={{ marginBottom: 5, marginTop: 5  }}>
            
            
            <TextInput
            style={styles.input}
            placeholder={"Email ID"}
            onChange={this.handleEmailChange} 
           >
            </TextInput>
           
             
         </Block>
         <Block width={width * 0.2} style={{ marginBottom: 5, marginTop: 5  }}>
            
            
            <TextInput secureTextEntry={true}
            style={styles.input}
            placeholder={"Password"}
            onChange={this.handlePasswordChange} 
 
           >
            </TextInput>
           
             
         </Block>
         <Block width={width * 0.2} style={{ marginBottom: 5, marginTop: 5  }}>
            
            
            <TextInput secureTextEntry={true}
            style={styles.input}
            placeholder={"Confirm Password"}
            // onChange={this.handlePasswordChange} 
 
           >
            </TextInput>
           
             
         </Block>
         <Block width={width * 0.2} style={{ marginBottom: 10, marginTop: 5  }}>
            
            
            <TextInput
            style={styles.Addressinput}
            placeholder={"Address"} 
            onChange={this.handleAddressChange} 

           >
            </TextInput>
           
             
         </Block>

         <Block middle style={{marginTop:10}}>


         <TouchableOpacity onPress={this.handleSubmit} >
            <LinearGradient
                colors={['#B7F8DB', '#50A7C2']}
            style={{ padding: 7, alignItems: 'center', borderRadius: 10, width: width * 0.5, height: 40 }}>
            <Text bold size={16}> Submit </Text>
                            
            </LinearGradient>
            </TouchableOpacity>
        
               
            </Block>
        </View>
        <View style={styles.text}>
               <Text style={{ color: '	rgb(0,0,139)' }} >If You have already an account yet ? </Text>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Loginnnnn')} >
                <Text style={styles.signtext}>Login</Text>
               </TouchableOpacity>
             </View>
             <View style={{  justifyContent: 'center',marginTop:-10 }}>
            <ActivityIndicator animating={this.state.showLoader} size="large" color="#0C5634"  />
          </View>
    </View>
    </ScrollView>
</View>
</LinearGradient>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00008B"
  },
  registerContainer: {
    width: width * 0.9,
    height: height * 0.87,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,

    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  viewStyleForLine: {
    borderBottomColor: "#0075C4",

    alignSelf: 'stretch',
    width: "100%"
  },
  mb: {
    marginBottom: 15,
  },
  button: {
    width: 200,
    marginVertical: 50,
    borderRadius: 20,
    paddingVertical: 12,
    backgroundColor: '#2E3292',
    alignSelf: 'center'
  },
  bgcont: {
    position: 'absolute',
    width: 180,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:70,
    right: 0,
    bottom: 0,
  },
  buttontext: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#ffffff',
  },
  text: {
    justifyContent: 'center',
    color: '	rgb(0,0,139)',
    // alignSelf:'center',
    marginRight: 15,
    flexDirection: 'row',
        marginVertical: 5
        
  },
  signtext: {
    fontWeight: '700',
    fontSize: 16,
    color: '	rgb(0,0,139)'
  },
  icons: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 32,
    height: 32,

  },
  bgcard: {
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    width: 350,
    height: 255,
    top: 60,
    backgroundColor: 'rgb(255,255,255)'
  },
  art:{
     
    height:'100%',
    width:'100%',
  },
  key:{
      flex:1,
      justifyContent:'center'
  },
  block:{
    backgroundColor:'#fff',
    // height:440,
    width:'89%',
    borderRadius:30,
    marginTop:5,
    paddingVertical:20
  },
  input:{
      width: WIDTH -70,
      height:50,
      borderRadius:45,
      fontSize:16,
      paddingLeft:50,
      marginLeft:10,       
      backgroundColor:'#B7F8DB',
  
  
  },
  Addressinput:{
    width: WIDTH -70,
    height:80,
    borderRadius:45,
    fontSize:16,
    paddingLeft:50,
    marginLeft:10,       
    backgroundColor:'#B7F8DB',


},
  icon:{

      position:'absolute',
      top:8,
      height:32,
      width:32,
      marginLeft:18

  },


});
