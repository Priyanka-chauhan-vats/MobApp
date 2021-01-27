import React, { Component } from 'react';
import { Button, View, Image, Dimensions, StyleSheet, ImageBackground, AsyncStorage, FlatList,SafeAreaView} from 'react-native';
import {
  Container, Header, Title, Content, Card, CardItem, Thumbnail,
  Left, Right, Body, Footer, FooterTab, Form, Item, Input, Label, ActionSheet, Root,Picker 
} from "native-base";
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';

import { Block, Checkbox, Text, theme } from "galio-framework";
import InputOutline from 'react-native-input-outline';
import OutlineInput from 'react-native-outline-input';
import Textarea from 'react-native-textarea';
// import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get("screen");

const { width: WIDTH } = Dimensions.get('window');
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import axios from 'axios';
import { baseurl } from '../screens/baseurl';
const grievance = baseurl +'grievancedetails'; 
export default class apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
    choosenIndex: 0,
   
    filelist: [],
    status: this.props.navigation.state.params,
};
 
  this.PostAPI();
}
state={
  name:'',
  mobile:'',
  email:'',
  address:'',
  gender:'',
  ComplaintDescrption:'',
      JurisdictionOrgComplaint:'',
      ConcernedNodalOfficer:'',
}

PostAPI = () => {
  const datad = { _id: this.state.status }
  axios.post(grievance, datad)
  .then(Response => {
      console.log('DATA got');
      console.log(Response.data)
      this.setState({
        filelist:Response.data.data,
       
      })
  
      console.log('details');
      console.log(this.state.filelist)
      // console.log(this.state.name)
     //  this.render()
    })
    .catch(err => {
      console.log('Error is ' + err);
    })
}


   
handleOTPChange = e => {
  this.setState({
    name:name,
  })
}  
  render() {
    const { photo } = this.state
    const data=this.state.filelist
    console.log(data)
    return (
     
      <Block flex >

      {/* <LinearGradient colors={['#6E7DDB', '#f5efef']}> */}
        <View style={styles.block}>
          <ScrollView>
            <View >
            <View  >
 {
              data.map((item, index) => (
                <View>
                <Block  style={{  padding: 5,marginTop:10}}>
            
                <OutlineInput
                style={{fontSize:12}}
                  value={item.NameofComplainant}
                  // onChangeText={this.handleOTPChange}
                          label="Name of Complainant"
                  activeValueColor="black"
                  activeBorderColor="balck"
                  activeLabelColor="black"
                  passiveBorderColor="blue"
                  passiveLabelColor="blue"
                  passiveValueColor="blue"
                />
 </Block>
                      {/* <Block  style={{  padding:8}}>
            
            <OutlineInput
            style={{fontSize:12}}
              value={item.MobileNumber}
          
              label="MobileNumber"
              activeValueColor="black"
              activeBorderColor="balck"
              activeLabelColor="black"
              passiveBorderColor="blue"
              passiveLabelColor="blue"
              passiveValueColor="blue"
            />
      
                
                  </Block> */}
                  <Block  style={{  padding: 5,marginTop:10}}>
            
            <OutlineInput
            style={{fontSize:12}}
              value={item.EmailAddress}
          
              label="Email Id"
              activeValueColor="black"
              activeBorderColor="balck"
              activeLabelColor="black"
              passiveBorderColor="blue"
              passiveLabelColor="blue"
              passiveValueColor="blue"
            />
      
                   
                  </Block>
                
                  <Block  style={{  padding: 5,marginTop:10}}>
            
            <OutlineInput
      style={{fontSize:12}}
        value={item.Address}
    
        label="Address"
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="blue"
        passiveLabelColor="blue"
        passiveValueColor="blue"
      />
             
            </Block>
            <Block  style={{  padding: 5,marginTop:10}}>
            
            <OutlineInput
      style={{fontSize:12}}
        value={item.ComplaintDescrption}
    
        label="Compalint Description"
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="blue"
        passiveLabelColor="blue"
        passiveValueColor="blue"
      />
             
            
            </Block>
            <Block  style={{  padding: 5,marginTop:10}}>
            
            <OutlineInput
      style={{fontSize:12}}
        value={item.gender}
    
        label="Gender"
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="blue"
        passiveLabelColor="blue"
        passiveValueColor="blue"
      />
             
            
            </Block>
            <Block  style={{  padding: 5,marginTop:10}}>
            
            <OutlineInput
      style={{fontSize:12}}
        value={item.JurisdictionOrgComplaint}
    
        label="Jurisdiction of Organization About the Complaint"
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="blue"
        passiveLabelColor="blue"
        passiveValueColor="blue"
      />
             
            
            </Block>
            <Block  style={{  padding: 5,marginTop:10}}>
            
            <OutlineInput
      style={{fontSize:12}}
        value={item.ConcernedNodalOfficer}    
        label="Concerned Nodal Officer"
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="blue"
        passiveLabelColor="blue"
        passiveValueColor="blue"
      />
             
            
            </Block>
                      </View>
               ))}
            
              </View>
           
           
           
           
            
           
            
            
           
            {/* <Block  style={{  padding: 6}}>
            
            <OutlineInput
      style={{fontSize:12}}
        value="12-10-2020"
    
        label="Request Date"
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="blue"
        passiveLabelColor="blue"
        passiveValueColor="blue"
      />
             
            
            </Block> */}
      
                     
           
          
            {/* <View  style={{marginTop:20}}>

<Root>
<View  flexDirection='row'>
  <FlatList
    data={filelist}
    renderItem={this.renderItem}
      keyExtractor={(item, index) => index}
    extraData={this.state}
  />

</View>
<View flexDirection="row">
<TouchableOpacity style={styles.button} onPress={this.onclick}>
   <Text style={styles.buttontext}>choose Photo</Text>
</TouchableOpacity>

</View>
</Root>

</View> */}
            </View>
                   </ScrollView>
        </View>
      {/* </LinearGradient> */}

    </Block>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1, backgroundColor: 'white', fontSize: 15, width: "50%", borderColor: '#356FE0',height:40,
 borderRadius: 10,paddingHorizontal:20

  },
  
  // container: {
  //   // backgroundColor: "#00008B",
  //   backgroundColor: "#fffff"

  // },
  textInput2: {
    borderWidth: 1, backgroundColor: 'white', fontSize: 12, width: "50%", borderColor: '#356FE0',
    textAlignVertical: 'top', borderRadius: 10,

  },
  text2: {
    width: '50%', fontSize: 16,fontWeight:'bold'
  },
  button: {
    width: 100,
    // borderRadius: 20,
    backgroundColor: "#004CA1",
    // marginLeft: 30,
    marginTop:50
    

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
    // backgroundColor: '#E8E8E8',
    // height:630,
    justifyContent: 'center',

    width: '100%',
    // borderRadius:30,
    paddingHorizontal: 15,
    //  marginHorizontal:15,
    //  marginTop:10
  },
  textArea: {
    height: 40,
    // justifyContent: "flex-start"
  },
  pickerStyle: {
    height: 80,
    width: "100%",
    color: '#344953',
    justifyContent: 'center',
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 120,
    fontSize: 14,
    color: '#333',
  },
  mb: {
    marginBottom: 15,
  },
  button: {
    width: 200,
    alignItems:'center',
    marginVertical: 20,
    // borderRadius: 20,
    paddingVertical: 12,
    backgroundColor: 'rgb(30,144,255)',
    color: '#2E3292',
    marginLeft:5,
    
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
