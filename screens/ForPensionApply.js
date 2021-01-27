import React, { Component } from 'react';
import { Button, View, Image, Dimensions, StyleSheet, ImageBackground, AsyncStorage, FlatList } from 'react-native';
import {
    Container, Header, Title, Content, Card, CardItem, Thumbnail,
    Left, Right, Body, Footer, FooterTab, Form, Item, Input, Label, ActionSheet, Root, Picker,DatePicker,
} from "native-base";
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';

import { Block, Checkbox, Text, theme } from "galio-framework";
import InputOutline from 'react-native-input-outline';
import Textarea from 'react-native-textarea';
// import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get("screen");

const { width: WIDTH } = Dimensions.get('window');
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 }
];

export default class Pensionapply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    state = {
        choosenIndex: 0,
        filelist: []
    };
    onValueChange2 = value => {
        this.setState({
            selected2: value
        });
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
    renderItem = ({ item, index }) => {
        return (
            <View >
                <View style={{ marginTop: 20, flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 10, marginBottom: 10, width: 140, height: 100 }}>
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
            width: 300,
            height: 400,
            cropping: false,

        }).then(image => {

            this.onselectImage(image);
            console.log(image);
        });
    }
    choosePhotoLibary = () => {
        ImagePicker.openPicker({
            width: 300,
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

    render() {
        const { photo } = this.state
        let { filelist } = this.state
        return (

            <Block flex >

                <LinearGradient colors={['#6E7DDB', '#f5efef']}>
                    <View style={styles.block}>
                        <ScrollView>

                            <View  >

                                                              <Block style={{ padding: 5, marginTop: -25 }}>

                                    <InputOutline style={{ fontSize: 12, height: 45, }}
                                        placeholder=" Pension Branch"
                                        focusedColor='blue'
                                        defaultColor='grey'
                                    />
                                </Block>
                                <Block style={{ padding: 5, marginTop: -25 }}>
                                    <InputOutline style={{ fontSize: 12, height: 45 }}
                                        placeholder=" Visitor Name"
                                        focusedColor='blue'
                                        defaultColor='grey'
                                    />
                                </Block>
                                <Block style={{ padding: 0, marginTop: -20 }}>
                                    <InputOutline style={{ fontSize: 12, height: 48 }}
                                        placeholder=" Pensioner/Deceased Employee Name"
                                        focusedColor='blue'
                                        defaultColor='grey'
                                    />
                                </Block>

                                <Block style={{ padding: 0, marginTop: -20 }}>
                                    <InputOutline style={{ fontSize: 12, height: 48 }}
                                        placeholder="Post Held(retirement/death)"
                                        focusedColor='blue'
                                        defaultColor='grey'
                                    />
                                </Block>
                                <Block style={{ padding: 5, marginTop: -25 }}>
                                    <InputOutline style={{ fontSize: 12, height: 45 }}
                                        placeholder="PPO No., IF Any"
                                        focusedColor='blue'
                                        defaultColor='grey'
                                    />
                                </Block>
                                <Block style={{ padding: 5, marginTop: -25 }}>
                                    <InputOutline style={{ fontSize: 12, height: 45 }}
                                        placeholder="Mobile number"
                                        focusedColor='blue'
                                        defaultColor='grey'
                                    />
                                </Block>

                                <Block style={{ padding: 5, marginTop: -25 }}>
                                    <InputOutline style={{ fontSize: 12, height: 45 }}
                                        placeholder="Email Id "
                                        focusedColor='blue'
                                        defaultColor='grey'
                                    />

                                </Block>
                               
                                
                                <Block style={{ padding: 5, marginTop: -25, }}>
                                                                     <InputOutline style={{ fontSize: 12, height: 45 }}
                                        placeholder="Address"
                                        focusedColor='blue'
                                        defaultColor='grey'
                                        multiline={true}
                                    />
                                                                   </Block>
                                <Block style={{ padding: 5, marginTop: -25 }}>
                                    <InputOutline style={{ fontSize: 12, height: 45 }}
                                        placeholder="File No.,If Any"
                                        focusedColor='blue'
                                        defaultColor='grey'
                                    />

                                </Block>
                                <Block style={{ padding: 5, marginTop: -25 }}>
                                    <InputOutline style={{ fontSize: 12, height: 45 }}
                                        placeholder="Person/Branch Contacted"
                                        focusedColor='blue'
                                        defaultColor='grey'
                                    />

                                </Block>
                                <Block style={{ padding: 5, marginTop: -25 }}>
                                    <InputOutline style={{ fontSize: 12, height: 45 }}
                                        placeholder="Please Write Specific Query"
                                        focusedColor='blue'
                                        defaultColor='grey'
                                    />

                                </Block>
                                <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                                    <Text style={styles.text2} > Assembly </Text>
                                    <View style={styles.textInput}>
                                        <Item picker>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                selectedValue={this.state.selected2}
                                                onValueChange={this.onValueChange2}
                                            >
                                                <Picker.Item label="Select " value="Select" />

                                                <Picker.Item label="Rithala" value="0" />
                                                <Picker.Item label="Narela" value="1" />
                                                <Picker.Item label="Burari" value="2" />
                                                <Picker.Item label="Badli" value="3" />
                                                <Picker.Item label="Rohini" value="4" />
                                            </Picker>
                                        </Item>



                                    </View>
                                </Block>
                                <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                                    <Text style={styles.text2} > Ward </Text>
                                    <View style={styles.textInput}>
                                        <Item picker>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                               
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                selectedValue={this.state.selected2}
                                                onValueChange={this.onValueChange2}
                                            >
                                                <Picker.Item label="--Select ward-- " value="Select" />

                                                <Picker.Item label="Rithala" value="5" />
                                                <Picker.Item label="Vijaya Vihar" value="6" />
                                                <Picker.Item label="Burari" value="7" />
                                                <Picker.Item label="Badli" value="8" />
                                                <Picker.Item label="Rohini" value="9" />
                                            </Picker>
                                        </Item>
                                    </View>
                                </Block>
                               
                                <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                                    <Text style={styles.text2} >  Department </Text>
                                    <View style={styles.textInput}>
                                        <Item picker>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                placeholder="Select your SIM"
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                selectedValue={this.state.selected2}
                                                onValueChange={this.onValueChange2}
                                            >
                                                <Picker.Item label="Select " value="Select" />

                                                <Picker.Item label="CAO (Fin) Pension" value="10" />
                                                
                                            </Picker>
                                        </Item>
                                    </View>
                                </Block>
                                <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                                <Text style={styles.text2} >Last Visit Date</Text>
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
                    textStyle={{ color: "blue" }}
                    placeHolderTextStyle={{ color: "blue", fontSize: 15 }}
                    onDateChange={this.setDate}
                    disabled={false}
                  />

                </Item>
                </View>
                </Block>
                <Block style={{ borderBottomColor: '#356FE0', padding: 5 }}>
                                <Text style={styles.text2} >Request Date</Text>
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
                    textStyle={{ color: "blue" }}
                    placeHolderTextStyle={{ color: "blue", fontSize: 15 }}
                    onDateChange={this.setDate}
                    disabled={false}
                  />

                </Item>
                </View>
                </Block>

                   
                            </View>
                            <Text>{"\n"}{"\n"}</Text>
                        </ScrollView>
                    </View>
                </LinearGradient>

            </Block>

        );
    }
}
const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2, backgroundColor: 'white', fontSize: 12, width: "93%", borderColor: '#356FE0', height: 40,
        textAlignVertical: 'top', borderRadius: 10,

    },

    container: {
        backgroundColor: "#00008B"
    },
    textInput2: {
        borderWidth: 2, backgroundColor: 'white', fontSize: 12, width: "93%", borderColor: '#356FE0',
        textAlignVertical: 'top', borderRadius: 10,

    },
    text2: {
        width: '100%', fontSize: 16,
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
        paddingHorizontal: 5,
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
        alignItems: 'center',
        marginVertical: 20,
        // borderRadius: 20,
        paddingVertical: 12,
        backgroundColor: 'rgb(30,144,255)',
        color: '#2E3292',
        marginLeft: 5,

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
