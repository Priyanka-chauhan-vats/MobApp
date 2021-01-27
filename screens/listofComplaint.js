import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
export default class listofComplaint extends Component {
   state = {
      names: [
         {
            id: 0,
            sr:'1',
            name: 'De-Sealing',
            Time:'8',
          
            apply:'Apply'
         },
         {
            id: 1,
                     sr:'2',
                     name: 'Encroachment on public land/property',
                     Time:'8',
                   
                     apply:'Apply'
         },
         {
            id: 2,
          
                       sr:'3',
                       name: 'Encroachment in Park',
                       Time:'8',
                     
                       apply:'Apply'
         },
         {
            id: 3,
        
            sr:'4',
            name: 'Building Byelaws Violation',
            Time:'4',
          
            apply:'Apply',
         },
         {
          id: 4,
      
          sr:'5',
          name: 'Ongoing Unauthorized Construction',
          Time:'7',
        
          apply:'Apply',
       },
       {
        id: 5,
    
        sr:'6',
        name: 'Right of way related',
        Time:'8',
      
        apply:'Apply',
     },
     {
      id: 6,
  
      sr:'7',
      name: 'Road related',
      Time:'9',
    
      apply:'Apply',
   },
   {
    id: 7,

    sr:'8',
    name: 'Misc.',
    Time:'4',

  
    apply:'Apply',
 },
         
      ],
      header:[
        {
        id:0,
        sr:  'Sr No.',
        name: 'Grievance Type', 
        Time:'Time Line (Days)',
        apply: 'Apply'
      }
      ]
      
   }
   alertItemName = (item) => {
      console.log(item)
      if(item === 0)
      {
           this.props.navigation.navigate('Apply',"De-sealing") 

      }
      else if(item ===1)
      {
         this.props.navigation.navigate('EncroachmentApply',"Encroachment on public land/property") 

      }
      else if(item ===2)
      {
         this.props.navigation.navigate('EncroachmentParkApply',"Encroahment in park") 

      }
      else if(item ===3)
      {
         this.props.navigation.navigate('byelawsApply',"Building Byelaws Violation") 

      }
      else if(item ===4)
      {
         this.props.navigation.navigate('UnauthroizedApply',"Ongoing Unauthrozied Construcation") 

      }
      else if(item ===5)
      {
         this.props.navigation.navigate('RightApply',"Right of way related") 

      }
      else if(item ===6)
      {
         this.props.navigation.navigate('RoadRelatedApply',"Road related") 

      }
      else if(item ===7)
      {
         this.props.navigation.navigate('MiscApply',"misc.") 

      }
     }
   render() {
      return (
      <View  style={{marginTop:30,paddingHorizontal:10}}>
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
                          {item.name}
                     </Text>
                     <Text style = {{width:'25%',fontWeight:'bold',fontSize:15,color:'white'}}>
                        {item.Time}
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
                 
                     
                     <Text style = {styles.text} >
                        {item.sr}
                     </Text>
                     
        
               <Text>{"              "}</Text>
                  <Text style ={{width:'42%'}}>
                        {item.name}
                     </Text>
                     <Text>{"    "}</Text>
                     <Text style = {{width:'20%'}}>
                        {item.Time}
                     </Text>
                   
                    
                     <Text style={{width:'20%',color:'blue'}} onPress = {() => this.alertItemName(item.id)}>
                        {item.apply}
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