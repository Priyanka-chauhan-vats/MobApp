import React, { Component } from 'react';
import { Button, View, Image, Dimensions, StyleSheet, ImageBackground, AsyncStorage, FlatList, Picker } from 'react-native';
import {
  Container, Header, Title, Content, Card, CardItem, Thumbnail,
  Left, Right, Body, Footer, FooterTab, Form, Item, Input, Label, ActionSheet, Root,DatePicker
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
import axios from 'axios';
import { baseurl } from '../screens/baseurl';
const grievance = baseurl +'grievanceApplyform';


const { width: WIDTH } = Dimensions.get('window');
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = [
  { label: 'Male', value: 0 },
  { label: 'Female', value: 1 }
];

export default class EncroachmentApply extends Component {
  constructor(props) {
    super(props);
    this.state = {
    choosenIndex: 0,
    filelist: [],
    status: this.props.navigation.state.params,

      Name: '',
      email: '',
      phoneNumber: '',
      address:'',
      showLoader:false,
      description:"",
      gender:'',
      language:'',
      nodalofficer:'',
  
  
  };
  console.log(this.props.navigation.state.params);
  console.log(this.state.status)
  this.checkloginstatus();
}
checkloginstatus = async SK => {
        
  //await AsyncStorage.setItem('USER_KEY', this.state.name)
  const UserName = await AsyncStorage.getItem('USER_KEY')
  if (UserName == 'Logout' || UserName =="" || UserName == undefined)  {
      console.log(' not Login '+ UserName);
      alert("You are not Login")
      const { navigation } = this.props;
      this.props.navigation.navigate('Loginnnnn')

  }
  // else{
  //     this.setState({
  //         showSpinner: false
  //     });
  // } 
}


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
  
  handleAddressChange = event => {
    this.setState({
    address: event.nativeEvent.text
    });
  }
  handleDescriptionChange = event =>{
    this.setState({
      description: event.nativeEvent.text
      });
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={{flexDirection: 'row',width:'100%'}}>
        <View style={{ marginTop: 2, flexDirection: 'row',
         marginBottom: 20,  }}>
          <Image source={item.url} style={{ width: 100, height: 100, resizeMode: "contain" }}></Image>
          <TouchableOpacity onPress={() => this.removeValue(item.id)} >

            <Image source={require("../Images/close.png")} style={{ width: 25, height: 25 }} />
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
  onselectImage = (image) => {
    let newdataumg = this.state.filelist;
    const source = { uri: image.path };
    let item = {
      id: Date.now(),
      url: source,
      content: image.data
    };
    newdataumg.push(item);
    this.setState({
      filelist: newdataumg
    })
  }
  choosePhotoCamara = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: false,

    }).then(image => {

      this.onselectImage(image);
      console.log(image);
    });
  }
  choosePhotoLibary = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: false
    }).then(image => {
      this.onselectImage(image);

      console.log(image);
    });
  }
  onclick = () => {
    const Button = ["Take photo", 'Choose  Photo Gallery', "Cancel"];
    ActionSheet.show(
      { options: Button, cancleButtonIndex: 2, title: 'Select  Photo' },
      buttontext => {
        switch (buttontext) {
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
  handleSubmit = async event => {

    const form1Obj = {
      complaint:this.state.status,
      NameofComplainant: this.state.Name,
      EmailAddress: this.state.email,
      MobileNumber: this.state.phoneNumber,
      Address:this.state.address,
      gender:this.state.gender,
      ComplaintDescrption:this.state.description,
      JurisdictionOrgComplaint:this.state.language,
      ConcernedNodalOfficer:this.state.nodalofficer
     
    }

    console.log('hit')
    // this.showLoader();
    console.log( form1Obj);
    // if(this.state.phoneNumber.length > 0 && this.state.Name.length > 0 && this.state.email.length > 0)
    // {
    axios.post(grievance, form1Obj)
      .then(res => {
        console.log('aaya kya');
        // console.log(res);
        console.log( res.data);
     this.props.navigation.navigate('detailslist')

        // if (res.data.status === 500) {
        //   alert("User is already Registered");
        // }
        // else if (res.status === 200) {

          

        //   this.hideLoader();
        //   console.log("Successfully Registered")
        //   alert("successfully");
          

        // }
        // this.props.navigation.navigate('usersignupotp',{ JSON_ListView_Clicked_Item: this.state.phoneNumber })

        // else {
        //   alert("errorrr");
        // }
      }
      )
    
  }
  
  render() {
    const { photo } = this.state
    let { filelist } = this.state
    return (

      <Block flex>

        {/* <LinearGradient colors={['#6E7DDB','#f5efef']}> */}
        <View style={styles.block}>
          {/* <LinearGradient colors={['#feada6', '#f5efef']}> */}
            <ScrollView>
            {/* <Block  style={{  padding: 5}}>

                        <InputOutline   style={{fontSize:12,height:45,}}
  placeholder="Name of complainant"
  focusedColor='black'
  defaultColor='grey'
/>
</Block> */}
<Text   style={{fontWeight:'bold',fontSize:15}}>
Name of Complainant
</Text>
<View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Name" 
            placeholderTextColor="black"
            onChange={this.handleNameChange}

            />
        </View>
        <Text style={{fontWeight:'bold',fontSize:15}}>
Email Address
</Text>
<View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="black"
            onChange={this.handleEmailChange}


            />
        </View>
            
                  
            
            <Text   style={{fontWeight:'bold',fontSize:15}}>
              Mobile Number
</Text>
<View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Mobile Number" 
            placeholderTextColor="black"
            onChange={this.handlePhoneChange}
            />

        </View>
        <Text style={{fontWeight:'bold',fontSize:15}}>Address</Text>
        <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Address"
      // value='shamli'
      onChange={this.handleAddressChange} 

      placeholderTextColor="black"
      // numberOfLines={4}
      multiline={true}
    />
    </View>
              {/* <Block  style={{  padding: 5,marginTop:-25,}}>
               
                 <InputOutline   style={{fontSize:12,textAlignVertical:'top',height:45}}
  placeholder="Address"
  focusedColor='black'
  defaultColor='grey'
  multiline={true} 
/>
            
              </Block> */}
             <Text style={{fontWeight:'bold',fontSize:15}}>Complaint Descrption</Text>
        <View style={styles.textAreaContainer} >
        {/* <Textarea placeholder="Complaint Descrption"  /> */}

    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Complaint Description"
      
      // value='shamli'
      onChange={this.handleDescriptionChange} 

      placeholderTextColor="black"
      // numberOfLines={4}
      multiline={true}
    />
    </View>
        
    {/* <Textarea  rowSpan={8} placeholder="write here your feedback"  /> */}



<Block style={{ borderBottomColor: '#356FE0',  padding: 2 }}>
<Text style={styles.text2} >Gender </Text>
<View style={styles.textInput}>
<Picker
selectedValue={this.state.gender}
onValueChange={(itemValue, itemPosition) =>
this.setState({ gender: itemValue, choosenIndex: itemPosition })}   >
<Picker.Item label="Select " value="Select" />
<Picker.Item label="Male" value="Male" />
<Picker.Item label="Female" value="Female" />

</Picker>
</View>
</Block>

<Block style={{ borderBottomColor: '#356FE0',  padding: 5 }}>
<Text style={styles.text2} >Jurisdiction of Organization About the Complaint </Text>
<View style={styles.textInput}>
<Picker
selectedValue={this.state.language}
onValueChange={(itemValue, itemPosition) =>
this.setState({ language: itemValue, choosenIndex: itemPosition })}   >
<Picker.Item label="Select " value="Select" />
<Picker.Item label="DDA" value="DDA" />
<Picker.Item label="SDMC" value="SDMC" />
<Picker.Item label="NDMC" value="NDMC" />
<Picker.Item label="EDMC" value="EDMC" />
</Picker>
</View>
</Block>
<Block style={{ borderBottomColor: '#356FE0',  padding: 2 }}>
<Text style={styles.text2} >Concerned Nodal Officer</Text>
<View style={styles.textInput}>
<Picker
selectedValue={this.state.nodalofficer}
onValueChange={(itemValue, itemPosition) =>
this.setState({ nodalofficer: itemValue, choosenIndex: itemPosition })}   >
                    <Picker.Item label="Select " value="Select" />

<Picker.Item label="Mr. Anil Tomar" value="Mr. Anil Tomar" />
<Picker.Item label="Mr. Ramnerash shrama" value="Mr.Ramnerash shrama" />
<Picker.Item label="Rakesh rathi" value="Rakesh rathi" />
<Picker.Item label="Roads related" value="Roads related" />
</Picker>
</View>
</Block>

  <View  style={{marginTop:20}}>

                <Root>
                  <View  flexDirection='row'>
                    <FlatList
                      data={filelist}
                      renderItem={this.renderItem}
                      // keyExtractor={(item,index=>index.toString())
                      keyExtractor={(item, index) => index}

                      extraData={this.state}

                    />

                  </View>
                  <View>
                  <TouchableOpacity onPress={this.onclick}>
                    {/* <Text>press add image</Text> */}
                    <View  style={{flexDirection:"row",borderWidth:1,width:'50%',borderRadius:5,paddingHorizontal:10}}>
                    <Image source={require("../Images/camera.png")}  style={{ 
  
  width: 40,
  height: 50,}}>
</Image>
<Text style={{ top: 20,fontWeight:'bold',
 left: 10,}}>Choose Photo</Text>
</View>
                    
                  </TouchableOpacity>

                </View>
                </Root>
                <Block >
              {/* <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('detailslist')} > */}
              <TouchableOpacity style={styles.button} onPress={this.handleSubmit} >

                  <Text style={styles.buttontext}>Submit</Text>
                </TouchableOpacity>
                </Block>
              </View>


              {/*   </Card>   */}

              {/* </View> */}
             
            </ScrollView>
            
          {/* </LinearGradient> */}
        </View>
        
       

      
        {/* </LinearGradient> */}

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
    marginBottom:3,

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
