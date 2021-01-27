import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Body, Footer, Button, FooterTab } from 'native-base';

export default class userDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const state = this.state;
    return (
      <>
        <Container style={styles.container2}  >
         
          <View style={styles.container}>
            {/* <Image source={require("../Images/logo.png")} style={{marginTop:20,width:120,height:120,justifyContent:'center',alignItems:'center'}} />    */}
            < Image style={{ marginTop: 2, width: '100%', height: 190, borderWidth: 2 }} source={require("../Images/DDA4.jpg")} />

            <ScrollView 
>
              <View style={{ flexDirection: 'row', marginTop: 30, paddingHorizontal: 5 }}>
                <View style={{ padding: 5 ,width:"32%"}}>
                                  <TouchableOpacity    onPress={() => this.props.navigation.navigate('signupppp')}>

                  <Image
                    source={require('../Images/image4.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={styles.image}
                    />
</TouchableOpacity>
                  <Text style={styles.textHeadingStyle} onPress={() => this.props.navigation.navigate('signupppp')}>
                    Register
        </Text>
                </View>
                {/* </TouchableOpacity> */}

                <View style={{ padding: 5,width:'32%' }}>
                  <TouchableOpacity    onPress={() => this.props.navigation.navigate('listofComplaint')} >
                  <Image
                    source={require('../Images/image1.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={styles.image}
                    // onPress={() => this.props.navigation.navigate('listofComplaint')} />
                    onPress={() => this.props.navigation.navigate('detailslist')} />

                    </TouchableOpacity>
                  <Text style={styles.textHeadingStyle} onPress={() => this.props.navigation.navigate('listofComplaint')} >
                  STF Grievances
        </Text>
                </View>
                <View style={{ padding: 5,width:'32%' }}>
                  <TouchableOpacity   onPress={() => this.props.navigation.navigate('Othercomplaint')}>
                  <Image
                    source={require('../Images/public.png')}
                    style={styles.image}
                    onPress={() => this.props.navigation.navigate('Othercomplaint')}
                    />
                    </TouchableOpacity>
                  <Text style={styles.textHeadingStyle}       onPress={() => this.props.navigation.navigate('Othercomplaint')}>
                   Complaints other then STF
                          </Text>
                </View>      
               

               
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 5 }}>
              <View style={{ padding: 5,width:'32%' }}>
                      <TouchableOpacity     onPress={() => this.props.navigation.navigate("mystuff")}

                      >
                      
                  <Image
                    source={require('../Images/image5.png')}
                    style={styles.image}
                    />
                    </TouchableOpacity>
                  <Text style={styles.textHeadingStyle}  
                    onPress={() => this.props.navigation.navigate('STFandSNS')}>
                  Authority Portal
                          </Text>
                </View>
              <View style={{ padding: 5,width:'32%' }}>
                <TouchableOpacity    onPress={() => this.props.navigation.navigate('tracking')}>
                  <Image
                    source={require('../Images/tracking.png')}
                    style={styles.image}
                    
                    />
                    </TouchableOpacity>
                  <Text style={styles.textHeadingStyle}     onPress={() => this.props.navigation.navigate('tracking')}>
                  Track Grievances
        </Text>
                </View>
                <View style={{ padding: 5,width:'32%' }}>
                  <TouchableOpacity   onPress={() => this.props.navigation.navigate('circular')}>
                  <Image
                    source={require('../Images/public.png')}
                    style={styles.image}
                    onPress={() => this.props.navigation.navigate('circular')}
                    />
                    </TouchableOpacity>
                  <Text style={styles.textHeadingStyle}       onPress={() => this.props.navigation.navigate('circular')}>
                  Public Circular/Notification
                          </Text>
                </View>
                   
               
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 5 }}>
              <View style={{ padding: 5,width:'32%' }}>
                  <Image
                    source={require('../Images/image3.png')}
                    style={styles.image}
                    // onPress={() => this.props.navigation.navigate('listofComplaint')}
                     />
                  <Text style={styles.textHeadingStyle}>
                  MP/MLA Request
        </Text>
                </View>
                <View style={{ padding: 5,width:"32%" }}>
                <TouchableOpacity   onPress={() => this.props.navigation.navigate('PensioneCard')}>

                  <Image
                    source={require('../Images/complaint3.png')}
style={styles.image}
                     />
                     </TouchableOpacity>
                  <Text style={styles.textHeadingStyle} onPress={() => this.props.navigation.navigate('PensioneCard')}>
                Employee Grievances
        </Text>
                </View>
                <View style={{ padding: 5,width:"32%" }}>
                  <Image
                    source={require('../Images/image2.png')}
                    //borderRadius style will help us make the Round Shape Image
style={styles.image}
                    // onPress={() => this.props.navigation.navigate('listofComplaint')}
                     />
                  <Text style={styles.textHeadingStyle}>
                  DDA Staff 
                  Grievances
        </Text>
                </View>
                   
              </View>
              {/* <View style={{ padding: 5,width:'32%' }}>

<Image
  source={require('../Images/complaint3.png')}
  style={styles.image}
  // onPress={() => this.props.navigation.navigate('listofComplaint')}
   />
<Text style={styles.textHeadingStyle}>
PGMS
</Text>
</View> */}
              
               
              {/* <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 5, marginRight: 3 }}>
              <View style={{ padding: 5,width:'32%' }}>
                  <Image
                    source={require('../Images/message.png')}
                    style={styles.image}
                    // onPress={() => this.props.navigation.navigate('listofComplaint')}
                     />
                  <Text style={styles.textHeadingStyle}>
                  LG Listing Post
        </Text>
                </View>
                <View style={{ padding: 5,width:'32%' }}>
                  <Image
                    source={require('../Images/complaint3.png')}
                    style={styles.image}
                    // onPress={() => this.props.navigation.navigate('listofComplaint')}
                     />
                  <Text style={styles.textHeadingStyle}>
                  Raj Niwas Referencing
        </Text>
                </View>
               
              
               
                
                  <View style={{ padding: 5,width:'32%' }}>
                  <Image
                    source={require('../Images/image5.png')}
                    style={styles.image}
                    // onPress={() => this.props.navigation.navigate('listofComplaint')}
                     />
                  <Text style={styles.textHeadingStyle}>
                  Authority Portal
        </Text>
                </View>

                    
                
              </View> */}

            
              {/* <Text>{"\n"}{"\n"}</Text> */}

            </ScrollView>
          </View>

        </Container>
        
      </>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: '#E8E8E8',
    height: "100%",
    alignItems: 'center',
  }, container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,


    backgroundColor: '#004CA2'
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: '#004CA2',
    borderWidth: 2,
    paddingVertical:5,
alignSelf:'center'
  },
  textHeadingStyle: {
    marginTop: 5,
    fontSize: 14,
    color: '#0250a3',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: { margin: 6 }
});
