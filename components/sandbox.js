import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'teal',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  boxOne: {
    flex: 5,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    flex: 5,
    backgroundColor: 'gold',
    padding: 10,
    
    
  },
  boxThree: {
    flex: 5,
    backgroundColor: 'coral',
    padding: 10,
  },
  boxFour: {
    flex: 5,
    backgroundColor: 'skyblue',
    padding: 10,
    
  }
});