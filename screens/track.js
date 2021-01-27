import React from 'react';
import { StyleSheet, Text, View, TextInput, Image ,Picker,FlatList} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Form, Item, Input,Textarea, Label,Button, ActionSheet,Root } from 'native-base';



export default class track extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
     

    render() {
      
        return (
            <Container>
                {/* <Header>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 15, marginRight: 150 }}></Text>
                </Header> */}
                <View style={styles.container}>
                    <ScrollView style={{ marginTop: 20 }}>
                        {/* <Text style={styles.text} >1.Name of Complaint </Text> */}
                        {/* <TextInput

                            style={styles.inputView}
                            placeholder="First Name"
                            placeholderTextColor="black"
                        /> */}
                        <Item floatingLabel   style={styles.inputView}>
              <Label    > Enter Tracking ID</Label>
              <Input />
            </Item>
         
                        <Button style={styles.loginBtn} onPress={() => this.props.navigation.navigate('trackinglist')}>


                            <Text style={styles.loginText}  >GO to Next</Text>
                        </Button>
                      
                    </ScrollView>
                </View>
            </Container>





        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 7, backgroundColor: '#fff' },
    head: { height: 40, paddingVertical: 5, marginTop: 5, backgroundColor: '#fff' },
    loginBtn: {
        width: '60%',
        backgroundColor: "#004CA1",
        flex: 1,
        height: 50,
        // marginLeft: 30,
justifyContent:'center',
alignSelf:'center',
        marginTop: 60,
        // marginBottom: 10
    },
    
    inputView: {
        width: "90%",

        borderBottomWidth: 1,
        borderBottomColor: "#004CA1",
        // height: 50,
        marginTop:10,
        justifyContent: "center",
        padding: 5
    },
    text: {
        // color: '#7724F2',
        // marginLeft:110,
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 8
    },
    loginText: {
        color: "white",
        // marginLeft: 80,,
        alignSelf:'center',
        justifyContent:'center',
        fontWeight: "bold",
        fontSize: 20,
        textAlign:'center'
    },
});
