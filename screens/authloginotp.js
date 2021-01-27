import React from 'react';
import { StyleSheet, Text, View, Button ,Image,ActivityIndicator} from 'react-native';
import OTPInput from 'react-native-otp';
import axios from 'axios';
import { baseurl } from '../screens/baseurl';
import {Form, Item, Input} from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';


const VerifyResRegOtp = baseurl + 'GrievanceAuthorityVerifyResLoginOTP'

export default class Authloginotp extends React.Component {
  state = {
    phoneNumber: '',
    regOtp: '',
    showLoader:false,
status:this.props.navigation.state.params[1]

  };
  showLoader = () => { this.setState({ showLoader: true }); };
  hideLoader = () => { this.setState({ showLoader: false }); };
  handleOTPChange = e => {
    this.setState({
      regOtp: e.nativeEvent.text
    })
  }
  handleSubmit = e => {
    // alert('helo')
    const verifyObj = {
      phoneNumber: this.props.navigation.state.params[0],
      otp: this.state.regOtp
    }
    console.log(verifyObj);
    this.showLoader();
    axios.post(VerifyResRegOtp,verifyObj)
      .then(response => {
        console.log('aaya kya otp');
        console.log( response.data);
        if (response.data.statusCode  === 200) {
          alert("otp verified successful")
        this.hideLoader();
        if(this.state.status === 1)
        {
          this.props.navigation.navigate('mystuff');
        }
         else if(this.state.status === 2)
         {
          this.props.navigation.navigate('mystuffotherthenstf');
 
         }
         else
         alert("something wrong")
        }
        else if (response.data.statusCode === 400) {
          alert("Wrong OTP");
        }
        else {
          console.log("Error Occured")
        }
      })
  }
  

  // handleOTPChange = (otp) => {
  //   this.setState({
  //      otp: e.nativeEvent.text })
  // }

  clearOTP = () => {
    this.setState({ otp: undefined })
  }

  // autoFill = () => {
  //   this.setState({ 
  //     otp: '221198'
  //  })
  // }

  render() {
    return (
      <View style={styles.container}>
                      <Image     style={{width:170,height:170,marginBottom:30}} source={require("../Images/Logo2.jpeg")} />
{/* 
        <Text style={styles.text}>Enter OTP password</Text>

        <OTPInput
          value={this.state.otp}
          onChange={this.handleOTPChange}
          tintColor="#FB6C6A"
          offTintColor="#BBBCBE"
          otpLength={6}
        />
<View  style={{marginBottom:30,marginTop:10}}>
        <Button   onPress={this.clearOTP} title="Clear" />
        </View>
        <Button onPress={this.handleSubmit} title="submit" /> */}
        <Form style={{ padding:5, width: 300,marginTop:0 }}>
                    <Text>{'\n'}</Text>
                  <Item  rounded  style={{paddingHorizontal:10}}>
                      
                      <Text  style={{borderColor:'#FFF',fontSize: 16,marginRight:5,padding:10}} > 
                       {this.props.navigation.state.params} </Text>
                     </Item>
                    <Item  rounded  style={{paddingHorizontal:10,marginTop:20}}>
                    
                      <Input placeholder="Enter OTP"   	keyboardType='numeric'      onChange={this.handleOTPChange}
                      style={{borderColor:'#FFF',fontSize: 16,marginRight:10}}   />
                    </Item>
                  </Form>
                      {/* <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Drowerssssssssss')}> */}
                  <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                     <Text style={styles.buttontext}>
                       Login
                   </Text>
                    </TouchableOpacity>
                    <View style={{  justifyContent: 'center',marginTop:-10 }}>
            <ActivityIndicator animating={this.state.showLoader} size="large" color="#0C5634"  />
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    marginVertical: 100,
    borderRadius: 20,
    paddingVertical: 12,
    justifyContent:'center',
    alignSelf:'center',
    alignItems: 'center',

    backgroundColor: 'rgb(0,0,139)',
    // marginLeft: 30,
marginTop:50
  },
  buttontext: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#ffffff',
  },
 
  text: {
    marginBottom: 15
  }
});