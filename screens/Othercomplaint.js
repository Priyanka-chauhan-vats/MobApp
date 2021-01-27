import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab } from 'native-base';

export default class Othercomplaint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
      }
    
  render(){
    const state = this.state;
    return (
    <Container>
        {/* <Header>
            <Text  style={{ color:'white', fontWeight: 'bold',fontSize:20,marginTop:15,marginRight:300 }}>Other</Text>
        </Header> */}
   
       <View style={styles.container}>

            
              <View >
              <TouchableOpacity    onPress={() => this.props.navigation.navigate("Applyothercomplaint")}>


<Card style={{ width:400,marginTop:-3}} >
  <CardItem style={{ backgroundColor: '#FFFFF'}}>

  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
  paddingHorizontal:10,paddingVertical:5 }} >
Create New Complaint
</Text>
  </CardItem>
</Card>
</TouchableOpacity>
<TouchableOpacity    onPress={() => this.props.navigation.navigate("Viewallothercomplaint")}>

                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:5 }} >
View All Complaints
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
                {/* <TouchableOpacity    onPress={() => this.props.navigation.navigate("Feedbackthercomplaint")}>

                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:5 }} >
                  Write Feedback
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity> */}
                {/* <TouchableOpacity    onPress={() => this.props.navigation.navigate("Telephonic")}>

                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:5 }} >
            DDA Helpline
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity> */}
                {/* <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  paddingHorizontal:10,paddingVertical:5 }} >
            Note
                </Text>
                  </CardItem>
                </Card> */}
                {/* <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                  <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                  
                  paddingHorizontal:10,paddingVertical:5 }} >
                    Bookmarks
                </Text>
                  </CardItem>
                </Card> */}
                {/* <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                    <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                    paddingHorizontal:10,paddingVertical:5 }} >
                Need on side Inspection
                </Text>
                  </CardItem>
                </Card> */}
                              {/* <TouchableOpacity    onPress={() => this.props.navigation.navigate("Searchothercomplaint")}>

                <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                    <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                    paddingHorizontal:10,paddingVertical:5 }}>
        Search Complaint
                </Text>
                  </CardItem>
                </Card>
                </TouchableOpacity> */}
                {/* <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                    <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                    paddingHorizontal:10,paddingVertical:5 }}>
            On Hold
                </Text>
                  </CardItem>
                </Card>               */}
                  {/* <Card style={{ width:400,marginTop:-3}} >
                  <CardItem style={{ backgroundColor: '#FFFFF'}}>

                    <Text style={{ color:"#545454", fontWeight: 'bold', fontSize:16,justifyContent: 'center',
                    paddingHorizontal:10,paddingVertical:5 }}>
        Print work Orders
                </Text>
                  </CardItem>
                </Card>              */}
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