import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActionSheetIOS, Button, StyleSheet, Text, View } from 'react-native';
import Navcontainer from './components/loading';
import Main from './components/main'

export default function App() {
  return (
    <View style={styles.container}>
     <Navcontainer></Navcontainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
});
