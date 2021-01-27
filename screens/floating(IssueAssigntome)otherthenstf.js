import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image,SafeAreaView,TouchableHighlight, Modal,AsyncStorage } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab } from 'native-base';
const BooknowBHK1 = [];
class floatingIATMothertenstf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          // id:this.props.navigation.state.params,
          modalVisible:false
         
        }
        // console.log(this.props.navigation.state.params);

      }
      render(){
        return (
          <Container>
              <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
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
                    this.setState({modalVisible:false
                    });
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
         
             <View style={styles.container}>
      
                  
                    <View >
                    {/* <TouchableOpacity    onPress={() => navigation.navigate('ClickonTransfer')}> */}
                  <TouchableOpacity  onPress={() => this.props.navigation.navigate('ClickonTransferOtherthenstf')}>  
      
      <Card style={{ width:400,marginTop:-3}} >
        <CardItem style={{ backgroundColor: '#FFFFF'}}>
      
        <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
        paddingHorizontal:10,paddingVertical:5 }} >
      Transfer
      </Text>
        </CardItem>
      </Card>
      </TouchableOpacity>
      <TouchableHighlight
             
             onPress={() => {
              this.setState({
                modalVisible:true
              });
             }}
           >
  
                      <Card style={{ width:400,marginTop:-3}} >
                        <CardItem style={{ backgroundColor: '#FFFFF'}}>
      
                        <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                        paddingHorizontal:10,paddingVertical:5 }} >
      No Action Required/Field
                      </Text>
                        </CardItem>
                      </Card>
                      </TouchableHighlight>
                  <TouchableOpacity  onPress={()=>this.props.navigation.navigate(" workinprogressotherthenstf")}>

             
                      <Card style={{ width:400,marginTop:-3}} >
                        <CardItem style={{ backgroundColor: '#FFFFF'}}>
      
                        <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                        paddingHorizontal:10,paddingVertical:5 }} >
                          Work in progress
                      </Text>
                        </CardItem>
                      </Card>
                      </TouchableOpacity>
                      <TouchableOpacity    onPress={() => this.props.navigation.navigate('sendComments')}>
                      <Card style={{ width:400,marginTop:-3}} >
                        <CardItem style={{ backgroundColor: '#FFFFF'}}>
      
                        <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                        paddingHorizontal:10,paddingVertical:5 }} >
                          Comment
                      </Text>
                        </CardItem>
                      </Card>
                      </TouchableOpacity>
                                 
                                    <TouchableOpacity    onPress={() => this.props.navigation.navigate('Reslovedd')}>
                      <Card style={{ width:400,marginTop:-3}} >
                        <CardItem style={{ backgroundColor: '#FFFFF'}}>
      
                          <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                          paddingHorizontal:10,paddingVertical:5 }}>
                  Resloved
                      </Text>
                        </CardItem>
                      </Card>
                      </TouchableOpacity>
                      <TouchableOpacity    onPress={() =>this.props.navigation.navigate('Listofgenralcomplaint')}>
      
                        <Card style={{ width:400,marginTop:-3}} >
                        <CardItem style={{ backgroundColor: '#FFFFF'}}>
      
                          <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                          paddingHorizontal:10,paddingVertical:5 }}>
              Print work Orders
                      </Text>
                        </CardItem>
                      </Card>             
                        
                     </TouchableOpacity>
       
                      <SafeAreaView style={styles.container2}>
            <View style={styles.container2}>
           
              <TouchableOpacity
               //  activeOpacity={0.7}
               onPress={() =>this.props.navigation.navigate("details")}
                style={styles.touchableOpacityStyle}>
               
                <Image
                 
                  source={require("../Images/cross.jpg")}
                  style={styles.floatingButtonStyle}
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          </View>
                </View>
                </Container>
              
         
          
            
          );
        
      }
}


// const floating = ({ navigation }) => {
  
//   const [modalVisible, setModalVisible] = useState(false);
// this.UserNameStr();
  // }
//}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#E8E8E8' ,
alignItems: 'center',
},
container2: {
  flex: 1,
  backgroundColor: 'white',
  padding: 10,
},
floatingButtonStyle: {
  resizeMode: 'contain',
  width: 50,
  height: 50,
  //backgroundColor:'black'
},
touchableOpacityStyle: {
  // position: 'absolute',
  // width: 50,
 // height: 20,
  alignItems: 'center',
  justifyContent: 'center',
  // right: 30,
  // bottom: 30,
},
    text: { margin: 6 },
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
  


  export default  floatingIATMothertenstf