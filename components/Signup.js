import { StatusBar } from "expo-status-bar";
import React,{Component} from "react";
import { useState } from "react";
import { ActionSheetIOS,Button, StyleSheet, Text, View,TouchableOpacity,TextInput,} from "react-native";
// import { GoogleSignin, GoogleSigninButton,statusCodes } from "react-native-google-signin";
export default class Signup extends Component {
  constructor(props){
    super(props)
    // GoogleSignin.configure()
  }
  async signIn  () {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //  user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  //  const[Emailid,setEmailid]= useState("abc@gmail.com");
  //
  render() {
    return (
    <View>
      <Text>Signup Page </Text>
      
       
     
       <View style={styles.container}>
        <Text>Enter Your Email Id</Text>
        <TextInput style={styles.input} placeholder="abc@gmail.com" />

        {/* <Text>Emailid:{Emailid}</Text> */}
      </View>
    </View>
  

   );
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    margin: 10,
    width: 200,
  },
  
  
});
