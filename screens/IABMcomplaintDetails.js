import React, { Component } from "react";
import { StyleSheet, Image,SafeAreaView } from "react-native";
import {
  Container,
  Header,
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
const paper =require("../Images/images1.jpg");

export default class IABMcomplaintDetails extends Component {
  //Screen2 Component
  render() {
    return (
      <  Container   style={styles.linearGradient}>
      
     
      <ScrollView>
      {/* <Content> */}
      <TouchableOpacity    onPress={() => this.props.navigation.navigate("details",2)}>

      <Card style={styles.mb}   className=" shadow border-0 ">
         <CardItem >
       <Body className="px-lg-3 py-lg-3">
       <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={paper} 
       style={styles.image}   className="responsiveImg "  />
     <View style={{width:"60%",paddingHorizontal:3}}>
     <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5,color:'blue'}} 
          >Meenakshi Ahuja
          </Text>
        <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Compalint#:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">202021006217
          </Text>
          </View>
          
      
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Type of Compalint:Repair of DDA flats
          </Text>
         
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
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Submitted Date:
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">29-6-2020
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Zone
          </Text>
          <Text style={{fontSize:15,marginLeft:1}} 
          className="text-muted">DDA
          </Text>
          </View>
          <View  style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,fontWeight:'bold',marginLeft:5}} 
          >Ward
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
        <Card style={styles.mb}   className=" shadow border-0 ">
         <CardItem  style={{ backgroundColor: '#FFFFF'}}>
       <Body className="px-lg-3 py-lg-3">
   <View>
        <Text style={{ color:"black" ,fontWeight:'bold',fontSize:18}}>
                Description
                </Text>
                
                <Text>
                  there are shopes in garages address QU192b and C.In road side two very big sheds o road.both doing tailor and stiches
                  clothes.there is machine its very noise
                </Text>
              
          </View>
   </Body>
       </CardItem>
        </Card>
    
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
              Meenakshi Ahuja
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
        {/* <Card style={styles.mb}   className=" shadow border-0 ">
        
       <CardItem>
       <TouchableOpacity style={{ alignItems:'center' ,alignSelf:'center'  , marginTop:5,justifyContent:'center'}} onPress={() => this.props.navigation.navigate("sendComments")}>
       <Text style={{     alignContent:'center'  ,   color:"blue" ,fontWeight:'bold',fontSize:18,marginTop:5,justifyContent:'center',textAlign:'center'}}>
    Send Comments</Text>
</TouchableOpacity>
       </CardItem>
        </Card>  */}
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
        <SafeAreaView style={styles.container}>
      <View style={styles.container}>
     
        <TouchableOpacity
         //  activeOpacity={0.7}
         onPress={() => this.props.navigation.navigate("IABMfloating")}
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
    padding: 10,
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
    width:"30%",
    height:120,
   //  marginTop:10,
    alignSelf:'stretch',
    backgroundColor:'white',
    // flexDirection: 'row',
    flex:1
 
 
    // alignSelf:'center'
  },
});