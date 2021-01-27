import React, { Component } from 'react';
import { Button, View, Image, Dimensions, StyleSheet, ImageBackground, AsyncStorage,ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Container, Header, Title, Content, Icon, Card, CardItem, Thumbnail,
  Left, Right, Body, Footer, FooterTab, Form, Item, Input, Label
} from "native-base";
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import axios from 'axios';
import { baseurl } from '../screens/baseurl';

import { Block, Checkbox, Text, theme } from "galio-framework";
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get("screen");

const { width: WIDTH } = Dimensions.get('window');
const otpGenUrl = baseurl +"GrievancegenerateResLoginOtp";

export default class login extends React.Component {
  state = {
    phoneNumber: '',
    showLoader: false,
    showSpinner: true
  };
  constructor(props)
  {
    super(props);
    this.loginstatus = false;
    // this.checkloginstatus();
  }
//   checkloginstatus = async SK => {
        
//     //await AsyncStorage.setItem('USER_KEY', this.state.name)
//     const UserName = await AsyncStorage.getItem('USER_KEY')
//     if (UserName != 'Logout') {
//         console.log('Login Ho rkha hai'+ UserName);
//         const { navigation } = this.props;
//         this.setState({
//             showSpinner: true
//         });
//         navigation.navigate("userdeshboard")
//     }
//     else{
//         this.setState({
//             showSpinner: false
//         });
//     } 
// }
  showLoader = () => { this.setState({ showLoader: true }); };
  hideLoader = () => { this.setState({ showLoader: false }); };
  handlePhoneNoChange = event => {
    this.setState({
      phoneNumber: event.nativeEvent.text
    })
  }
  UserNameStr = async SK => {
    try {
        await AsyncStorage.setItem('USER_KEY', this.state.phoneNumber)
        const UserName = await AsyncStorage.getItem('USER_KEY')
        console.log('Value is ' + ' ' + UserName);
    } catch (e) {
        alert('Failed to fetch User.')
    }
}
  handleSubmit = event => {
    const SubmitDAta = {
      phoneNumber: this.state.phoneNumber
    }
    console.log(SubmitDAta);
    console.log('hit')
    this.showLoader();

    // console.log(baseurl + 'generateResLoginOtp/', SubmitDAta);
    // axios.post(baseurl + 'generateResLoginOtp/', SubmitDAta)
    // axios.post(otpGenUrl , SubmitDAta)
    if(this.state.phoneNumber.length > 1)
    {

    axios.post(otpGenUrl,SubmitDAta)
      .then(res => {
        console.log(res.data)
        if (res.data.statusCode == 400) {
          this.hideLoader();

          alert(" Your Number is not Registerd...");
        }
        else {
          //  AsyncStorage.setItem('user_id')
          this.hideLoader();
alert("otp-> "+res.data.login_otp)
          AsyncStorage.setItem('userId', res.data._id.toString());
          this.UserNameStr();


          this.props.navigation.navigate('userloginotp', { JSON_ListView_Clicked_Item: this.state.phoneNumber });
        }
        //console.log(res);
        console.log(res.data.statusCode);
      })
      .catch(function (error) {
        console.log(error);
      });
    //event.preventDefault();
  }
  else{
    this.hideLoader();

    alert("write the  Valid PhoneNumber....")
  }
}
 
  render() {

    return (
      <LinearGradient colors={['#feada6', '#f5efef']}
      >

        <View style={{ height: '100%', width: '100%' }}>
          <Image source={require("../Images/logo.png")} style={{
            marginTop: 70,
            width: 180, height: 180, justifyContent: 'center', alignSelf: 'center'
          }} />
          {/* <Text style={{marginTop:70,paddingHorizontal:35,fontSize:28,fontWeight:'600',marginBottom:-60}}>Login page</Text>  */}

          <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:70 }}>
            {/* <Image source={require("../Images/Logo2.png")} /> */}

            <View style={styles.block}>

              <Block width={width * 0.2} style={{ marginBottom: 20 }}>


                <TextInput
                  style={styles.input}
                  placeholder={"Enter  Mobile Number"}
                  onChange={this.handlePhoneNoChange}
                >
                </TextInput>


              </Block>
              {/* <Block width={width * 0.2} style={{ marginBottom: 20, marginTop: 20 }}>


                <TextInput
                  style={styles.input}
                  placeholder={"Password"}
                >
                </TextInput>


              </Block> */}

              <Block middle style={{ marginTop: 0 }}>


                <TouchableOpacity onPress={this.handleSubmit} >
                  <LinearGradient
                    colors={['#B7F8DB', '#50A7C2']}
                    style={{ padding: 7, alignItems: 'center', borderRadius: 10, width: width * 0.5, height: 40 }}>
                    <Text bold size={16}> Get OTP </Text>

                  </LinearGradient>
                </TouchableOpacity>


              </Block>
            </View>
            <View style={styles.text}>
              <Text style={{ color: '	rgb(0,0,139)' }} >Don't have an account yet ? </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('signupppp')} >
                <Text style={styles.signtext}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View style={{  justifyContent: 'center',marginTop:-10 }}>
            <ActivityIndicator animating={this.state.showLoader} size="large" color="#0C5634"  />
          </View>
          </View>
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
    marginTop: 70,
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
    marginVertical: 25

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
  art: {

    height: '100%',
    width: '100%',
  },
  key: {
    flex: 1,
    justifyContent: 'center'
  },
  block: {
    backgroundColor: '#fff',
    // height:250,
    width: '89%',
    borderRadius: 30,
    marginTop: 0,
    paddingVertical: 20
    // padding:20
  },
  input: {
    width: WIDTH - 70,
    height: 50,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 50,
    marginLeft: 10,
    backgroundColor: '#B7F8DB',


  },
  icon: {

    position: 'absolute',
    top: 8,
    height: 32,
    width: 32,
    marginLeft: 18

  },


});
