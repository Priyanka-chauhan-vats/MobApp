import React from 'react';
import { StyleSheet, Text, View, TextInput, Image ,Picker,FlatList} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Form, Item, Input,Textarea, Label,Button, ActionSheet,Root } from 'native-base';

import { Block, Checkbox,  theme } from "galio-framework";


export default class ViewReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
     

    render() {
      
        return (
            <Container style={styles.container}>
               
                    <ScrollView style={{ marginTop: 20 }}>
                    <Block style={{   padding: 5 }}>
<Text style={styles.text2} >Search By </Text>
<View style={styles.textInput}>
<Picker
selectedValue={this.state.language}
onValueChange={(itemValue, itemPosition) =>
this.setState({ language: itemValue, choosenIndex: itemPosition })}   >
<Picker.Item label="Select " value="Select" />
<Picker.Item label="Name" value="DDA" />
<Picker.Item label="Reference Id" value="SDMC" />
<Picker.Item label="VC Dairy No." value="NDMC" />
<Picker.Item label="Mem Sec. dairy No." value="EDMC" />
<Picker.Item label="Date" value="Date"/>
<Picker.Item label="Id No(PGMS/LG)" value="Id No(PGMS/LG)" />


</Picker>
</View>
</Block>
<Text  style={{marginTop:20,fontSize: 16,fontWeight:'bold'}} >
List of offline Grievances</Text>
<Text>NO Record Found!!!!!</Text>
                        {/* <Item floatingLabel   style={styles.inputView}>
              <Label    > Enter Tracking ID</Label>
              <Input />
            </Item> */}
         
                        {/* <Button style={styles.loginBtn} onPress={() => this.props.navigation.navigate('trackinglist')}>


                            <Text style={styles.loginText}  >GO to Next</Text>
                        </Button> */}
                      
                    </ScrollView>
            </Container>





        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20,justifyContent:'center',
        // backgroundColor: "#00008B"
      },
     
  textInput2: {
    borderWidth: 2, backgroundColor: 'white', fontSize: 12, width: "93%", borderColor: 'black',
    textAlignVertical: 'top', borderRadius: 10,

  },
  textInput: {
    borderWidth: 2, backgroundColor: 'white', fontSize: 12, width: "93%", borderColor: 'black',height:40,
    textAlignVertical: 'top', borderRadius: 10,

  },
  text2: {
     fontSize: 16,fontWeight:'bold'
  },
   
    
  
});
