import React, { Component  } from 'react';
import ImagePicker from 'react-native-image-picker';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default class otpgeneration extends Component {
  
  render() {
    return (
      <View style = {styles.container}>
      {/* <Camera
         ref = {(cam) => {
            this.camera = cam;
         }}
         style = {styles.preview}
         aspect = {Camera.constants.Aspect.fill}>
      </Camera> */}
      <Text >CAPTURE</Text>
   </View>
      );
      }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
 },
 preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
 },
 capture: {
    fontSize: 30,
    color: 'red',
    alignSelf: 'center',
 }
});

