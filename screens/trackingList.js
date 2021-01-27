import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {  Button,Container,Header } from 'native-base';

import { Table, Row, Rows } from 'react-native-table-component';

export default class  trackinglist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Track Id', 'Status'],
            tableData: [
              ['1', 'done'],
              ['2', 'pending'] ,
              ['3973298', 'done' ],
              ['49239', 'done'],
              ['592389', 'Road'  ],
              ['692139', 'Others' ],
            ]
        }
      }
    
  render(){
    const state = this.state;
    return (
      <Container>
      {/* <Header   >
          <Text  style={{ color:'white', fontWeight: 'bold',fontSize:20,marginTop:15,marginRight:200 }}>Tracking List</Text>
      </Header> */}
       <View style={styles.container}>
              {/* <ScrollView  horizontal={true}> */}
                <View >
                {/* <ScrollView horizontal={true}> */}
                <ScrollView >
 
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData} textStyle={styles.text}>

              </Rows>
            </Table>
            </ScrollView>
            </View>
            
            {/* </ScrollView> */}
          </View>
       
       </Container>
        
   
    
      
    );
  }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding:7, marginTop:30,backgroundColor: 'white' },
    head: { height: 50,paddingVertical:5,marginTop:5, backgroundColor: '#E7EAED' },
    text: { margin: 2, color:'black' },
   
  });