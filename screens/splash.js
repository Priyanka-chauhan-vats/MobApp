import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert, ImageBackground,Image,AsyncStorage,ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

export default class splashScreen extends Component {

componentDidMount () {
    setTimeout(() => {
    //  this._retrieveData();
     this.props.navigation.replace("drowerss");
    
    }, 5000)
  }

  render() {
    return (
      // <LinearGradient colors={['#feada6', '#f5efef']} style={styles.linearGradient}>
      <View style={styles.container} >
     
      {/* <Image source={require("../Images/Logo2.jpeg")} /> */}
    {/* <Text style={{ height: 50, fontSize: 20, fontWeight: 'bold',marginTop:6}}>Door to Door</Text> */}
 <LottieView style={{padding:15}}      source={require("../assests/20782-isometric-building-construction.json")} autoPlay loop />
     {/* <Text style={{ height: 50, fontSize: 20, fontWeight: 'bold',marginTop:6}}>DDA Projectsp</Text> */}

  </View>
  // </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30,
    backgroundColor:'white'
  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   headerStyle: {
    width: 150,
    height: 150,
  },
  linearGradient: {
    flex: 1,
    padding:5
  },
});