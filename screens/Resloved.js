import React, { Component } from 'react';
import { Button, View, Image, Dimensions, StyleSheet, ImageBackground, AsyncStorage, FlatList, Picker } from 'react-native';
import {
  Container, Header, Title, Content, Card, CardItem, Thumbnail,
  Left, Right, Body, Footer, FooterTab, Form, Item, Input, Label, ActionSheet, Root, DatePicker
} from "native-base";
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import { Block, Checkbox, Text, theme } from "galio-framework";
import Textarea from 'react-native-textarea';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioGroup,{Radio} from "react-native-radio-input";
import Fileupoad from './fileupload';
import axios from 'axios';
import { baseurl } from '../screens/baseurl';
const grievance = baseurl +'grievancenotviewresloved'; 
const { width, height } = Dimensions.get("screen");

const { width: WIDTH } = Dimensions.get('window');

var radio_props = [
  { label: 'param1', value: 0 },
  { label: 'param2', value: 1 }
];
const data = [
  {
    label: 'Yes',
   
  },
  {
    label: 'No',
   
  }
];

export default class Resloved extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      choosenIndex: 0,
    filelist: [],
    value: 0,
    visible:1,
        id:''


    };
    this.UserNameStr();

  }
  UserNameStr = async SK => {
    try {
        // await AsyncStorage.setItem('USER_KEYID', this.state.id)
        const UserName = await AsyncStorage.getItem('USER_KEYID')
        console.log('Value is ' + ' ' + UserName);
        this.setState(
          {
            id:UserName
          }
        )
        
       

    } catch (e) {
        alert('Failed to fetch User.')
    }
  }
  getChecked = (value) => {
    // value = our checked value
  if(value===2)
  {
    console.log(value)
    this.setState({
      visible:2
    })
  }
  else if(value===3)
  {
    console.log(value)
    this.setState({
      visible:3
    })
  }
    
  }
 
  renderItem = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <View style={{
          marginTop: 2, flexDirection: 'row',
          marginBottom: 20,
        }}>
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
    const Button = ["take photo", 'choose  photo libary', "cancle"];
    ActionSheet.show(
      { options: Button, cancleButtonIndex: 2, title: 'select a photo' },
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
  show = (value) => {
    // alert("true")
    if(value === 0)
    {
      this.setState({visible:true})
    }
    // this.setState({ value: 1 })
  }
handlesubmit=()=>{
//   console.log(this.state.language)
//   console.log(this.state.language2)
//   console.log(this.state.language3)
//   console.log(this.state.language4)
//   console.log(this.state.language5)

//   console.log(this.state.date)
// console.log(this.state.date2)
// console.log(this.state.visible)
// console.log(this.state.date3)
// console.log(this.state.date4)
// console.log(this.state.date5)
// console.log(this.state.description)
var dataa={
  _id:this.state.id,
  JurisdictionPolicestation:this.state.language,
  Zonalplan:this.state.language2,
  DateofAction:this.state.date,
  DateofDemolition:this.state.date2,
  // UnderProcess:this.state.visible,
  yesselecteddropdown:this.state.language3,
  Actiontakendetails:this.state.description,
  Noselecteddropdown:this.state.language4,
  NoselectedOtherAction:this.state.language5,
  NoselecteddateofAction:this.state.date4
}
console.log(JSON.stringify(dataa))
const formobj=JSON.stringify(dataa)
alert("data saved");
// axios.post(grievance,formobj)
//   .then(Response => {
//       console.log('DATa saveed');
//       console.log(Response)
      
  
//       console.log('details');
//       // console.log(this.state.name)
//     })
//     .catch(err => {
//       console.log('Error is ' + err);
//     })

}
handleDescriptionChange = event =>{
  this.setState({
    description: event.nativeEvent.text
    });
}
handleAvailabledateChange = (date) => {
  this.setState({
    date:date

  } );
}
handleAvailabledate2Change = (date) => {
  this.setState({
    date2:date

  } );
}
handleAvailabledate3Change = (date) => {
  this.setState({
    date3:date

  } );
}
handleAvailabledate4Change = (date) => {
  this.setState({
    date4:date

  } );
}
handleAvailabledate5Change = (date) => {
  this.setState({
    date5:date

  } );
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
         
            <View style={{ marginTop: 5 }}>

              <Root>
                <View flexDirection='row'>
                  <FlatList
                    data={filelist}
                    renderItem={this.renderItem}
                    // keyExtractor={(item,index=>index.toString())
                    keyExtractor={(item, index) => index}

                    extraData={this.state}

                  />

                </View>
                <View style={{ flexDirection: "row", width: '100%' }}>
                  <TouchableOpacity onPress={this.onclick}>
                    {/* <Text>press add image</Text> */}
                    <View style={{
                      flexDirection: "row", borderWidth: 1, marginRight: 10, paddingVertical: 5, backgroundColor: 'white',
                      borderRadius: 5,
                      paddingHorizontal: 15
                    }}>
                      <Image source={require("../Images/camera.png")} style={{

                        width: 40,
                        height: 50,
                      }}>
                      </Image>
                      <Text style={{
                        top: 20, fontWeight: 'bold',
                        left: 10,
                      }}>Before Action</Text>
                    </View>

                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.onclick}>
                    {/* <Text>press add image</Text> */}
                    <View style={{
                      flexDirection: "row", borderWidth: 1, paddingVertical: 5, backgroundColor: 'white', borderRadius: 5,
                      marginLeft: 10, paddingHorizontal: 15
                    }}>
                      <Image source={require("../Images/camera.png")} style={{

                        width: 40,
                        height: 50,
                      }}>
                      </Image>
                      <Text style={{
                        top: 20, fontWeight: 'bold',
                        left: 10,
                      }}>After Action</Text>
                    </View>

                  </TouchableOpacity>

                </View>
              </Root>
            </View>
            
              <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                <Text style={styles.text2} >Jurisdiction of Police Station </Text>
                <View style={styles.textInput}>
                  <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemPosition) =>
                      this.setState({ language: itemValue, choosenIndex: itemPosition })}   >
                    <Picker.Item label="Select " value="Select" />
                    <Picker.Item label="Central" value="DDA" />
                    <Picker.Item label="Dwarka" value="SDMC" />
                    <Picker.Item label="East" value="NDMC" />
                    <Picker.Item label="Eow" value="EDMC" />
                    <Picker.Item label="Metro" value="EDMC" />
                    <Picker.Item label="New Delhi" value="EDMC" />
                    <Picker.Item label="North" value="EDMC" />

                  </Picker>
                </View>
              </Block>
              
            <Block style={{ borderBottomColor: '#356FE0', padding: 2 }}>
              <Text style={styles.text2} >Land use as per master/Zonal plan</Text>
              <View style={styles.textInput}>
                <Picker
                  selectedValue={this.state.language2}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({ language2: itemValue, choosenIndex: itemPosition })}   >
                  <Picker.Item label="Select " value="Select" />

                  <Picker.Item label="RESIDENTIAL" value="RESIDENTIAL" />
                  <Picker.Item label="COMMERCIAL" value="COMMERCIAL" />
                  <Picker.Item label="INDUSTRIAL" value="INDUSTRIAL" />
                  <Picker.Item label="GREEN/RECREATIONAL" value="GREEN/RECREATIONAL" />
                  <Picker.Item label="PUBLIC/SEMI-PUBLIC FACILITIES" value="PUBLIC/SEMI-PUBLIC FACILITIES" />
                  <Picker.Item label="CIRULATION" value="CIRULATION" />
                  <Picker.Item label="MIXED LAND" value="MIXED LAND" />
                  <Picker.Item label="ANY OTHER" value="ANY OTHER" />

                </Picker>
              </View>
            </Block>
            <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
              <Text style={styles.text2} >Date Of Action</Text>
              <View style={styles.textInput}>

                <Item >
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
                    textStyle={{ color: "black" }}
                    placeHolderTextStyle={{ color: "black", fontSize: 15 }}
                    date={this.state.date}
                    disabled={false}
                    onDateChange={this.handleAvailabledateChange}
                  />

                </Item>
              </View>
            </Block>
            <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
              <Text style={styles.text2} >Date of Demolition (if done)</Text>
              <View style={styles.textInput}>

                <Item >
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
                    textStyle={{ color: "black" }}
                    placeHolderTextStyle={{ color: "black", fontSize: 15 }}
                    date={this.state.date2}
                    disabled={false}
                    onDateChange={this.handleAvailabledate2Change}
                    disabled={false}
                  />

                </Item>
              </View>
            </Block>
            <Block>

              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Under process</Text>
              <RadioGroup getChecked={this.getChecked} RadioGroupStyle={{flexDirection: "row" }}>
    <Radio  iconName={"lens"}  label={"Yes"} value={2} />
    <Radio iconName={"lens"} label={"No"} value={3}/>
    
