import React, { Component } from 'react';
import { Button, View, Image, Dimensions, StyleSheet, ImageBackground, AsyncStorage ,FlatList,Picker} from 'react-native';
import {
  Container, Header, Title, Content, Card, CardItem, Thumbnail,
  Left, Right,Body, Footer, FooterTab, Form, Item, Input, Label , ActionSheet,Root
} from "native-base";
import { TouchableOpacity, TextInput,ScrollView } from 'react-native-gesture-handler';

import { Block, Checkbox, Text, theme } from "galio-framework";
import Textarea from 'react-native-textarea';
// import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Complaint extends Component {
    state = {  
        choosenIndex: 0 ,
        filelist:[] 
    };


    renderItem=({item,index})=>{
      return(
        <View >
        <View style={{marginTop:20,flexDirection:'row',backgroundColor:'white',paddingHorizontal:10,marginBottom:10,width:140,height:100}}>
          <Image  source={item.url}   style={{ width: 100, height: 100 ,resizeMode:"contain"}}></Image>
          <TouchableOpacity onPress={() => this.removeValue(item.id)} >
        
          <Image source={require("../Images/close.png")}  style={{width:25,height:25}} />
        </TouchableOpacity>

        </View>
        </View>
        
      )
    }
    removeValue = id => {
      // alert('ello');
      let newData = this.state.filelist.filter(item => item.id !== id);
      this.setState({
        filelist: newData
      });
    };
    onselectImage=(image)=>{
      let newdataumg=this.state.filelist;
      const source={uri:image.path};
      let item ={
        id:Date.now(),
        url:source,
        content:image.data
      };
      newdataumg.push(item);
      this.setState({
        filelist:newdataumg
      })
    }
    choosePhotoCamara=()=>{
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: false,
        
      }).then(image => {

        this.onselectImage(image);
        console.log(image);
      });
    }
    choosePhotoLibary=()=>{
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: false
      }).then(image => {
        this.onselectImage(image);

        console.log(image);
      });
    }
onclick=()=>{
const Button =["take photo",'choose  photo libary',"cancle"];
ActionSheet.show(
  {options:Button,cancleButtonIndex:2,title:'select a photo'},
  buttontext=>{
    switch(buttontext){
      case 0:
        this.choosePhotoCamara();
      break;
     
      case 1:
        this.choosePhotoLibary();
        break;
       
        default:
          break
    }
  }
  )
}


    handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ photo: response })
          }
        })
      }
     
  render() {
    const { photo } = this.state
    let {filelist}= this.state
    return (
      <Block flex >
           <LinearGradient colors={['#feada6', '#f5efef']} style={styles.linearGradient}>
       
                          <ScrollView>

               <View style={{padding:12}}>
             
<Text style={{textAlign:"center",marginTop:30,marginBottom:2,fontWeight: "bold",fontSize:20}}>Online Complaint </Text>

                <View style={styles.bgcard}>
               
                {/* <Text style={{fontWeight: "bold"}}> Name of Complaint</Text> 
                <Item  >
                <TextInput placeholder="Enter Complaint"
                
                />
                        </Item>
                        <Text style={{fontWeight: "bold"}} 
                        
                        > Contact No.</Text> 
                        <Item  >
                <TextInput placeholder="Enter Contact Number"  keyboardType="numeric"/>
                        </Item> */}
                            
                        <Text style={{fontWeight: "bold"}}>Type of Complaint</Text> 
                 <Item>
                        <Picker style={styles.pickerStyle} 
                          selectedValue={this.state.language}  
                          onValueChange={(itemValue, itemPosition) =>  
                              this.setState({language: itemValue, choosenIndex: itemPosition})}   >
                              {/* <Picker.Item label="Please select Complaint Type" value="Complaint" />      */}
              <Picker.Item label="Building Byelaws Violation" value="Building Byelaws Violation" />  
                    <Picker.Item label="Misc" value="Misc" />  
                    <Picker.Item label="De- Sealing" value="De- Sealing" /> 
                    <Picker.Item label="Roads related" value="Roads related" /> 
            </Picker>
            </Item>
           
            <Text style={{fontWeight: "bold"}}>Select Jurisdiction</Text> 
                 <Item>
                        <Picker style={styles.pickerStyle} 
                          selectedValue={this.state.language}  
                          onValueChange={(itemValue, itemPosition) =>  
                              this.setState({language: itemValue, choosenIndex: itemPosition})}   >
                              <Picker.Item label="DDA" value="DDA" />     
              <Picker.Item label="SDMC" value="SDMC" />  
                    <Picker.Item label="NDMC" value="NDMC" />  
                    <Picker.Item label="EDMC" value="EDMC" /> 
                    {/* <Picker.Item label="Roads related" value="Roads related" />  */}
            </Picker>
            </Item>
           
  
            <Text style={{fontWeight: "bold"}}>Select Officer</Text> 
            <Item>

                        <Picker style={styles.pickerStyle} 
                          selectedValue={this.state.language}  
                          onValueChange={(itemValue, itemPosition) =>  
                              this.setState({language: itemValue, choosenIndex: itemPosition})}   >
                              <Picker.Item label="Select Concerned Nodal Officer" value="Select Concerned Nodal Officer" />     
              <Picker.Item label="Building Byelaws Violation" value="Building Byelaws Violation" />  
                    <Picker.Item label="Misc" value="Misc" />  
                    <Picker.Item label="De- Sealing" value="De- Sealing" /> 
                    <Picker.Item label="Roads related" value="Roads related" /> 
            </Picker>
            </Item>
            <Text style={{fontWeight: "bold"}}>Complaint Description</Text> 

            <Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}
    onChangeText={this.onChange}
    defaultValue={this.state.text}
    maxLength={90}
    placeholder={'Please type Area/Address Of Complaint'}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}
  />

            
 
                                               <Root>        
                  <View>
  <FlatList 
  data={filelist}   
  renderItem={this.renderItem}
  // keyExtractor={(item,index=>index.toString())
    keyExtractor={(item,index)=>index}

  extraData={this.state}
  
  />
    
  </View>
  <TouchableOpacity  onPress={this.onclick}>
    {/* <Text>press add image</Text> */}
  <Button title="Choose Photo"  /> 
  </TouchableOpacity>
  </Root>
                        <TouchableOpacity   style={styles.button}  >
                  <Text style={styles.buttontext}>Submit</Text>
                </TouchableOpacity>
                
                     </View>
                  
                 {/*   </Card>   */}
                    
              </View>
              </ScrollView>

              </LinearGradient>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00008B"
  },
  button: {
    width: 100,
    marginVertical: 100,
    borderRadius: 20,
    paddingVertical: 12,
    backgroundColor: '#73C8F1',
    marginLeft: 30,
marginTop:20
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
  pickerStyle:{  
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
    marginVertical: 50,
    borderRadius: 20,
    paddingVertical: 12,
    backgroundColor: 'rgb(30,144,255)',
    color: '#2E3292',
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
    // alignItems: 'center',
    padding:10,
    // width: 350,
    // height:1200,
    top: 20,
    fontSize:15,
    backgroundColor: 'rgb(255,255,255)'
  },

});
