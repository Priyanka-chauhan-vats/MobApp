import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image ,Alert, TouchableHighlight, Modal,AsyncStorage} from 'react-native';

import { Searchbar } from 'react-native-paper';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail,  } from 'native-base';
import { Dialog } from 'react-native-simple-dialogs';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { baseurl } from '../screens/baseurl';
const grievance = baseurl +'grievancedetailsotherthenstf'; 
const workonprogress = baseurl +'grievanceworkonProgressotherthenstf';

 class NodalOfficersOyherthenstf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    modalVisible:false,
    filelist: [],
    idd:'',
    remarks:'',
  
              name:'',
              mobile:'',
              address:'',
              complaintCategory:'',
              complaintype:'',
              ComplaintDescrption:""
   

    }
    // console.log(this.props.navigation.state.params);
    this.UserNameStr();

  }
  state={
    
  }
  UserNameStr = async SK => {
    try {
        // await AsyncStorage.setItem('USER_KEYID', this.state.id)
        const UserName = await AsyncStorage.getItem('USER_KEYID')
        console.log('Value is ' + ' ' + UserName);
        this.setState(
          {
            status:UserName
          }
        )
        alert(UserName)
        this.PostAPI();

    } catch (e) {
        alert('Failed to fetch User.')
    }
  }
  PostAPI = () => {
    const datad = { _id: this.state.status }
    axios.post(grievance, datad)
    .then(Response => {
        console.log('DATA got');
        console.log(Response.data)
        this.setState({
          filelist:Response.data.data,
         
        })
    
        console.log('details');
        // console.log(this.state.filelist)
        const dataa=this.state.filelist
        {
          dataa.map((item,index)=>(
            this.setState( {
              idd:item._id,
              name:item.NameofComplainant,
              mobile:item.MobileNumber,
              address:item.Address,
              complaintCategory:item.complaintCategory,
              complaintype:item.complaintype,
              ComplaintDescrption:item.ComplaintDescrption,
             
        
            
            })
           
          )
          )
        }
       
        // console.log(this.state.name)
       //  this.render()
      })
      .catch(err => {
        console.log('Error is ' + err);
      })
  }
  handleSubmit= ( ) => {
     // const dataahhh = this.state;
     console.log('state data');
    
     console.log("view table")
     console.log(this.state.idd)
     console.log(this.state.name)
     console.log(this.state.address)
     const form1Obj = {
   
       _id:this.state.idd,
    NameofComplainant: this.state.name,
   MobileNumber: this.state.mobile,
    complaintCategory:this.state.complaintCategory,
    complaintype:this.state.complaintype,
    Address:this.state.address,
    ComplaintDescrption:this.state.ComplaintDescrption,
       remarks:this.state.remarks
       // Photo:data
       // Photo:this.state.filelist.url
     }
     console.log(form1Obj)
     axios.post(workonprogress, form1Obj)
     .then(Response => {
         console.log('DATa saveed');
         console.log(Response)
         
     alert("complaint transfer");
         console.log('details');
         // console.log(this.state.name)
       })
       .catch(err => {
         console.log('Error is ' + err);
       })
   }
   handleRemarksChange = event => {
    this.setState({
    remarks: event.nativeEvent.text
    });
  }
  
  render(){
    return (
   
      // <View style={styles.centeredView}>
    
        <Container >
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
        onChange={this.handleRemarksChange} 

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
            <TouchableHighlight   onPress={this.handleSubmit} 
              style={{ ...styles.openButton, backgroundColor: "#2196F3",width:'40%',marginRight:10,marginLeft:20 }}
             
            >
              <Text style={styles.textStyle}>Assign</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
            <View  style={{padding:5}}>
      <Searchbar
      style={{borderWidth:1}}
        placeholder="Search here"
      
      //   value={searchQuery}
      />
      </View>
      <Content>
            <List>
            {/* <TouchableOpacity    onPress={() => this.props.navigation.navigate("NodalOfficers")}> */}
           
              <ListItem avatar>
              
                <Left>
                  <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnsgq3waTxC12c6j5aWFupIbk-JET2GAH7aQ&usqp=CAU' }} />
                </Left>
              
                <Body >
                <TouchableHighlight
          onPress={() => {
            this.setState({
              modalVisible:true
            });
           }}
          >
                  <Text style={{color:"blue"}}> Sh.Kumar Pratik</Text>
                  </TouchableHighlight>
                  {/* <Text note>Doing what you like will always keep you happy . .</Text> */}
                  <View  style={{flexDirection:'row'}}>
           <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
            >Designation:
            </Text>
            <Text style={{fontSize:15,marginLeft:1}} 
            className="text-muted">Dy.SA
            </Text>
            </View>
                  <View  style={{flexDirection:'row'}}>
           <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
            >Authority:
            </Text>
            <Text style={{fontSize:15,marginLeft:1}} 
            className="text-muted">Archaeological of India
            </Text>
            </View>
            <View  style={{flexDirection:'row'}}>
           <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
            >Ward:
            </Text>
            <Text style={{fontSize:15,marginLeft:1}} 
            className="text-muted">North
            </Text>
            </View>
                </Body>
                {/* <Right>
                  <Text note>3:43 pm</Text>
                </Right> */}
              </ListItem>
             
            </List>
          </Content>
      </Container>
      
    );
  }
}

    // const [searchQuery, setSearchQuery] = React.useState('');
//     const NodalOfficers = () => {
//       const [modalVisible, setModalVisible] = useState(false);

//   //  onChangeSearch = query => setSearchQuery(query);
//   //  render(){
  
// };


const styles = StyleSheet.create({
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
export default NodalOfficersOyherthenstf

