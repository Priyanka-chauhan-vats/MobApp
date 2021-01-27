import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image,AsyncStorage,ActivityIndicator } from 'react-native';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import InputOutline from 'react-native-input-outline';
import { Block, Checkbox,  theme } from "galio-framework";
import OutlineInput from 'react-native-outline-input';
import axios from 'axios';
import { baseurl } from '../screens/baseurl';
import { Container, Content } from 'native-base';
const otpGenUrl = baseurl +"GrievanceAuthoritygenerateResLoginOtp";


export default class loginAuthrity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        status: this.props.navigation.state.params,
        showLoader:false,


    };
    // console.log(this.props); 
    console.log("complaint value")

    console.log(this.props.navigation.state.params);
    this.loginstatus = false;
  }

state = {
  phoneNumber: '',
  // showLoader: false,
  // showSpinner: true
};
showLoader = () => { 
  this.setState({ showLoader: true });
 };
hideLoader = () => {
   this.setState({ showLoader: false });
   };
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


        this.props.navigation.navigate('Authloginotp', [this.state.phoneNumber,this.state.status ]);
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

  render(){
    return (
      <Container style={styles.container}>
        <Content>

    
        {/* <Text style={styles.logo}>DDA311</Text> */}
              <Image     style={{width:170,height:170,marginBottom:30,marginTop:20,
                justifyContent:'center',alignSelf:'center'}} source={require("../Images/Logo2.jpeg")} />


        {/* <View style={styles.inputView} > */}
        {this.state.status===1 ?
        <View  style={{  padding: 6,marginTop:20}}>
            
            {/* <OutlineInput
      style={{fontSize:12}}
  label="STF OFFICE /Nodal/Grid Officer User Id"
  value={this.state.phoneNumber}
  onChange={this.handlePhoneNoChange}

        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="black"
        passiveLabelColor="black"
        passiveValueColor="black"
      /> */}
              <View style={styles.inputView} >

      <TextInput
                  style={styles.input}
                  placeholder={"Enter  Mobile Number"}
                  onChange={this.handlePhoneNoChange}
                >
                </TextInput>
                </View>
      </View>
      :null}
         {this.state.status===2 ?
       <View  style={{  padding: 6,marginTop:20}}>
           <TextInput
                  style={styles.input}
                  placeholder={"Enter  Mobile Number"}
                  onChange={this.handlePhoneNoChange}
                >
                </TextInput> 
            {/* <OutlineInput
      style={{fontSize:12}}
  label="Officer User Id"
  value="Ajay123@gmail.com"
  
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="black"
        passiveLabelColor="black"
        passiveValueColor="black"
      /> */}
      </View>
      :null}
      {/* <Block  style={{  padding: 6,marginTop:30}}>
            
            <OutlineInput
      style={{fontSize:12}}
  label="Password"
  value="Raman"
  secureTextEntry={true}
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="black"
        passiveLabelColor="black"
        passiveValueColor="black"
      />
      </Block> */}
       
        {/* <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity> */}
        {this.state.status===1 ?
        <TouchableOpacity style={styles.loginBtn}  onPress={this.handleSubmit}>
      <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        :null}
        {this.state.status===2 ?
        <TouchableOpacity style={styles.loginBtn} onPress={this.handleSubmit} 
       >
      <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        :null}
        <TouchableOpacity    style={styles. loginText2}  >
          <Text  style={{color:"grey"}}>Don't have an Account? </Text>
          <Text style={styles. loginText2}  onPress={()=>this.props.navigation.navigate('signupauth') }>Signup</Text>
        </TouchableOpacity>
        <View style={{  justifyContent: 'center',marginTop:-10 }}>
            <ActivityIndicator animating={this.state.showLoader} size="large" color="#0C5634"  />
          </View>
         {/* <StickyHeaderFooterScrollView
      renderStickyHeader={() => (
        <View >
          <Text>{`I'm a sticky header`}</Text>
        </View>
      )}
      renderStickyFooter={() => (
        <View >
          <Text>{`I'm a sticky footer`}</Text>
        </View>
      )}
    >
      <View style={{ height: 20, backgroundColor: '#eee' }}>
        <Text>View made scrollable</Text>
      </View>
    </StickyHeaderFooterScrollView> */}
   
   </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // height:630,
    justifyContent: 'center',
// alignItems:'center',
    width: '100%',
    height:'100%',
    // borderRadius:30,
    paddingHorizontal: 15,
    marginTop:100,
   
    alignSelf:'center'
    //  marginHorizontal:15,
    //  marginTop:10
  },
  inputView:{
    width:"100%",
    // backgroundColor:"#465881",
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
    height:50,
    marginBottom:10,
    justifyContent:"center",
    padding:20
  },
  forgot:{
    color:"#004CA1",
    fontSize:11,
    alignSelf:'center',
marginTop:20,
marginBottom:-10
  },
  input: {
    // width: WIDTH - 70,6w6gva`klsas
    height: 50,
    borderRadius: 5,
    fontSize: 14,
    paddingLeft: 5,
    marginLeft: 10,
    // borderColor:'black',
    // borderRadius:5
    // backgroundColor: 'black',


  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#004CA1",
    borderRadius:25,
    height:50,
    alignItems:"center",
    alignSelf:'center',
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  loginText2:{
    color:"#004CA1",
    fontWeight:'bold',
    alignSelf:'center',
    textAlign:'center',
    alignItems:'center',
    justifyContent:"center",
    flexDirection:'row'
  }
});
