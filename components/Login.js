import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActionSheetIOS, Button, StyleSheet, Text, View ,TextInput} from 'react-native';
import { useState } from 'react';

export default function Login({navigation}) {
  // const[Email,setEmailid]= useState("abc@gmail.com");
  return (
    <View >
      <Text>Signup Page </Text>
      <View style={styles.container}>
      <Text>Enter Your Email Id</Text>
      <TextInput style={styles.input}
      placeholder='abc@gmail.com' />
  {/* <Text>Emailid:{Email}</Text> */}
          
        </View>
      
      

         
   </View>
    // <View style={styles.container}>
     //  <Text> Login </Text>
    //   <Button style={{margin:10}}
    //   color="dodgerblue"
    //   title="Sign up" onPress={() => navigation.navigate('Signup')} ></Button>
      
     
      
    //   <Button 
    //   color="dodgerblue"
    //   title="Log in"></Button>
    //   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'black',
    padding:5,
    margin:10,
    width:200,
  }
});