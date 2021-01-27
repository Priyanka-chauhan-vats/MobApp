
import React, { Component } from 'react';
import { View, Image, TouchableOpacity,StyleSheet,Text ,ImageBackground,AsyncStorage,Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';  
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon, Container } from 'native-base';

import userDashboard from './userDashboard';
import other from './Other'
import profile from './profile';

class NavigationDrawerStructure extends Component {
  state = {
    phoneNumber: 'Logout',
     
};
// statuslogout = async  => {
//     await AsyncStorage.clear();
//     await AsyncStorage.setItem('USER_KEY', this.state.phoneNumber)
//     const Status = await AsyncStorage.getItem('USER_KEY');
//     console.log('Login Ka Status after Logout is'+ Status)
//     alert(Status)
//     this.props.navigation.navigate('userdeshboard');

   
// } 
 
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
       <>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
              {/*Donute Button Image */}
             
              <Image
                source={require('../Images/drawer2.png')}
                style={{ width: 25, height: 25, marginLeft: 5 }}
              />  
              {/* <Icon name="menu"   /> */}
            </TouchableOpacity>
          </View>
          </>
        );
      }
    }
    
    const cunstomDrawer = (props)=> (
      
      <Container>
      <LinearGradient colors={['#7DF6AB','#2CD9E2','#08248B' ]} style={styles.linearGradient}>
      <View  style={{height:150 ,alignItems:'center',justifyContent:'center'}}> 
                <Image  source={require('../Images/icon.png')}   style={{height:120,width:120}}  />
           </View>
     <ScrollView>
         <DrawerItems {...props}/>
         <TouchableOpacity onPress={()=>
              Alert.alert(
                'Log out',
                'Do you want to logout?',
                [
                  {text: 'Cancel', onPress: () => {return null}},
                  {text: 'Confirm', onPress: () => {
                    AsyncStorage.clear();
                    // AsyncStorage.setItem('USER_KEY', this.state.phoneNumber)

                    props.navigation.navigate('userdeshboard')
                  }},
                ],
                { cancelable: false }
              )  
            }>
               <Text  style={{marginLeft:20,fontSize:15,fontWeight:'bold'}}   >Logout</Text>
             </TouchableOpacity>
     </ScrollView>
     </LinearGradient>
 </Container>
       
    );
    const FirstActivity_StackNavigator = createStackNavigator({
        //All the screen from the Screen1 will be indexed here
        First: {
          screen: userDashboard,
          navigationOptions: ({ navigation }) => ({
            title: 'Grievance App',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: 'rgb(54, 111, 224)',
            },
            headerTintColor: '#fff',
          }),
        },
      });

      const Screen2_StackNavigator = createStackNavigator({
        //All the screen from the Screen2 will be indexed here
        Second: {
          screen: profile,
          navigationOptions: ({ navigation }) => ({
            title: 'profile',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: 'rgb(54, 111, 224)',
            },
            headerTintColor: '#fff',
          }),
        },
      });
       
      const Screen3_StackNavigator = createStackNavigator({
        //All the screen from the Screen3 will be indexed here
        Third: {
          screen: other,
          navigationOptions: ({ navigation }) => ({
            title: 'Other',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: 'rgb(54, 111, 224)',
            },
            headerTintColor: '#fff',
          }),
        },
      });
       
      const DrawerNavigatorExample = createDrawerNavigator({
        //Drawer Optons and indexing
        Screen1: {
          //Title
          screen: FirstActivity_StackNavigator,
          navigationOptions: {
            drawerLabel: 'Home',
          },
        },
        Screen2: {
          //Title
          screen: Screen2_StackNavigator,
          navigationOptions: {
            drawerLabel: 'Profile',
          },
        },
        Screen3: {
          //Title
          screen: Screen3_StackNavigator,
          navigationOptions: {
            drawerLabel: 'Other',
          },
        },
        
        
      },
      {
        contentComponent: cunstomDrawer
      }
      );
       
      export default createAppContainer(DrawerNavigatorExample);
      
      const styles = StyleSheet.create({
        linearGradient: {
          flex: 1,
          padding:5
        }
      })