import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Inderdaad</Text>
      <Text>MAAR IS WEL HANDIG</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf0c00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
