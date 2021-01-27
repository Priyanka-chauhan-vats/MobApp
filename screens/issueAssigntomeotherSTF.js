import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, TouchableHighlight, Modal, } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab, Right, Badge } from 'native-base';
import axios from 'axios';
import { baseurl } from '../screens/baseurl';
const grievance = baseurl + 'all_grivencelistotherthenstf';
const grievance2 = baseurl + 'all_grivencelistotherthenstfViewed';
const grievance3 = baseurl + 'all_workinprogressotehrthenstf'
export default class issueAssignByme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 6,
      notviewdata: [],
      viewdata: [],
      count1: 0,
      count2: 0,
      count3: 0
    }
    this.getDetails();
    this.getDetails2();
    this.getDetails3();
  }
  getDetails = () => {
    console.log("componentditmount")

    axios.get(grievance)
      .then(Response => {
        console.log('DATA got');
        // console.log(Response.data)

        this.setState({
          notviewdata: Response.data,

        })
        console.log(this.state.notviewdata)
        console.log(this.state.notviewdata.length)
        var notview = this.state.notviewdata.length
        // alert(notview)
        this.setState({
          count1: notview

        })
        // alert(this.state.count1)
        this.state.notviewdata.length = 0
        //  console.log(Response.data);
        //console.log(this.state.rows);
        console.log('G');
        console.log("value")
        console.log(this.state.count1)
        //  this.render()
      })
      .catch(err => {
        console.log('Error is ' + err);
      })



  };
  getDetails2 = () => {
    console.log("componentditmount")

    axios.get(grievance2)
      .then(Response => {
        console.log('DATA got');
        // console.log(Response.data)

        this.setState({
          viewdata: Response.data,

        })

        console.log(this.state.viewdata.length)
        var view = this.state.viewdata.length
        // alert(notview)
        this.setState({
          count2: view

        })
        // alert(this.state.count2)
        this.state.viewdata.length = 0
        //  console.log(Response.data);
        //console.log(this.state.rows);
        console.log('G');
        console.log("value")
        console.log(this.state.count2)
        //  this.render()
      })
      .catch(err => {
        console.log('Error is ' + err);
      })
  };
  getDetails3 = () => {
    console.log("componentditmount")

    axios.get(grievance3)
      .then(Response => {
        console.log('DATA got');
        // console.log(Response.data)

        this.setState({
          workdata: Response.data,

        })

        console.log(this.state.workdata.length)
        var view = this.state.workdata.length
        // alert(notview)
        this.setState({
          count3: view

        })
        // alert(this.state.count2)
        this.state.workdata.length = 0
        //  console.log(Response.data);
        //console.log(this.state.rows);
        console.log('G');
        console.log("value")
        console.log(this.state.count3)
        //  this.render()
      })
      .catch(err => {
        console.log('Error is ' + err);
      })



  };

  render() {

    return (
      <Container>
        {/* <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Add Remarks</Text>
                <View style={styles.textAreaContainer} >
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Add Remarks"
            // value='shamli'
            placeholderTextColor="black"
            numberOfLines={40}
            multiline={true}
          />
          </View>
          <View style={{flexDirection:'row'}}>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" ,width:'40%',marginRight:20}}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3",width:'40%',marginRight:10,marginLeft:20 }}
                 
                >
                  <Text style={styles.textStyle}>Assign</Text>
                </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>*/}
        <SafeAreaView style={styles.container2}>
          <View >
            <TouchableOpacity
              style={styles.touchableOpacityStyle}>
              <Image
                source={require("../Images/chart2.jpeg")}
                style={styles.floatingButtonStyle}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <View style={styles.container}>

          <View   >
          <TouchableOpacity    onPress={() =>this.props.navigation.navigate("actionNodalofcotherSTF")}>
              <Card style={{ width: 400, marginTop: -3 }} >
                <CardItem style={{ backgroundColor: '#FFFFF' }}>
                  <Text style={{
                    color: "#545454", fontWeight: 'bold', fontSize: 16, justifyContent: 'center', width: '90%',
                    paddingHorizontal: 10, paddingVertical: 10
                  }} >
                    New (Action Not Taken)[Not Viewed]
                      </Text>

                  {/* <Right>
      
                      <Badge   style={{marginTop:10, }}>
                      <Text   style={{color: "#fff",fontSize: 13,fontWeight:'bold',padding:5,}}>4</Text>
                </Badge>
                </Right> */}
                  <Text>{this.state.count1}</Text>

                  <Right>
                    <View
                      style={{
                        backgroundColor: "#F94131",
                        width: 8,
                        height: 8,
                        borderRadius: 2,
                        marginLeft: 3,
                        marginRight: 10,
                        marginTop: 3,
                        marginBottom: 3
                      }}
                    />
                  </Right>

                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity    onPress={() =>this.props.navigation.navigate("actionNodalofcViewedotherSTF")}>
              <Card style={{ width: 400, marginTop: -3 }} >
                <CardItem style={{ backgroundColor: '#FFFFF' }}>
                  <Text style={{
                    width: '90%', color: "#545454", fontWeight: 'bold', fontSize: 16,
                    justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 10
                  }} >
                    New (Action Not Taken)[ Viewed]
                      </Text>
                  <Text>{this.state.count2}</Text>

                  <Right>
                    <View
                      style={{
                        backgroundColor: "#00968B",
                        width: 8,
                        height: 8,
                        borderRadius: 2,
                        marginLeft: 3,
                        marginRight: 10,
                        marginTop: 3,
                        marginBottom: 3
                      }}
                    />
                  </Right>

                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("ReopenSTF")}>
              <Card style={{ width: 400, marginTop: -3 }} >
                <CardItem style={{ backgroundColor: '#FFFFF' }}>
                  <Text style={{ width: '90%', color: "#545454", fontWeight: 'bold', fontSize: 16, justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 10 }} >
                    Re-Open
                      </Text>
                  <Text >5</Text>

                  <Right>
                    <View
                      style={{
                        backgroundColor: "#DF508D",
                        width: 8,
                        height: 8,
                        borderRadius: 2,
                        marginLeft: 3,
                        marginRight: 10,
                        marginTop: 3,
                        marginBottom: 3
                      }}
                    />
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate("workinprogressotherthenstf")}>
              <Card style={{ width: 400, marginTop: -3 }} >
                <CardItem style={{ backgroundColor: '#FFFFF' }}>

                  <Text style={{ width: '90%', color: "#545454", fontWeight: 'bold', fontSize: 16, justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 10 }} >
                    Work In Progress
                      </Text>
                  <Text >{this.state.count3}</Text>

                  <Right>
                    <View
                      style={{
                        backgroundColor: "blue",
                        width: 8,
                        height: 8,
                        borderRadius: 2,
                        marginLeft: 3,
                        marginRight: 10,
                        marginTop: 3,
                        marginBottom: 3
                      }}
                    />
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
            {/* <TouchableHighlight
             
             onPress={() => {
               setModalVisible(true);
             }}
           >
                      <Card style={{ width:400,marginTop:-3}} >
                        <CardItem style={{ backgroundColor: '#FFFFF'}}>
                          <Text style={{ width:'80%',color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                          paddingHorizontal:10,paddingVertical:10 }}>
               Interim
                      </Text>
                      <Right>
                      <Badge info style={{marginTop:10,backgroundColor:'#32C4D6'}}>
                      <Text   style={{color: "#fff",fontSize: 13,fontWeight:'bold',padding:5}}>4</Text>
                      </Badge>
                      </Right>
                        </CardItem>
                       
                      </Card>
                      </TouchableHighlight>*/}
          </View>
        </View>
      </Container>
    );
  }
}


//   render(){
//     const state = this.state;
// const Workflow = ({ navigation }) => {
//   const [modalVisible, setModalVisible] = useState(false);


//}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#E8E8E8',
    alignItems: 'center',
  },
  text: { margin: 6 },
  touchableOpacityStyle: {
    // position: 'absolute',
    // width: 50,
    // height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // right: 30,
    // bottom: 30,
  },
  floatingButtonStyle: {
    // resizeMode: 'contain',
    width: 230,
    height: 200,
    //backgroundColor:'black'
  },
  container2: {
    // flex: 1,
    backgroundColor: 'white',
    padding: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#E8E8E8',
    width: "70%",
    // borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 10,
    padding: 10,
    elevation: 2
    ,
    marginTop: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18
  },
  textAreaContainer: {
    borderColor: "black",
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    textAlignVertical: 'top',
    backgroundColor: 'white',
    // justifyContent:"center",
    height: 100,
  },
  textArea: {
    height: 50,
    textAlignVertical: 'top',

  },
});
  // export default  Workflow