</RadioGroup>
              {/* <RadioButtonRN
             
                // style={{flexDirection:'row',width:'20%'}}
                data={data}
                selectedBtn={this.getChecked}
                //   activeColor="blue"
                deactiveColor="black"
                circleSize={12}
                labelHorizontal={true}


              /> */}
            </Block>
            {this.state.visible===1 || this.state.visible===2 ?
            <Block style={{ padding: 5, borderWidth: 1, marginTop: 10 }}>
              <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                {/* <Text style={styles.text2} >Jurisdiction of Police Station </Text> */}
                <View style={styles.textInput}>
                  <Picker
                    selectedValue={this.state.language3}
                    onValueChange={(itemValue, itemPosition) =>
                      this.setState({ language3: itemValue, choosenIndex: itemPosition })}   >
                    <Picker.Item label="Select " value="Select" />
                    <Picker.Item label="Show-cause notice issued" value="DDA" />
                    <Picker.Item label="property Booked" value="SDMC" />
                    <Picker.Item label="Sealing Order" value="NDMC" />
                    <Picker.Item label="Demolition/Removal Order" value="EDMC" />
                    <Picker.Item label="Other(Litigation etc.)" value="EDMC" />


                  </Picker>
                </View>

              </Block>
              <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                {/* <Text style={styles.text2} >date Of Action</Text> */}
                <View style={styles.textInput}>

                  <Item >
                    <DatePicker

                      defaultDate={new Date(2020, 7, 5)}
                      minimumDate={new Date(2018, 1, 1)}
                      maximumDate={new Date(2050, 12, 31)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}

                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="Date of Action"
                      textStyle={{ color: "black" }}
                      placeHolderTextStyle={{ color: "black", fontSize: 15 }}
                      date={this.state.date3}
                      disabled={false}
                      onDateChange={this.handleAvailabledate3Change}

                    />

                  </Item>
                </View>
              </Block>
              {/* <Text style={{fontWeight:'bold',fontSize:15}}></Text> */}

            </Block>
            :null}
            {this.state.visible===1 || this.state.visible===3 ?
            <Block>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 5 }}>Final Action</Text>

            <Block style={{ padding: 5, borderWidth: 1, marginTop: 10 }}>
              <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                {/* <Text style={styles.text2} >Jurisdiction of Police Station </Text> */}
                <View style={styles.textInput}>
                  <Picker
                    selectedValue={this.state.language4}
                    onValueChange={(itemValue, itemPosition) =>
                      this.setState({ language4: itemValue, choosenIndex: itemPosition })}   >
                    <Picker.Item label="Select " value="Select" />
                    <Picker.Item label="Property Demolished" value="DDA" />
                    <Picker.Item label="Property Sealed" value="SDMC" />
                    <Picker.Item label="Encroachment removed/Item sized enforcement measure taken" value="NDMC" />
                    <Picker.Item label="Patrolling challan,lifting of Vehicle other assistance" value="EDMC" />
                    <Picker.Item label="No action required" value="EDMC" />


                  </Picker>
                </View>

              </Block>
              <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                {/* <Text style={styles.text2} >Jurisdiction of Police Station </Text> */}
                <View style={styles.textInput}>
                  <Picker
                    selectedValue={this.state.language5}
                    onValueChange={(itemValue, itemPosition) =>
                      this.setState({ language5: itemValue, choosenIndex: itemPosition })}   >
                    {/* <Picker.Item label="Select " value="Select" /> */}
                    <Picker.Item label="Select Other Action" value="DDA" />
                    <Picker.Item label="Elec.and water Disconnection" value="SDMC" />
                    <Picker.Item label="Stop work Notice" value="NDMC" />
                    <Picker.Item label="No sale or purchase of property" value="EDMC" />


                  </Picker>
                </View>

              </Block>
              <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                {/* <Text style={styles.text2} >date Of Action</Text> */}
                <View style={styles.textInput}>

                  <Item >
                    <DatePicker

                      defaultDate={new Date(2020, 7, 5)}
                      minimumDate={new Date(2018, 1, 1)}
                      maximumDate={new Date(2050, 12, 31)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}

                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="Date of Action"
                      textStyle={{ color: "black" }}
                      placeHolderTextStyle={{ color: "black", fontSize: 15 }}
                      date={this.state.date4}
                    disabled={false}
                    onDateChange={this.handleAvailabledate4Change}

                    />

                  </Item>
                </View>
              </Block>
              {/* <Text style={{fontWeight:'bold',fontSize:15}}></Text> */}

            </Block>
            </Block>
