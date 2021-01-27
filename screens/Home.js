import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import { Card, Container, Header, Content, Form, Item, Input, Label } from 'native-base';


export default class Homescreen extends React.Component {
 
  render(){
    return (
      <>
      <Header></Header>
      <View style={styles.container}>

   <Text style={styles.logo}>DDA311</Text>
              <Image     style={{width:170,height:170,marginBottom:30}} source={require("../Images/Logo2.jpeg")} />

        
       
        <TouchableOpacity style={styles.loginBtn}    onPress={()=>this.props.navigation.navigate('Login') }>
          <Text style={styles.loginText}>LOGIN AS USER</Text>
        </TouchableOpacity>
        <TouchableOpacity     style={styles.loginBtn}     onPress={()=>this.props.navigation.navigate('Login') }>
          <Text style={styles.loginText}>LOGIN AS AUTHERITY</Text>
        </TouchableOpacity>
         {/* <StickyHeaderFooterScrollView
      renderStickyHeader={() => (
        <View >
          <Text>{`I'm a sticky header`}</Text>
        </View>
      )}
      renderStickyFooter={() => (
        <View >
          <Text>{`I'm a sticky footer`}</Text>
        </View>
      )}
    >
      <View style={{ height: 20, backgroundColor: '#eee' }}>
        <Text>View made scrollable</Text>
      </View>
    </StickyHeaderFooterScrollView> */}
   
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#004CA1",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    // backgroundColor:"#465881",
    borderColor:"#004CA1",
    borderWidth:2,
    // borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#004CA1"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#004CA1",
    // borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
});