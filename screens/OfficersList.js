import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,ScrollView } from 'react-native'
   
export default class OfficerList extends Component {
   state = {
      names: [
         {
            id: 0,
            sr:'1',
            name: 'EDMC NODAL(Nodal)',
            designation:"Executive Engineer(B)HQ",
            emailid:'nodal@edmc.email',
            mobile:'8372977897',	
            apply:'Enable',
           
         },
         {
            id: 1,
                     sr:'2',
                     name: 'EDMC GRID 1(Grid)',
                     designation:'Executive Engineer(B)HQ',
                     emailid:'nodal@edmc.email',
                     mobile:'8372977897',		
                     apply:'Enable',
                    
                    },
         {
            id: 2,
          
                       sr:'3',
                       name: 'EDMC GRID 2',
                        designation:'Executive Engineer(B)HQ',
                       emailid:'nodal@edmc.email',
                       mobile:'8372977897',		
                       apply:'Enable',
                     
                    },
   
         
      ],
      header:[
        {
        id:0,
        sr:  'Sr No.',
        name: 'Offier Name',
        designation:'Designation',
       emailid:'Email Id',
       mobile:"Mobile No.",		
       apply:'Status',
       
        
      }
      ]
      
   }
   alertItemName = (item) => {
    this.props.navigation.navigate('Apply')   }
   render() {
      return (
         <ScrollView horizontal={true}>
      <View  style={{marginTop:40,paddingHorizontal:2}}>
         
     <View style={{borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}} >
            {
               this.state.header.map((item, index) => (
                 <View   key = {item.id}
                 style = {styles.container2}>
                    
                     
                     <Text style = {{width:'9%',fontWeight:'bold',fontSize:15,color:'white'}}>
                        {item.sr}
                     </Text>
                     
                  <Text style ={{width:'20%',fontWeight:'bold',fontSize:15,color:'white'}}>                
                          {item.name}
                     </Text>
                     <Text style = {{width:'20%',fontWeight:'bold',fontSize:15,color:'white'}}>
                        {item.designation}
                     </Text>
                     <Text style={{width:'20%',fontWeight:'bold',fontSize:15,color:'white'}}>
                        {item.emailid}
                     </Text>
                     <Text style={{width:'15%',fontWeight:'bold',fontSize:15,color:'white'}}>
                        {item.mobile}
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
               this.state.names.map((item, index) => (
                 <View   key = {item.id}
                 style = {styles.container}>
                 
                     
                 <Text style ={{width:'8%'}}>
                        {item.sr}
                     </Text>
                     
        
               {/* <Text>{"     "}</Text> */}
                  <Text style ={{width:'20%'}}>
                        {item.name}
                     </Text>
                     {/* <Text>{"  "}</Text> */}
                     <Text style = {{width:'20%'}}>
                        {item.designation}
                     </Text>
                     {/* <Text>{"   "}</Text> */}
                     <Text style = {{width:'20%'}}>
                        {item.emailid}
                     </Text>
                     {/* <Text>{"   "}</Text> */}
                     <Text style = {{width:'15%'}}>
                        {item.mobile}
                     </Text>
                   
                     <Text>{" "}</Text>

                     <Text style={{width:'15%'}}>
                        {item.apply}
                     </Text>
                    
                  </View>
               ))
            }
         </View>
         </View>
         </ScrollView>
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
    padding: 5,
    marginTop: 0,
    backgroundColor: '#0090F2',
    flexDirection:'row',
    borderBottomWidth:1
 },
   text: {
      color: '#4f603c',
   }
})