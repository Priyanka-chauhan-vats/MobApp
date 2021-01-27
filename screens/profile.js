import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab,Item,Label,Input } from 'native-base';
import OutlineInput from 'react-native-outline-input';
import { Block, Checkbox,} from "galio-framework";

import { ScrollView ,TouchableOpacity} from 'react-native-gesture-handler';

export default class profile extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <Block flex >

        {/* <Header>
            <Text  style={{ color:'white', fontWeight: 'bold',fontSize:20,marginTop:15,marginRight:300 }}>Profile</Text>
        </Header> */}
  
        <ScrollView>

      <View style={styles.container}>

        {/* <View  >
        <Item floatingLabel   style={styles.inputView}>
              <Label>First Name</Label>
              <Input />
            </Item>
        </View> */}
        
        <Block  style={{  padding: 6,marginTop:10}}>
            
            <OutlineInput
      style={{fontSize:12}}
  label="First Name"
  value="Raman"
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="gray"
        passiveLabelColor="gray"
        passiveValueColor="gray"
      />
      </Block>
      <Block  style={{  padding: 6,}}>
            
            <OutlineInput
      style={{fontSize:12}}
  label="Last Name"
  value="Pundir"
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="gray"
        passiveLabelColor="gray"
        passiveValueColor="gray"
      />
      </Block>

      <Block  style={{  padding: 6,marginTop:10}}>
            
            <OutlineInput
      style={{fontSize:12}}
  label="Password"
  value='8687687687'
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="gray"
        passiveLabelColor="gray"
        passiveValueColor="gray"
      />
      </Block>
      <Block  style={{  padding: 6,}}>
            
            <OutlineInput
      style={{fontSize:12}}
  label="Confirm Password"
  value='8687687687'
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="gray"
        passiveLabelColor="gray"
        passiveValueColor="gray"
      />
      </Block>
      <Block  style={{  padding: 6}}>
            
            <OutlineInput
      style={{fontSize:12}}
  label="Age"
  value='25'
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="gray"
        passiveLabelColor="gray"
        passiveValueColor="gray"
      />
      </Block>
      <Block  style={{  padding:6}}>
            
            <OutlineInput
      style={{fontSize:12}}
      value="Rohini Delhi"
  label="Address"
        activeValueColor="black"
        activeBorderColor="balck"
        activeLabelColor="black"
        passiveBorderColor="gray"
        passiveLabelColor="gray"
        passiveValueColor="gray"
      />
      </Block>
 {/* <Item floatingLabel   style={styles.inputView}> 
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel   style={styles.inputView}>
              <Label>Phone Number</Label>
              <Input />
            </Item>
            <Item floatingLabel   style={styles.inputView}>
              <Label>Email Address</Label>
              <Input />
            </Item>
            <Item floatingLabel   style={styles.inputView}>
              <Label>Password</Label>
              <Input />
            </Item>  */}
        {/* <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            value='jhsjag'
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View> */}
        {/* <View style={styles.inputView} > */}
        {/* <Item floatingLabel   style={styles.inputView}>
              <Label>  Confirm Password</Label>
              <Input />
            </Item> */}
        {/* <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Address"
      // value='shamli'
      placeholderTextColor="#003f5c"
      numberOfLines={40}
      multiline={true}
    />
       </View> */}
        

        <Button style={styles.loginBtn}>
          <Text style={styles.loginText}>Update</Text>
        </Button>

        
      </View>
      </ScrollView>
      </Block>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    // height:630,
    justifyContent: 'center',

    width: '100%',
    // borderRadius:30,
    paddingHorizontal: 15,
    //  marginHorizontal:15,
    //  marginTop:10
  },
  
  textArea: {
    height: 50,
    // justifyContent: "flex-start"
  },
  inputView: {
    width: "90%",

    borderBottomWidth: 1,
    borderBottomColor: "#004CA1",
    // height: 50,
    marginTop:10,
    justifyContent: "center",
    padding: 5
},
  textAreaContainer: {
    // borderColor:"#004CA1",
    width:"90%",
    // borderRadius:25,
    // borderWidth: 2,
    padding: 5,
    borderBottomWidth:2,
    borderBottomColor:"#004CA1",
    // justifyContent:"center",
    height:100,


  },
  inputText:{
    height:50,
    color:"#004CA1"
  },
 
 
  loginBtn:{
    width:'70%',
    backgroundColor:"#004CA1",
    height:50,
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
// marginLeft:30,

    
    marginTop:80,
    marginBottom:10
  },
  loginText:{
    color:"white",
    // marginLeft:130,
    textAlign:'center',
    fontWeight:"bold",
    fontSize:20,
  },
  
});