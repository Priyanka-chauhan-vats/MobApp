import React, { Component } from "react";
import { StyleSheet, Image,SafeAreaView,AsyncStorage } from "react-native";
import {
  Container,
  Header,List,ListItem
  ,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,View,
  Right
} from "native-base";
import { ScrollView,TouchableOpacity } from "react-native-gesture-handler";
import { Block } from "galio-framework";
import Map from './Map';
import axios from 'axios';
import { baseurl } from '../screens/baseurl';
const grievance = baseurl +'grievanceviewdetails';

const paper =require("../Images/images1.jpg");

export default class CompaintdetailsViewed extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        status: this.props.navigation.state.params[0],
        id:this.props.navigation.state.params[1],
        data: [],
      
        idd:''


    };
    // console.log(this.props); 
    console.log("complaint value")

    console.log(this.props.navigation.state.params[1]);
    console.log(this.props.navigation.state.params[0]);

   
    this.PostAPI();

this.UserNameStr();

}
message=()=>{
  alert("Details Submit")
}
UserNameStr = async SK => {
  try {
      await AsyncStorage.setItem('USER_KEYID', this.state.id)
      const UserName = await AsyncStorage.getItem('USER_KEYID')
      console.log('Value is ' + ' ' + UserName);
  } catch (e) {
      alert('Failed to fetch User.')
  }
}
PostAPI = () => {
  const datad = { _id: this.props.navigation.state.params[1] }
  axios.post(grievance, datad)
  .then(Response => {
      console.log('DATA got');
      console.log(Response.data)
      this.setState({
        data:Response.data.data,
      })
  
      console.log('details');
     
    })
    .catch(err => {
      console.log('Error is ' + err);
    })
}
  render() {
    const data=this.state.data
    console.log(data)
    return (
      <  Container   style={styles.linearGradient}>
      
     
      <ScrollView>
      {/* <Content> */}
      
        <View >
            {
               data.map((item, index) => (
                 <View   key = {item._id}
                 style = {styles.container}>
                 
                
                   
                 <TouchableOpacity >

<Card style={styles.mb}   className=" shadow border-0 ">
   <CardItem >
 <Body className="px-lg-3 py-lg-3">
 <View style={{ flexDirection: 'row',marginRight:60}}>
  <Image source={paper} 
 style={styles.image}   className="responsiveImg "  />
<View style={{width:"60%",paddingHorizontal:3}}>
<Text style={{fontSize:15,fontWeight:'bold',marginLeft:5,color:'blue'}} 
    >{item.NameofComplainant}
    </Text>
  <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Compalint#:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">{item._id}
    </Text>
    </View>
    

    <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Type of Compalint:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">{item.complaint}
          </Text>
          </View>
   
    <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Status:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">Assigned
    </Text>
    </View>
    <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Tag:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">Action not Taken
    </Text>
    </View>
    {/* <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Submitted Date:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">29-6-2020
    </Text>
    </View> */}
    <View  style={{flexDirection:'row'}}>
   <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
    >Zone:
    </Text>
    <Text style={{fontSize:15,marginLeft:1}} 
    className="text-muted">{item.JurisdictionOrgComplaint}
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
   </View>
  </View>
  </Body>
 </CardItem>
  </Card>
 
  </TouchableOpacity>
  
                    
                  </View>
               ))
            }
         </View> 
         <View >
            {
               data.map((item, index) => (
                 <View   key = {item._id}
                 style = {styles.container}>
 <Card style={styles.mb}   className=" shadow border-0 ">
         <CardItem  style={{ backgroundColor: '#FFFFF'}}>
       <Body className="px-lg-3 py-lg-3">
   <View>
        <Text style={{ color:"black" ,fontWeight:'bold',fontSize:18}}>
                Description
                </Text>
                
                <Text>
                 {item.ComplaintDescrption}
                </Text>
              
          </View>
   </Body>
       </CardItem>
        </Card>
                   </View>
                    ))
            }
                 </View>
                 <View >
            {
               data.map((item, index) => (
                 <View   key = {item._id}
                 style = {styles.container}>
                    <Card style={styles.mb}   className=" shadow border-0 ">
         <CardItem  style={{ backgroundColor: '#FFFFF'}}>
       <Body className="px-lg-3 py-lg-3">
   <View>
        <Text style={{ color:"black" ,fontWeight:'bold',fontSize:18,marginBottom:10}}>
               Action Taken
                </Text>
                <View flexDirection="row">
                <Text style={{color:'blue',width:'50%'}}>
                Submitted Date
                </Text>
              <Text>
                06-oct-2020
              </Text>
                </View>
                <View flexDirection="row">
                <Text style={{color:'blue',width:'50%'}}>
               From
                </Text>
              <Text>
               Rohan 
              </Text>
                </View>
                <View flexDirection="row">
                <Text style={{color:'blue',width:'50%'}}>
             To
                </Text>
              <Text>
              Vikas Kumar 
              </Text>
                </View>
                <View>
        <Text style={{ color:"black" ,fontWeight:'bold',fontSize:18}}>
                Comments
                </Text>
                <Text style={{ color:"blue" ,fontWeight:'bold',fontSize:15,marginTop:5}}>
                {item.NameofComplainant}
                </Text>
                <Text>
                  Your complain has been registered.
                  Compalint:289786316862  ..
                    Thank you
                </Text>
              
          </View>
          <View flexDirection="row">
                <Text style={{color:'blue',width:'50%',fontWeight:'bold'}}>
             Status
                </Text>
              <Text>
              Assigned
              </Text>
                </View>
          </View>
   </Body>
       </CardItem>
        </Card>
       
                   </View>
               ))
  }
  </View>
    
        <Card style={styles.mb}   className=" shadow border-0 ">
        
       <CardItem>
       <TouchableOpacity style={{ alignItems:'center' ,alignSelf:'center'  , marginTop:5,justifyContent:'center'}} onPress={() => this.props.navigation.navigate("sendComments")}>
       <Text style={{     alignContent:'center'  ,   color:"blue" ,fontWeight:'bold',fontSize:18,marginTop:5,justifyContent:'center',textAlign:'center'}}>
    Send Comments</Text>
</TouchableOpacity>
       </CardItem>
      
        </Card> 
<Card>
       <List>
            <ListItem avatar>
              <Left>
              <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnsgq3waTxC12c6j5aWFupIbk-JET2GAH7aQ&usqp=CAU' }} />

              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnsgq3waTxC12c6j5aWFupIbk-JET2GAH7aQ&usqp=CAU' }} />

              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnsgq3waTxC12c6j5aWFupIbk-JET2GAH7aQ&usqp=CAU' }} />

              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          </Card>
    
        <Card style={styles.mb}   className=" shadow border-0 ">
        
        <CardItem>
        <TouchableOpacity style={{ alignItems:'center' ,alignSelf:'center'  , marginTop:5,justifyContent:'center'}} 
        onPress={() => this.props.navigation.navigate("map")}>
        <Text style={{     alignContent:'center'  ,   color:"blue" ,fontWeight:'bold',fontSize:18,marginTop:5,justifyContent:'center',textAlign:'center'}}>
  View Map</Text>
 </TouchableOpacity>
        </CardItem>
         </Card> 
       
        {/* <Card style={styles.mb}   className=" shadow border-0 ">
        
        <CardItem>
          <Map/>
          </CardItem>
        </Card> */}
            {this.state.status===2 ?

        <SafeAreaView style={styles.container}>
      <View style={styles.container}>
     
        <TouchableOpacity
         //  activeOpacity={0.7}
         onPress={() => this.props.navigation.navigate("floating")}
          style={styles.touchableOpacityStyle}>
         
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            // }}
            // For local image
            source={require("../Images/floting.png")}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    :null}
    {this.state.status===1 ?
        <TouchableOpacity style={styles.loginBtn}  onPress={this.message} >
      <Text style={styles.loginText}>SUBMIT</Text>
        </TouchableOpacity>
        :null}
      
      {/* </Content> */}
      </ScrollView>
    </Container>
    );
  }
}
 
const styles = StyleSheet.create({

  mb: {
    marginBottom: 2
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 2,
  },
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
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  linearGradient: {
    
    justifyContent:'center',
    alignContent:'center',
    padding:5,
    backgroundColor: '#E8E8E8'  },

    image:{
      width:"10%",
      height:120,
     
      backgroundColor:'white',
     
      flex:1,
      marginLeft:-15
    
    },
  loginBtn:{
    width:"60%",
    backgroundColor:"#004CA1",
    borderRadius:25,
    height:50,
    alignItems:"center",
    alignSelf:'center',
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
});