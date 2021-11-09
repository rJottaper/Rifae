import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, backgroundColor, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor }]} onPress={onPress}>
      <Text style={[styles.title, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    width: '100%',
    height: 44
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 22,
  }
});

export default Button;