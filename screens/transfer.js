import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking,Picker,TextInput } from 'react-native';
// import { WebView } from 'react-native-webview';
import { Block, Checkbox,  theme } from "galio-framework";
import { Container,button } from 'native-base';
import Fileupoad from './fileupload';
import A from 'react-native-a'
import { ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
// ...

export default class tranfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.navigation.state.params,

        };
        // console.log(this.props); 
        console.log("complaint value")

        console.log(this.props.navigation.state.params);



    }
   
    render() {
        let status = this.state.status
        console.log(status)
        if (status === "1") {
          return (
            <Container style={styles.container}>
               
            <ScrollView style={{ marginTop: 20 }}>
            <Block style={{   padding: 5 }}>
<Text style={styles.text2} >Transfer to Grid Officer </Text>
<View style={styles.textInput}>
<Picker
selectedValue={this.state.language}
onValueChange={(itemValue, itemPosition) =>
this.setState({ language: itemValue, choosenIndex: itemPosition })}   >
<Picker.Item label="Select " value="Select" />
<Picker.Item label="A.k Meena(WZ/Ex.Eng(M-II))" value="DDA" />
<Picker.Item label="Ajay Goutam(EX. Engg.Maintenance-I)" value="SDMC" />
<Picker.Item label="B.> Agrawal(WZ/Ex.Eng(M-I))" value="NDMC" />
<Picker.Item label="B.S.Yadav(WZ/sz.Eng(M-III))" value="EDMC" />



</Picker>
</View>
<View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Remarks"
      // value='shamli'
      placeholderTextColor="black"
      numberOfLines={40}
      multiline={true}
    />
       </View>
</Block>
<TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity></ScrollView>
</Container>
            );
        }
     else if(status === "2") {
            return (
                <Container style={styles.container}>
               
                <ScrollView style={{ marginTop: 20 }}>
                <Block style={{   padding: 5 }}>
    <Text style={styles.text2} >Transfer to Other Govt. Agencies </Text>
    <View style={styles.textInput}>
    <Picker
    selectedValue={this.state.language}
    onValueChange={(itemValue, itemPosition) =>
    this.setState({ language: itemValue, choosenIndex: itemPosition })}   >
    <Picker.Item label="Select " value="Select" />
    <Picker.Item label="SDMC" value="DDA" />
    <Picker.Item label="EDMC" value="SDMC" />
    <Picker.Item label="North DMC" value="NDMC" />
    <Picker.Item label="DDA" value="EDMC" />
    <Picker.Item label="Delhi Fire Service" value="EDMC2" />
    <Picker.Item label="Delhi police" value="EDMC3" />


    
    
    
    </Picker>
    </View>
    
    <View style={styles.textInput}>

    <Picker
    selectedValue={this.state.language}
    onValueChange={(itemValue, itemPosition) =>
    this.setState({ language: itemValue, choosenIndex: itemPosition })}   >
    <Picker.Item label="Select " value="Select" />
    <Picker.Item label="Select " value="Select" />
<Picker.Item label="A.k Meena" value="value1" />
<Picker.Item label="Ajay Goutam" value="value2" />
<Picker.Item label="B.B Agrawal" value="value3" />
<Picker.Item label="B.S.Yadav" value="value4" />
    
    
    
    </Picker>

    </View>
    <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Remarks"
      // value='shamli'
      placeholderTextColor="black"
      numberOfLines={40}
      multiline={true}
    />
       </View>
    </Block>
    
    <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity></ScrollView>
    </Container>
              );
          }
          else if(status === "3") {
            return (
                <Container style={styles.container}>
               
                <ScrollView style={{ marginTop: 20 }}>
                <Block style={{   padding: 5 }}>
    <Text style={styles.text2} >No Action required </Text>
     <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Remarks"
      // value='shamli'
      placeholderTextColor="black"
      numberOfLines={40}
      multiline={true}
    />
       </View>
       <View>
<Fileupoad/>
</View>
    </Block>
    <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity></ScrollView>
    </Container>
              );
          }
        


 
                  
        else {
            return <Text>eryhiuyureu</Text>
        }

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
    textAlignVertical: 'top', borderRadius: 10,marginTop:10

  },
  text2: {
     fontSize: 16,fontWeight:'bold'
  },
   
  loginBtn:{
    width:"50%",
    backgroundColor:"#004CA1",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center',
    marginTop:80,
    marginBottom:10,

  },
  loginText:{
    color:"white"
  }, 
  textArea: {
    height: 50,
    textAlignVertical:'top',
    // justifyContent: "flex-start"
  },
  textAreaContainer: {
    borderColor:"black",
    width:"100%",
    borderRadius:5,
    borderWidth: 1,
    padding: 5,
    marginTop:20,
    textAlignVertical:'top',
    // justifyContent:"center",
    height:100,


  },
  
});