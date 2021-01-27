import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab,Toast, Root } from 'native-base';

export default class Viewallothercomplaint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
    
  render(){
    const state = this.state;
    return (
    <Container>
        {/* <Header>
            <Text  style={{ color:'white', fontWeight: 'bold',fontSize:20,marginTop:15,marginRight:300 }}>Other</Text>
        </Header> */}
        <Root>
    
  
       <View style={styles.container}>

            
              <View >
              <TouchableOpacity      onPress={() =>
              this.props.navigation.navigate("userviewacomplaintotherthenstf")
            }
            >


<Card style={{ width:400,marginTop:-3}} >
  <CardItem style={{ backgroundColor: '#FFFFF'}}>

  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
  paddingHorizontal:10,paddingVertical:5 }} >
All
</Text>
  </CardItem>
</Card>
</TouchableOpacity>
<TouchableOpacity      onPress={() =>
              this.props.navigation.navigate("userassignedcomplaintotherthenstf")
            }
            >

                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:5 }} >
Assigned
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity      onPress={() =>
              this.props.navigation.navigate("userreopencompalintotherstf","Re-open")
            }
            >
                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:5 }} >
                Re-Open
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                {/* <TouchableOpacity      onPress={() =>
              this.props.navigation.navigate("userreopencompalintotherstf","On Hold")
            }
            >
                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:5 }} >
            On Hold
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity> */}
                {/* <TouchableOpacity      onPress={() =>
              Toast.show({
                text: "Data is Not Available",
                textStyle: { color: "yellow" },
                buttonText: "Okay"
              })
            }
            >
             <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:5 }} >
          Resolved
                </Text>
                  </CardItem>
                </Card> 
                </TouchableOpacity> */}
                {/* <TouchableOpacity      onPress={() =>
              this.props.navigation.navigate("userreopencompalintotherstf","Work in Progress")
            }
            >
             <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  
                  paddingHorizontal:10,paddingVertical:5 }} >
                   Work in Progress
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity> */}
                {/* <TouchableOpacity      onPress={() =>
              Toast.show({
                text: "Data is Not Available",
                textStyle: { color: "yellow" },
                buttonText: "Okay"
              })
            }
            >
         <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                    <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                    paddingHorizontal:10,paddingVertical:5 }} >
               Acknowledged
                </Text>
                  </CardItem>
                </Card> 
                </TouchableOpacity> */}
                {/* <TouchableOpacity      onPress={() =>
              this.props.navigation.navigate("userreopencompalintotherstf","Closed")
            }
            >

                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                    <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                    paddingHorizontal:10,paddingVertical:5 }}>
        Closed
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity> */}
                {/* <TouchableOpacity      onPress={() =>
              this.props.navigation.navigate("userreopencompalintotherstf","Un-Assigned")
            }
            >
                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                    <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                    paddingHorizontal:10,paddingVertical:5 }}>
           New / Un-Assigned
                </Text>
                  </CardItem>
                </Card> 
                </TouchableOpacity> */}
                {/* <TouchableOpacity      onPress={() =>
              this.props.navigation.navigate("userreopencompalintotherstf","Interim")
            }
            >            
                  <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                    <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                    paddingHorizontal:10,paddingVertical:5 }}>
       Interim
                </Text>
                  </CardItem>
                </Card> 
                   </TouchableOpacity>          */}
                   {/* <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                    <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                    paddingHorizontal:10,paddingVertical:5 }}>
                        Changes priority
                </Text>
                  </CardItem>
                </Card> */}
               
              
 
               
    </View>
          </View>
          </Root>
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