import React from 'react';
import { StyleSheet, Text, View, TextInput, Image ,Picker,FlatList} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Form, Item, Input,Textarea, Label,Button,} from 'native-base';

import { Block, Checkbox,  theme } from "galio-framework";


export default class tranferhistory extends React.Component {
   
     

    render() {
      
        return (
            <>
            <Container style={styles.container}>
               
                    <ScrollView style={{ marginTop: 20 }}>
                    

                    <Block style={{   padding: 5 }}>
                        <Block>
                            {/* <Image ></Image> */}
                    < Image style={{ width: '90%', height: 150  }} source={require("../Images/images1.jpg")} />
</Block>
                        <View style={{flexDirection:'row',marginTop:30}}>
<Text style={styles.text2} >Serial Number:- </Text>
<Text >8974598957 </Text>

</View>
<View style={{flexDirection:'row',marginTop:10}}>
<Text style={styles.text2} >Status:- </Text>
<Text >Assigned</Text>

</View>
<View style={{flexDirection:'row',marginTop:10}}>
<Text style={styles.text2} >Tranfer To:- </Text>
<Text >EDMC GRID 2 </Text>

</View>
<View style={{flexDirection:'row',marginTop:10}}>
<Text style={styles.text2} >Tranfer From:- </Text>
<Text > EDMC NODAL(Nodal)',</Text>

</View>
<View style={{flexDirection:'row',marginTop:10}}>
<Text style={styles.text2} >date </Text>
<Text > 27-07-2020</Text>

</View>
</Block>

                        {/* <Item floatingLabel   style={styles.inputView}>
              <Label    > Enter Tracking ID</Label>
              <Input />
            </Item> */}
         
                        {/* <Button style={styles.loginBtn} onPress={() => this.props.navigation.navigate('trackinglist')}>


                            <Text style={styles.loginText}  >GO to Next</Text>
                        </Button> */}
            
                    </ScrollView>
            </Container>

</>



        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10,justifyContent:'center',
        // backgroundColor: "#00008B"
      },
     
//   textInput2: {
//     borderWidth: 2, backgroundColor: 'white', fontSize: 12, width: "93%", borderColor: 'black',
//     textAlignVertical: 'top', borderRadius: 10,

//   },
//   textInput: {
//     borderWidth: 2, backgroundColor: 'white', fontSize: 12, width: "93%", borderColor: 'black',height:40,
//     textAlignVertical: 'top', borderRadius: 10,

//   },
  text2: {
     fontSize: 16,fontWeight:'bold',width:'40%'
  },
   
    
  
});
