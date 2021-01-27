import React from 'react';
import { StyleSheet, Text, View, TextInput,Image,ActivityIndicator,AsyncStorage,TouchableOpacity } from 'react-native';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';

import { ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
const form1sub = baseurl+'GrievanceAuthorityRegistration/form1';
import { baseurl } from '../screens/baseurl';

export default class SignupAuthrity extends React.Component {
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

        // this.props.navigation.navigate('Authsignupotp',{ JSON_ListView_Clicked_Item: this.state.phoneNumber })
        this.props.navigation.navigate("mystuff");

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
        <ScrollView>

      <View style={styles.container}>
        {/* <Text style={styles.logo}>DDA311</Text> */}
              <Image     style={{width:170,height:170,marginBottom:30,marginTop:10}} source={require("../Images/Logo2.jpeg")} />

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Officer Name" 
            placeholderTextColor="black"
            onChange={this.handleNameChange}

            // onChangeText={text => this.setState({email:text})}
            />
        </View>
        {/* <View style={styles.inputView} >
          <TextInput  
            
            style={styles.inputText}
            placeholder="Last Name" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View> */}
        <View style={styles.inputView} >
          <TextInput  
            
            style={styles.inputText}
            placeholder="Mobile Number" 
            placeholderTextColor="black"
            onChange={this.handlePhoneChange}

            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            
            style={styles.inputText}
            placeholder="Email Address" 
            placeholderTextColor="black"
            onChange={this.handleEmailChange} 
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="black"
            onChange={this.handlePasswordChange} 
            />
        </View>
        {/* <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="black"
            onChangeText={text => this.setState({password:text})}/>
        </View> */}
        {/* <View style={styles.inputView} > */}
        <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Address"
      placeholderTextColor="black"
      // numberOfLines={40}
      multiline={true}
      onChange={this.handleAddressChange} 

    />
  {/* </View> */}
        </View>
        

        <TouchableOpacity style={styles.loginBtn}   onPress={this.handleSubmit}>
          <Text style={styles.loginText}>Sign UP</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.loginBtn}  onPress={()=>this.props.navigation.navigate('mystuff') }>
      <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity> */}
      </View>
      <View style={{  justifyContent: 'center',marginTop:-10 }}>
            <ActivityIndicator animating={this.state.showLoader} size="large" color="#0C5634"  />
          </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#004CA1",
    marginBottom:40
  },
  textArea: {
    height: 50,
    // justifyContent: "flex-start"
  },
  inputView:{
    width:"90%",
    // backgroundColor:"#465881",
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
    height:50,
    marginBottom:10,
    justifyContent:"center",
    padding:20
  },
  textAreaContainer: {
    marginBottom:3,

    borderColor:"black",
    width:"90%",
    borderRadius:5,
    borderWidth: 1,
    padding: 5,
    marginTop:0,
    textAlignVertical:'top',
    backgroundColor:'white',
    // justifyContent:"center",
    // height:80,
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"red",
    fontSize:11
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
    color:"red"
  }
});