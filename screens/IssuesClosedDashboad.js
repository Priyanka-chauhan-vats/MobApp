import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image ,SafeAreaView,Alert, TouchableHighlight, Modal,} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab } from 'native-base';

// export default class IssuesClosed extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
         
//         }
//       }
const IssuesClosed = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    
//   render(){
    // const state = this.state;
    return (
    <Container>
          <Modal
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
    </Modal>
           <SafeAreaView style={styles.container2}>
      <View style={styles.container2}>
             <TouchableOpacity
                           style={styles.touchableOpacityStyle}>
                   <Image
                       source={require("../Images/chart4.jpeg")}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
          
       <View style={styles.container}>
           
              <View   >
              <TouchableOpacity    onPress={() => navigation.navigate('Reslovedd')}>
                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>
                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',paddingHorizontal:10,paddingVertical:10 }} >
                  Resolved
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
           
              <TouchableHighlight
       
       onPress={() => {
         setModalVisible(true);
       }}
     >
                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>
                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',paddingHorizontal:10,paddingVertical:10 }} >
No Action Required/Filled
                </Text>
                  </CardItem>
                </Card>
                </TouchableHighlight>
                <TouchableOpacity    onPress={() => navigation.navigate("closed")}>

              
                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>
                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',paddingHorizontal:10,paddingVertical:10 }} >
                  Closed
                </Text>
                  </CardItem>
                </Card>
               </TouchableOpacity>
              
                </View>
           </View>
          </Container>
            );
  }


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#E8E8E8' ,
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
      width: 200,
      height: 200,
      //backgroundColor:'black'
    },
    container2: {
      // flex: 1,
      backgroundColor: 'white',
      padding: 0,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: '#E8E8E8',
        width:"70%",
        // borderRadius: 20,
        padding:10,
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
        marginTop:10
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight:'bold',
        fontSize:18
      },
      textAreaContainer: {
        borderColor:"black",
        width:"100%",
        borderRadius:5,
        borderWidth: 1,
        padding: 5,
        marginTop:10,
        textAlignVertical:'top',
        backgroundColor:'white',
        // justifyContent:"center",
        height:100,
      },
      textArea: {
        height: 50,
        textAlignVertical:'top',
       
      },
  });
  
  export default  IssuesClosed