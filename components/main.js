import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActionSheetIOS, Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Signup from "./Signup";
import Login from "./Login";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Login",
      },
    },
     Signup: {
       screen: Signup,
       navigationOptions: {
         title: "Signup",
       },
     },
    // Emailid: {
    //   screen: EmailId,
    //   navigationOptions: {
    //     title: "EmailId",
    //   },
    // },
     Connect: {
       screen: Signup,
       navigationOptions: {
         title: "Signup",
       },
     },
    
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#aaa" },
    },
  }
);
const Navcontainer = createAppContainer(HomeStack);
export default function Main({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Welcome</Text>
      <View style={styles.container}>
        <Text> Login </Text>
        
        <View style={{margin:10}}>
          <TouchableOpacity style={{ backgroundColor: "dodgerblue" }} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.margin}>Sign Up</Text>
            
            
          </TouchableOpacity>
        </View>
        
        <View>

          <TouchableOpacity style={{ backgroundColor: "dodgerblue" }} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.space}>Log In</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      {/* <Navcontainer/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // paddingTop: 20,
    // paddingHorizontal:30,
    
     alignItems: "center",
     justifyContent: "center",
    
  },
  margin: {
    paddingTop:20,
    paddingVertical: 18,
    paddingHorizontal:20,
    borderWidth: 1,
    borderColor:'white',
    borderStyle: 'dashed',
     },
  space: {
    paddingTop:20,
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor:'white',
    borderStyle: 'dashed',
  },
});
