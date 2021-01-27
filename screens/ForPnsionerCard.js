import React from 'react';
import { StyleSheet, Text, View, TextInput, Image ,Picker,FlatList} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Form, Item, Input,Textarea, Label,Button, ActionSheet,Root } from 'native-base';



export default class ForPensioneCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
     

    render() {
      
        return (
            <Container>
              
                <View style={styles.container}>
                    <ScrollView style={{ marginTop: 20 }}>
             
         
                        <Button style={styles.loginBtn} onPress={() => this.props.navigation.navigate('PensionApply')}>


                            <Text style={styles.loginText}  >For pensioner</Text>
                        </Button>
                      
                    </ScrollView>
                </View>
            </Container>





        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 7, backgroundColor: '#fff' },
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
