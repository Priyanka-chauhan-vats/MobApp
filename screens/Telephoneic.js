// Example to Make a Phone Call in React Native App
// https://aboutreact.com/example-to-make-a-call-from-the-react-native-app/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// import Call API
import call from 'react-native-phone-call';

const Telephonic = () => {
  const [inputValue, setInputValue] = useState('9999999999');

  const triggerCall = () => {
    // Check for perfect 10 digit length
    if (inputValue.length != 10) {
      alert('Please insert correct contact number');
      return;
    }

    const args = {
      number: inputValue,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        
        <Text style={styles.titleTextsmall}>
          DDA Helpline Number
        </Text>
        <TextInput
          value={inputValue}
          onChangeText={
            (inputValue) => setInputValue(inputValue)
          }
          placeholder={'Enter Conatct Number to Call'}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={triggerCall}>
          <Text style={styles.buttonTextStyle}>
            Make a Call
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Telephonic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
//   buttonStyle: {
//     justifyContent: 'center',
//     marginTop: 30,
//     padding: 10,
//     width:'80%',
//     backgroundColor:"#004CA1",
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
  buttonStyle:{
    width:"80%",
    backgroundColor:"#004CA1",
    borderRadius:5,
    height:50,
    alignItems:"center",
    alignSelf:'center',
    justifyContent:"center",
    marginTop:60,
    
  },
  buttonTextStyle:{
    color:"white"
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});