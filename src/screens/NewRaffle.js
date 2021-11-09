import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const NewRaffle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>New Raffle</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NewRaffle;