:null}
            <View style={styles.textAreaContainer} >
              <TextInput
               onChange={this.handleDescriptionChange} 
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Action taken details"
                // value='shamli'
                placeholderTextColor="black"
                // numberOfLines={4}
                multiline={true}
              />
            </View>
            <View>
              <Fileupoad />
            </View>
            <Block style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('detailslist')} >
                <Text style={styles.buttontext}> interim Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.handlesubmit} >
                <Text style={styles.buttontext}> Final Submit</Text>
              </TouchableOpacity>
            </Block>




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
    borderWidth: 1, backgroundColor: 'white', fontSize: 12, width: "100%", borderColor: 'black', height: 50,
    textAlignVertical: 'top', borderRadius: 5,

  },
  text2: {
    width: '100%', fontSize: 16,
  },
  pickerStyle: {
    // height: 80, 
    width: "50%",
    color: '#344953',
    borderWidth: 2,
    backgroundColor: 'white',

    borderColor: '#356FE0',

    // justifyContent: 'center',  
  },
  container: {
    backgroundColor: "#00008B"
  },
  button: {
    width: 100,
    // borderRadius: 20,
    backgroundColor: "#004CA1",
    // marginLeft: 30,
    marginTop: 50


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
    backgroundColor: '#E8E8E8',
    // height:630,
    justifyContent: 'center',

    width: '100%',
    // borderRadius:30,
    paddingHorizontal: 15,
    //  marginHorizontal:15,
    //  marginTop:10
  },


  textAreaContainer: {
    marginBottom: 3,
    marginTop: 5,
    borderColor: "black",
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    textAlignVertical: 'top',
    backgroundColor: 'white',
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
    alignItems: 'center',
    marginVertical: 20,
    // borderRadius: 20,
    paddingVertical: 12,
    backgroundColor: 'rgb(30,144,255)',
    color: '#2E3292',
    marginLeft: 5,
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
