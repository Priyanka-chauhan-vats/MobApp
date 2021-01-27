import React, { Component } from 'react';
import { Button, View, Image, Dimensions, StyleSheet, ImageBackground, AsyncStorage, FlatList } from 'react-native';
import {
  Container, Header, Title, Content, Card, CardItem, Thumbnail,
  Left, Right, Body, Footer, FooterTab, Form, Item, Input, Label, ActionSheet, Root,DatePicker,Picker
} from "native-base";
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import { Block, Checkbox, Text, theme } from "galio-framework";
import Textarea from 'react-native-textarea';
// import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputOutline from 'react-native-input-outline';
const { width, height } = Dimensions.get("screen");

const { width: WIDTH } = Dimensions.get('window');
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = [
  { label: 'Male', value: 0 },
  { label: 'Female', value: 1 }
];

export default class Searchothercomplaint extends Component {
  state = {
    choosenIndex: 0,
    filelist: []
  };


  render() {
    const { photo } = this.state
    let { filelist } = this.state
    return (

      <Block flex style={{backgroundColor:'white'}}>

        {/* <LinearGradient colors={['#6E7DDB','#f5efef']}> */}
        <View style={styles.block}>
          {/* <LinearGradient colors={['#feada6', '#f5efef']}> */}
            <ScrollView>
  
                                <Text style={{fontWeight:'bold',fontSize:15,marginTop:20}}>
                                Mobile Number
</Text>
<View style={styles.inputView} >
          <TextInput   
            style={styles.inputText}
            placeholder="Mobile Number" 
            placeholderTextColor="black"
            keyboardType="phone-pad"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <Text   style={{fontWeight:'bold',fontSize:18,textAlign:'center',marginTop:10,marginBottom:10}}>
              OR
</Text>
        <Text   style={{fontWeight:'bold',fontSize:15}}>
              Complaint Number
</Text>
<View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder=" Complaint Number" 
            placeholderTextColor="black"
            onChangeText={text => this.setState({email:text})}/>

        </View>
      
    
     </ScrollView>
</View>
        
        <TouchableOpacity style={styles.loginBtn} >
     <Text style={styles.loginText}>Search Complaints</Text>
        </TouchableOpacity>
 </Block>

    );
  }
}
const styles = StyleSheet.create({
  
  textInput2: {
    borderWidth: 2, backgroundColor: 'white', fontSize: 12, width: "93%", borderColor: 'black',
    textAlignVertical: 'top', borderRadius: 10,

  },
  
  textInput: {
    borderWidth: 1, backgroundColor: 'white', fontSize: 12, width: "100%", borderColor: 'black',height:50,
    textAlignVertical: 'top', borderRadius: 10,

  },
  text2: {
    width: '100%', fontSize: 16,fontWeight:'bold'
  },
  pickerStyle: {
    height:50,
    width: "50%",
    color: '#344953',
    borderWidth: 1,
    backgroundColor: 'white',

    borderColor: 'black',

    // justifyContent: 'center',  
  },
  container: {
    backgroundColor: 'white',
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#004CA1",
    borderRadius:5,
    height:50,
    alignItems:"center",
    alignSelf:'center',
    justifyContent:"center",
    marginTop:60,
    
  },
  loginText:{
    color:"white"
  },
  buttonphoto: {
    marginTop: -30,
    width: 100,
    marginLeft: 110,
    alignContent: 'center'
  },

  buttontext: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#ffffff',
  },
  viewStyleForLine: {
    borderBottomColor: "#0075C4",

    alignSelf: 'stretch',
    width: "100%"
  },
  block: {
    backgroundColor: 'white',
    // height:630,
    justifyContent: 'center',

    width: '100%',
    // borderRadius:30,
    paddingHorizontal: 15,
    //  marginHorizontal:15,
    //  marginTop:10
  },
  // textArea: {
  //   // height: 40,
  //   // justifyContent: "flex-start"
  // },
  inputView:{
    width:"100%",
    // backgroundColor:"#465881",
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
    height:50,
    marginBottom:3,
    justifyContent:"center",
    padding:5,
    textAlignVertical:'top'
  },
  inputText:{
    height:50,
    color:"black",
    textAlignVertical:'top',
    fontSize:14

  },
  textAreaContainer: {
    marginBottom:5,

    borderColor:"black",
    width:"100%",
    borderRadius:5,
    borderWidth: 1,
    padding: 5,
    marginTop:0,
    textAlignVertical:'top',
    backgroundColor:'white',
    // justifyContent:"center",
    // height:80,
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    // height: 120,
    fontSize: 14,
    color: 'black',
  },
  mb: {
    marginBottom: 15,
  },
  button: {
    width: 170,
    alignItems:'center',
    marginVertical: 20,
    // borderRadius: 20,
    paddingVertical: 12,
    backgroundColor: 'rgb(30,144,255)',
    color: '#2E3292',
    marginLeft:5,
    alignSelf: 'center',
    marginTop: 20
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
    // borderRadius: 20,
    // alignItems: 'center',
    padding: 10,
    // width: 350,
    // height:1200,
    // top: 20,
    fontSize: 15,
    backgroundColor: 'rgb(255,255,255)'
  },

});
