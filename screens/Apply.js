import React, {Component} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  AsyncStorage,
  FlatList,
  Picker,
} from 'react-native';
import {ActionSheet} from 'native-base';
import {
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native-gesture-handler';
import {Block, Checkbox, Text, theme} from 'galio-framework';
// import ImagePicker from 'react-native-image-picker'
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import {baseurl} from '../screens/baseurl';
const grievance = baseurl + 'grievanceApplyform';
const nodalofficer = baseurl + 'all_Nodalofficer';

const {width: WIDTH} = Dimensions.get('window');

export default class apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenIndex1: 0,
      filelist: [],
      nodalofficer: [],
      filelistnodalofficer: [],
      status: this.props.navigation.state.params,

      Name: '',
      email: '',
      phoneNumber: '',
      address: '',
      showLoader: false,
      description: '',
      gender: '',
      organization: false,
      nodalofficer: '',
      nodalofficerserialnumber: false,
    };
    console.log(this.props.navigation.state.params);
    console.log(this.state.status);
    this.checkloginstatus();
    this.PostAPI();
  }
  checkloginstatus = async (SK) => {
    //await AsyncStorage.setItem('USER_KEY', this.state.name)
    const UserName = await AsyncStorage.getItem('USER_KEY');
    if (UserName == 'Logout' || UserName == '' || UserName == undefined) {
      console.log(' not Login ' + UserName);
      alert('You are not Login');
      const {navigation} = this.props;
      this.props.navigation.navigate('Loginnnnn');
    }
    // else{
    //     this.setState({
    //         showSpinner: false
    //     });
    // }
  };
  PostAPI = () => {
    // const datad = { user_id: this.state.user }
    axios
      .get(nodalofficer)
      .then((Response) => {
        console.log('DATA got');
        console.log(Response.data);
        this.setState({
          filelistnodalofficer: Response.data,
        });

        //  console.log(Response.data);
        //console.log(this.state.rows);
        console.log('G');
        //  this.render()
      })
      .catch((err) => {
        console.log('Error is ' + err);
      });
  };

  handleNameChange = (event) => {
    this.setState({
      Name: event.nativeEvent.text,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.nativeEvent.text,
    });
  };
  handlePhoneChange = (event) => {
    this.setState({
      phoneNumber: event.nativeEvent.text,
    });
  };

  handleAddressChange = (event) => {
    this.setState({
      address: event.nativeEvent.text,
    });
  };
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.nativeEvent.text,
    });
  };

  renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{marginTop: 2, flexDirection: 'row', marginBottom: 20}}>
          <Image
            source={item.url}
            style={{width: 100, height: 100, resizeMode: 'contain'}}></Image>
          <TouchableOpacity onPress={() => this.removeValue(item.id)}>
            <Image
              source={require('../Images/close.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  removeValue = (id) => {
    // alert('ello');
    let newData = this.state.filelist.filter((item) => item.id !== id);
    this.setState({
      filelist: newData,
    });
  };
  onselectImage = (image) => {
    let newdataumg = this.state.filelist;
    const source = {uri: image.path};
    // var data = new FormData();

    let item = {
      id: Date.now(),
      url: source,
      content: image.data,
    };
    newdataumg.push(item);
    this.setState({
      filelist: newdataumg,
    });
  };
  choosePhotoCamara = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: false,
    }).then((image) => {
      this.onselectImage(image);
      console.log(image);
    });
  };
  choosePhotoLibary = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: false,
    }).then((image) => {
      this.onselectImage(image);

      console.log(image);
    });
  };
  onclick = () => {
    const Button = ['Take photo', 'Choose  Photo Gallery', 'Cancel'];
    ActionSheet.show(
      {options: Button, cancleButtonIndex: 2, title: 'Select  Photo'},
      (buttontext) => {
        switch (buttontext) {
          case 0:
            this.choosePhotoCamara();
            break;

          case 1:
            this.choosePhotoLibary();
            break;

          default:
            break;
        }
      },
    );
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  handleSubmit = async (event) => {
    const form1Obj = {
      complaint: this.state.status,
      NameofComplainant: this.state.Name,
      EmailAddress: this.state.email,
      MobileNumber: this.state.phoneNumber,
      Address: this.state.address,
      gender: this.state.gender,
      ComplaintDescrption: this.state.description,
      JurisdictionOrgComplaint: this.state.organization,
      ConcernedNodalOfficer: this.state.nodalofficer,
      officerserialnumber: this.state.nodalofficerserialnumber,

      // Photo:data
      // Photo:this.state.filelist.url
    };

    console.log('hit');
    // this.showLoader();
    console.log(form1Obj);
    // if(this.state.phoneNumber.length > 0 && this.state.Name.length > 0 && this.state.email.length > 0)
    // {
    axios.post(grievance, form1Obj).then((res) => {
      console.log('aaya kya');
      // console.log(res);
      console.log(res.data);
      this.props.navigation.navigate('detailslist');

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
    });
  };

  render() {
    let NodalListData = this.state.filelistnodalofficer.filter((item, i) => {
      if (this.state.choosenIndex === i) {
        return item;
      }
    });
    const NodalNode = NodalListData.map((item, index) => {
      return (
        <Picker.Item value={item.OFFICER_NAME} label={item.OFFICER_NAME} />
      );
    });
    const {photo} = this.state;
    let {filelist} = this.state;
    const officer = this.state.filelistnodalofficer;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.block}>
          <Text style={styles.label}>Name of Complainant</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
            placeholderTextColor="black"
            onChange={this.handleNameChange}
          />

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="black"
            onChange={this.handleEmailChange}
          />

          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Mobile Number"
            placeholderTextColor="black"
            onChange={this.handlePhoneChange}
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.inputText}
            underlineColorAndroid="transparent"
            placeholder="Address"
            // value='shamli'
            onChange={this.handleAddressChange}
            placeholderTextColor="black"
            multiline={true}
          />

          <Text style={styles.label}>Complaint Descrption</Text>
          <TextInput
            style={styles.inputText}
            underlineColorAndroid="transparent"
            placeholder="Complaint Description"
            onChange={this.handleDescriptionChange}
            placeholderTextColor="black"
            multiline={true}
          />

          <Text style={styles.label}>Gender </Text>
          <View style={styles.inputText}>
            <Picker
              selectedValue={this.state.gender}
              onValueChange={(itemValue, itemPosition) =>
                this.setState({
                  gender: itemValue,
                  choosenIndex: itemPosition,
                })
              }>
              <Picker.Item label="Select " value="Select" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>

          <Text style={styles.label}>
            Jurisdiction of Organization About the Complaint{' '}
          </Text>
          <View style={styles.inputText}>
            <Picker
              selectedValue={this.state.organization}
              onValueChange={(itemValue, itemPosition) => {
                this.setState({
                  organization: itemValue,
                  choosenIndex: itemPosition,
                });
              }}>
              <Picker.Item label="Select Organization" value={0} />
              {this.state.filelistnodalofficer.map((park, index) => {
                return (
                  <Picker.Item
                    key={index}
                    value={park.Authority_name}
                    label={park.Authority_name}
                  />
                );
              })}
            </Picker>
          </View>

          <Text style={styles.label}>Concerned Nodal Officer</Text>
          <View style={styles.inputText}>
            <Picker
              enabled={Boolean(this.state.organization)}
              selectedValue={this.state.nodalofficer}
              onValueChange={(itemValue, itemPosition) => {
                this.setState({
                  nodalofficer: itemValue,
                  choosenIndex2: itemPosition,
                });
              }}>
              <Picker.Item label="Select" value="Select" />
              {NodalNode}
              {/* {this.state.filelistnodalofficer.filter((park, i) => {
                    if (this.state.choosenIndex === i) {
                      return (
                        <Picker.Item
                          key={i}
                          value={park.OFFICER_NAME}
                          label={park.OFFICER_NAME}
                        />
                      );
                    } 
                    else {
                      return <Picker.Item label="Select " value="Select" />;
                    }
                  })} */}
            </Picker>
          </View>
          <Text style={styles.label}>
            Concerned Nodal Officer Serial Number
          </Text>
          <View style={styles.inputText}>
            <Picker
              selectedValue={this.state.nodalofficerserialnumber}
              onValueChange={(itemValue, itemPosition) =>
                this.setState({
                  nodalofficerserialnumber: itemValue,
                  choosenIndex2: itemPosition,
                })
              }>
              <Picker.Item label="Select" value="Select" />
              {officer.map((park, i) => {
                if (this.state.choosenIndex === i) {
                  return (
                    <Picker.Item
                      key={i}
                      value={park.SerialNo}
                      label={park.SerialNo}
                    />
                  );
                } else {
                  return <Picker.Item label="Select " value="Select" />;
                }
              })}
            </Picker>
          </View>
          <View style={{marginTop: 20}}>
            <View flexDirection="row">
              <FlatList
                data={filelist}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                extraData={this.state}
              />
            </View>
            <View>
              <TouchableOpacity onPress={this.onclick}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    width: '50%',
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../Images/camera.png')}
                    style={{
                      width: 50,
                      height: 50,
                    }}></Image>
                  <Text style={{fontWeight: 'bold', left: 5}}>
                    Choose Photo
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
              <Text style={styles.buttontext}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
    marginTop: 6,
  },
  inputText: {
    color: 'black',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
    paddingLeft: 10,
  },
  block: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  button: {
    width: 170,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'rgb(30,144,255)',
    color: '#2E3292',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttontext: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#ffffff',
  },
});
