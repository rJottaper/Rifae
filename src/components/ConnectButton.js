import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConnectButton = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { 
    justifyContent: 'center',
    width: '100%',
    height: 42,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FAFAFA'
  },
});

export default ConnectButton;