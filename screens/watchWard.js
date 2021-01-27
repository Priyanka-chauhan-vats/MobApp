import React, { Component } from 'react';
import { Button, View, Image,  StyleSheet, FlatList,Picker} from 'react-native';
import {
    Item, ActionSheet,Root,DatePicker
} from "native-base";
import { TouchableOpacity, TextInput,ScrollView } from 'react-native-gesture-handler';
import { Block, Checkbox, Text, theme } from "galio-framework";
import Textarea from 'react-native-textarea';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';


export default class watchWard extends Component {
    state = {  
        choosenIndex: 0 ,
        choosenIndex2: 0 ,
        filelist:[] 
    };
      // constructor(props) {
    //     super(props);
        
    //     this.state = { chosenDate: new Date() };
    //     this.setDate = this.setDate.bind(this);
    //   }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
  

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
    choosePhotoCamaraaa=()=>{
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
        this.choosePhotoCamaraaa();
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
           <LinearGradient colors={['#3B2D89', '#f5efef']} style={styles.linearGradient}>
       
                          <ScrollView>

               <View style={{padding:12}}>
             
<Text style={{textAlign:"center",marginTop:30,marginBottom:2,fontWeight: "bold",color:"white",fontSize:20}}>Watch & Ward </Text>

                <View style={styles.bgcard}>
               
                <Text style={{fontWeight: "bold", fontSize:15}}> Date</Text> 
                <Item  >
                <DatePicker
            defaultDate={new Date(2020, 7, 5)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2050, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
                                   </Item>
                        {/* <Text>
             Selected Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
                                                 
                        <Text style={{fontWeight: "bold", fontSize:15}}>Village Name</Text> 
                 <Item>
                        <Picker style={styles.pickerStyle} 
                          selectedValue={this.state.language}  
                          onValueChange={(itemValue, itemPosition) =>  
                              this.setState({language: itemValue, choosenIndex: itemPosition})}   >
                              <Picker.Item label="Please select Village Name " value="Village Name" />     
              <Picker.Item label="Har" value="Har" />  
                    <Picker.Item label="Narela " value="Narela" />  
                    <Picker.Item label="Some Other" value="Some Other" /> 
                   
            </Picker>
            </Item>
            <Text style={{fontWeight: "bold", fontSize:15}}>Khasra Number</Text> 
                 <Item>
                        <Picker style={styles.pickerStyle} 
                          selectedValue={this.state.language2}  
                          onValueChange={(itemValue2, itemPosition2) =>  
                              this.setState({language2: itemValue2, choosenIndex2: itemPosition2})}   >
                              <Picker.Item label="Please select Khasra Number" value="Khasra Number" />     
              <Picker.Item label="Har" value="Har" />  
                    <Picker.Item label="Narela " value="Narela" />  
                    <Picker.Item label="Some Other" value="Some Other" /> 
                   
            </Picker>
            </Item>
            <Text style={{fontWeight: "bold", fontSize:15}}>Land Mark</Text>   
            <Item  >
                <TextInput placeholder="Land Mark"/>
                        </Item>
  
            <Text style={{fontWeight: "bold" ,fontSize:15}}>Status on Ground</Text> 
            <Item>
            <Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}
    onChangeText={this.onChange}
    placeholder={'Please Fill Status on Ground'}
    placeholderTextColor={'#c7c7c7'}
    defaultValue={this.state.text}
    maxLength={80}
          underlineColorAndroid={'transparent'}
  />
  </Item>                       
                  <Root>        
                  <FlatList 
  data={filelist}   
  renderItem={this.renderItem}
  // keyExtractor={(item,index=>index.toString())
    keyExtractor={(item,index)=>index}
  extraData={this.state}
       />    
   <TouchableOpacity style={styles.button} onPress={this.onclick}>
    {/* <Text>press add image</Text> */}
  <Button title="Choose Photos"  /> 
  </TouchableOpacity>
  </Root>
  <Text style={{fontWeight: "bold",marginTop:15,fontSize:15}}>Remarks</Text> 
            <Item>
            <Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}
    onChangeText={this.onChange}
    placeholder={'Please Fill Remarks'}
    placeholderTextColor={'#c7c7c7'}
    defaultValue={this.state.text}
    maxLength={80}
         underlineColorAndroid={'transparent'}
  />
  </Item>
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
    backgroundColor: '#60549D',
    marginLeft: 30,
    marginTop:20,
    
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
    //height:1200,
    top: 20,
    fontSize:15,
    backgroundColor: 'rgb(255,255,255)'
  },

});
