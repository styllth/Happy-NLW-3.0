/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App: React.FC = () => (
  <View style={styles.container}>
    <Text>App Funcionando!!!</Text>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6d2dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
