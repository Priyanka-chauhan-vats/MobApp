import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab } from 'native-base';

export default class IABMfloating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
      }
    
  render(){
    const state = this.state;
    return (
    <Container>
             <View style={styles.container}>
                          <View >
                          <TouchableOpacity    onPress={() => this.props.navigation.navigate('Listofgrievance')}>
                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:5 }} >
                 Print Work Order
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity           onPress={() => this.props.navigation.navigate("map")}>

                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:5 }} >
                    Map
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                              <SafeAreaView style={styles.container2}>
      <View style={styles.container2}>
     
        <TouchableOpacity
         //  activeOpacity={0.7}
         onPress={() => this.props.navigation.navigate("IABMcomplaintDetails")}
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
    text: { margin: 6 }
  });