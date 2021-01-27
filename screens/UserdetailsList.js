import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import axios from 'axios';
import { baseurl } from '../screens/baseurl';
const grievance = baseurl +'all_grivencelist';   
export default class userdetailslist extends Component {
   constructor(props) {
      super(props);
  this.state={
    rows: [],
    header:[
      {
      id:0,
      sr:  'Sr No.',
      name: 'Name', 
      Complaint:'Type of Complaint',
      apply: 'View'
    }
    ],
  }
      this.PostAPI();
    }
   
  
    PostAPI = () => {
      // const datad = { user_id: this.state.user }
      axios.get(grievance)
        .then(Response => {
          console.log('DATA got');
          console.log(Response.data)
          this.setState({
            rows : Response.data
          })
          
         //  console.log(Response.data);
          //console.log(this.state.rows);
          console.log('G');
         //  this.render()
        })
        .catch(err => {
          console.log('Error is ' + err);
        })
    }
    
    
   alertItemName = (item) => {
// alert(item);
this.setState({
   status:item
})
    this.props.navigation.navigate('applyView',item)
    }
   render() {
      const details=this.state.rows;
      console.log("render data")
      console.log(details)
      return (
      <View  style={{marginTop:30,paddingHorizontal:10}}>
         {/* <Text>helooo</Text> */}
     <View style={{borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}} >
            {
               this.state.header.map((item, index) => (
                 <View   key = {item.id}
                 style = {styles.container2}>
                    
                     
                     <Text style = {{width:'15%',fontWeight:'bold',fontSize:15,color:'white'}}>
                        {item.sr}
                     </Text>
                     
                     <Text>{"   "}</Text>
                  <Text style ={{width:'40%',fontWeight:'bold',fontSize:15,color:'white'}}>                
                          {item.Complaint}
                     </Text>
                     <Text style = {{width:'25%',fontWeight:'bold',fontSize:15,color:'white'}}>
                        {item.name}
                     </Text>
                     <Text style={{width:'20%',fontWeight:'bold',fontSize:15,color:'white'}}>
                        {item.apply}
                     </Text>
                     
                     
                     
              
                  </View>
               ))
            }
         </View>
         <View style={{borderLeftWidth:1,borderRightWidth:1,}}  >
            {
               details.map((item, index) => (
                 <View   key = {item._id}
                 style = {styles.container}>
                 
                     
                 <Text style = {{width:'15%'}} >
                  {index+1}
                     </Text>
                     
        
               <Text>{"    "}</Text>
                  <Text style ={{width:'38%'}}>
                        {item.complaint}
                     </Text>
                     <Text>{"  "}</Text>
                     <Text style = {{width:'25%'}}>
                        {item.NameofComplainant}
                     </Text>
                   
                    
                     <Text style={{width:'10%',color:'blue'}} onPress = {() => this.alertItemName(item._id)}>
                        view
                     </Text>
                    
                  </View>
               ))
            }
         </View>
         </View> 
      )
   }
}

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 0,
      backgroundColor: '#EFF3FB',
      flexDirection:'row',

      borderBottomWidth:1,
      
   },
   container2: {
    padding: 10,
    marginTop: 0,
    backgroundColor: '#0090F2',
    flexDirection:'row',
    borderBottomWidth:1
 },
   text: {
      color: '#4f603c',
   }
})