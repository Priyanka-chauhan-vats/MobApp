import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
// import { WebView } from 'react-native-webview';

import A from 'react-native-a'
import { ScrollView } from 'react-native-gesture-handler';
// ...

export default class StatusReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.navigation.state.params,


        // console.log(this.props); 
        // console.log("complaint value")

        // console.log(this.props.navigation.state.params);



    
   
        names: [
           {
              id: 0,
              sr:'1',
          Respective: 'SDMC', 
          Designation:'Shailesh ( ExecutiveEngineer(B)HQ-I)',
          Mobile_No :'8800696661',
          
          Address : '9th Floor, E1 Block, Civic Centre, Minto Road, New Delhi.',
             
           },
           {
              id: 1,
                       sr:'2',
                       Respective: 'EDMC', 
                       Designation:'Vipin Kumar ( Executive Engineer(B)HQ)',
                       Mobile_No :"8826690490",
                       
                       Address : '419, Udyog Sadan, Patparganj Industrial Area, Delhi',
                      
                      },
           {
              id: 2,
            
                         sr:'3',
                         Respective: 'NorthDMC', 
                         Designation:"Jagmohan Meena ( EE (Plg))",
                         Mobile_No :'8654326789',
                         
                         Address : '2nd floor, Nigam Bhawan, Old Hindu College, Kashmere Gate, Delhi-6',
                      },
     
                      {
                        id: 3,
                        sr:'4',
                    Respective: 'SDMC', 
                    Designation:'Shailesh ( ExecutiveEngineer(B)HQ-I)',
                    Mobile_No :'8800696661',
                    
                    Address : '9th Floor, E1 Block, Civic Centre, Minto Road, New Delhi.',
                       
                     },
                     {
                        id: 4,
                                 sr:'5',
                                 Respective: 'EDMC', 
                                 Designation:'Vipin Kumar ( Executive Engineer(B)HQ)',
                                 Mobile_No :"8826690490",
                                 
                                 Address : '419, Udyog Sadan, Patparganj Industrial Area, Delhi',
                                
                                },
                     {
                        id: 5,
                      
                                   sr:'6',
                                   Respective: 'NorthDMC', 
                                   Designation:"Jagmohan Meena ( EE (Plg))",
                                   Mobile_No :'8654326789',
                                   
                                   Address : '2nd floor, Nigam Bhawan, Old Hindu College, Kashmere Gate, Delhi-6',
                                },
               
        ],
        header:[
          {
          id:0,
          sr:  'Sr No.',
          Respective: 'Respective Local Body', 
          Designation:'Nodal Officer with Designation',
          Mobile_No :'Mobile Number',
          
          Address : 'Office Address',
          
          
        }
        ]
        
    };
}
    
    
    render() {
        let status = this.state.status
        console.log(status)
        // return      <WebView source={{ uri: 'http://119.226.139.196/stf/Doc/2.%20Status%20of%20ATR%20on%20public%20greviences.pdf' }} />;
        if (status === "1") {
          return (
                <View style={{
                    flex: 1, padding: 7, backgroundColor: '#fff',
                    alignItems: 'center',
                    // justifyContent: 'center'
                }}>
             <A href="http://119.226.139.196/stf/Doc/STF_Action_Plan.PDF"  style={styles.hiperlink} >STF Action Plan</A>
                    <A href="http://119.226.139.196/stf/Doc/Office_Memorandum.PDF"style={styles.hiperlink} >Office_Memorandum</A>
                    <A href="http://119.226.139.196/stf/Doc/STF_Gazette_Notification.PDF" style={styles.hiperlink} >STF_Gazette_Notification</A>
                    {/* <A href="http://119.226.139.196/stf/Doc/1.%20STF%20Report%2016%20July%202018.pdf">Report(16.07.2018)</A> */}
                    {/* <A href="http://119.226.139.196/stf/Doc/NEWSPAPER.pdf">Office_Memorandum</A> */}
                </View>
            );
        }
     else if(status === "2") {
            return (
                  <View style={{
                      flex: 1, padding: 7, backgroundColor: '#fff',
                    //   alignItems: 'center',
                    //   justifyContent: 'center'
                  }}>
                      <A href="http://119.226.139.196/stf/Doc/1.%20STF%20Report%2016%20July%202018.pdf" style={styles.hiperlink} >* Report(16.07.2018)</A>
                            <A style={{fontWeight:'bold',widt:"100%",padding:8}}>* Report(07.09.2018)</A>


                      <A href="http://119.226.139.196/stf/Doc/1.%20Action%20Taken%20Report.pdf"  style={styles.hiperlink} >i. Action Taken Report</A>
                      <A href="http://119.226.139.196/stf/Doc/2.%20Status%20of%20ATR%20on%20public%20greviences.pdf"  style={styles.hiperlink} >ii. Status of ATR on public grievances</A>

                  </View>
              );
          }
          else if(status === "3") {
            return (
                  <View style={{
                      flex: 1, padding: 7, backgroundColor: '#fff',
                      alignItems: 'center',
                    //   justifyContent: 'center'
                  }}>
                      <A href="http://119.226.139.196/stf/Doc/NEWSPAPER.pdf"   style={styles.hiperlink} >A. Office Memorandum</A>


                      <A href="http://119.226.139.196/stf/Doc/DDA311App_Advt.png"  style={styles.hiperlink} >
 	B. Mobile App, DDA-311</A>

                  </View>
              );
          }
          else if(status === "4") {
            return (
                  <View style={{
                      flex: 1, padding: 7, backgroundColor: '#fff',
                      alignItems: 'center',
                    //   justifyContent: 'center'
                  }}>
                      <A href="http://119.226.139.196/stf/PublicNotice/1st%20Public%20Notice.pdf"  style={styles.hiperlink} >1. Action against mis-user of the properties in NCT of Delh</A>


                     

                  </View>
              );
          }
          else if(status === "5") {
            return (
                <ScrollView>
                  <View style={{
                      flex: 1, padding: 7, backgroundColor: '#fff',
                      alignItems: 'center',
                    //   justifyContent: 'center'
                  }}>
                      <A href="http://119.226.139.196/stf/AgendaDoc/29092020122825-53%20STF%20Meeting%20Agenda.pdf"   style={styles.hiperlink} >* 53rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/22092020022346-52nd%20Meeting%20Agenda.pdf" style={styles.hiperlink} >* 52rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/08092020053324-51st%20Meeting%20Agenda.pdf" style={styles.hiperlink} >* 51rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/21082020121517-Final%2050th_Meeting_Agenda_final.pdf"style={styles.hiperlink} >* 50rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/21082020121323-49th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 49rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/20072020120329-48th_Meeting_Agenda_6.pdf"style={styles.hiperlink} >* 48rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/20072020120237-47th_Meeting_Agenda_8.pdf"style={styles.hiperlink} >* 47rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/18032020121746-46th_Meeting_Agenda_13.pdf"style={styles.hiperlink} >* 46rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/28022020103357-45th_Meeting_Agenda_11.pdf"style={styles.hiperlink} >* 45rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/14022020032547-44th_Meeting_Agenda_2.pdf"style={styles.hiperlink} >* 44rd STF Meeting Agenda</A>

                      <A href="http://119.226.139.196/stf/AgendaDoc/03022020125104-43rdSTFMeetingAgenda.pdf"style={styles.hiperlink} >* 43rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/24012020034744-42nd_Meeting_Agenda.pdf"style={styles.hiperlink} >* 42rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043744-41st_Meeting_Agenda.pdf"style={styles.hiperlink} >* 41rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043726-40th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 40rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043709-39th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 39rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043651-38th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 38rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043631-37th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 37rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043550-36th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 36rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043528-35th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 35d STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043508-34th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 34rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043449-33rd_Meeting_Agenda.pdf"style={styles.hiperlink} >* 33 STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043425-32nd_Meeting_Agenda.pdf"style={styles.hiperlink} >* 32 STF Meeting Agenda</A>

                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043341-30th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 30rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043322-29th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 29rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043303-28th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 28rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043244-27th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 27rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043228-26th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 26rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043210-25th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 25rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043151-24th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 24rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043132-23rd_Meeting_Agenda.pdf"style={styles.hiperlink} >* 23rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043112-22th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 22rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043056-21th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 21rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043037-20th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 20rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020043017-19th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 19rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042955-18th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 18rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042919-17th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 17rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042859-16th_Meeting_Agenda.pdf"style={styles.hiperlink} >*  16rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042839-15th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 15rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042816-14th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 14rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042754-13th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 13rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042732-12th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 12rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042705-11th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 11rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042646-10th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 10rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042625-9th_Meeting_Agenda.pdf"style={styles.hiperlink} >* 9rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/AgendaDoc/23012020042601-8th_Meeting_Agenda.pdf"style={styles.hiperlink} >*8rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/Doc/NEWSPAPER.pdf"style={styles.hiperlink} >* 7rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/Doc/NEWSPAPER.pdf"style={styles.hiperlink} >* 6rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/Doc/NEWSPAPER.pdf"style={styles.hiperlink} >* 5rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/Doc/NEWSPAPER.pdf"style={styles.hiperlink} >* 4rd STF Meeting Agenda</A>
                      <A href="http://119.226.139.196/stf/Doc/NEWSPAPER.pdf"style={styles.hiperlink} >* 3rd STF Meeting Agenda</A>


 
                  </View>
                  </ScrollView>
              );
          }
          else if(status === "6") {
            return (
                <ScrollView horizontal={true}>
             <View  style={{marginTop:40,paddingHorizontal:2}}>
                
            <View style={{borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}} >
                   {
                      this.state.header.map((item, index) => (
                        <View   key = {item.id}
                        style = {styles.container2}>
                           
                            
                            <Text style = {{width:'8%',fontWeight:'bold',fontSize:15,color:'white'}}>
                               {item.sr}
                            </Text>
                            
                         <Text style ={{width:'20%',fontWeight:'bold',fontSize:15,color:'white'}}>                
                                 {item.Respective}
                            </Text>
                            <Text style = {{width:'20%',fontWeight:'bold',fontSize:15,color:'white'}}>
                               {item.Designation}
                            </Text>
                      <Text>{"  "}</Text>
                            <Text style={{width:'30%',fontWeight:'bold',fontSize:15,color:'white'}}>
                               {item.Address}
                            </Text>
                            <Text style={{width:'12%',fontWeight:'bold',fontSize:15,color:'white'}}>
                               {item.Mobile_No}
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
                         <Text style ={{width:'15%'}}>
                               {item.Respective}
                            </Text>
                            {/* <Text>{"  "}</Text> */}
                            <Text style = {{width:'20%'}}>
                               {item.Designation}
                            </Text>
                            <Text>{"   "}</Text>
                            <Text style = {{width:'30%'}}>
                               {item.Address}
                            </Text>
                          
                            <Text>{" "}</Text>
       
                            <Text style={{width:'12%'}}>
                               {item.Mobile_No}
                            </Text>
                           
                         </View>
                      ))
                   }
                </View>
                </View>
                </ScrollView>
             )
       
          }
          else if(status === "7") {
            return (
                  <View style={{
                      flex: 1, padding: 7, backgroundColor: '#fff',
                    //   alignItems: 'center',
                    //   justifyContent: 'center'
                  }}>
                      <A href="http://119.226.139.196/stf/Doc/08102020040728-MOM-%2053rd%20STF%20Meeting.pdf"
                       style={styles.hiperlink} >* 53rd Minutes of Meeting of the STF</A>


                      <A href="http://119.226.139.196/stf/Doc/22092020022503-Minutes%20of%2052nd%20STF%20meeting.PDF"  
                      style={styles.hiperlink} >* 52rd Minutes of Meeting of the STF</A>
                      <A href="http://119.226.139.196/stf/Doc/09092020013932-51st%20MOM.pdf" 
                       style={styles.hiperlink} >* 51rd Minutes of Meeting of the STF</A>

                  </View>
              );
          }
          else if(status === "8") {
            return (
                  <View style={{
                      flex: 1, padding: 7, backgroundColor: '#fff',
                      alignItems: 'center',
                    //   justifyContent: 'center'
                  }}>
                      <A href="http://119.226.139.196/stf/QuaterlyMeeting/23012020045303-3rd%20MOQM.pdf"
                       style={styles.hiperlink} >*  3rd MINUTES OF QUARTERLY MEETING IN THE MINISTRY ON THE STF
                       </A>


                      <A href="http://119.226.139.196/stf/QuaterlyMeeting/23012020045245-2nd%20MOQM.pdf"
                        style={styles.hiperlink} >* 2nd MINUTES OF QUARTERLY MEETING IN THE MINISTRY ON THE STF
                        </A>
                      <A href="http://119.226.139.196/stf/QuaterlyMeeting/23012020045231-1st%20MOQM.pdf" 
                       style={styles.hiperlink}>* 1st MINUTES OF QUARTERLY MEETING IN THE MINISTRY ON THE STF
                       </A>

                  </View>
              );
          }
          else if(status === "9") {
            return (
                  <View style={{
                      flex: 1, padding: 7, backgroundColor: '#fff',
                    //   alignItems: 'center',
                    //   justifyContent: 'center'
                  }}>
                      <A href="http://119.226.139.196/stf/Doc/INSTRUCTIONS-latest-STF.pdf" style={styles.hiperlink} >
                      NSTRUCTIONS and GUIDELINES</A>



                  </View>
              );
          }
        else {
            return <Text>eryhiuyureu</Text>
        }

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
    hiperlink:{fontWeight: 'bold',padding:8,width:"100%",borderBottomWidth:1,borderBottomColor:'#0090F2',},
    container2: {
     padding: 2,
     marginTop: 0,
     backgroundColor: '#0090F2',
     flexDirection:'row',
     borderBottomWidth:1
  },
    text: {
       color: '#4f603c',
    }
 })