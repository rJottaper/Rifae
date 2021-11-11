import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputTextRow = ({ name, bold, value, newValue, multiline, placeholder }) => {
  if (multiline) {
    return (
      <View>
        <Text style={styles.name}>{name}</Text>
        <View style={[styles.viewInput, {  }]}>
          <TextInput 
            style={[styles.input, { fontWeight: bold, height: 115 }]} 
            value={value}
            onChangeText={newValue}
            multiline={multiline} />
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.viewInput}>
          <TextInput 
            style={[styles.input, { fontWeight: bold }]} 
            value={value}
            onChangeText={newValue}
            placeholder={placeholder}
            placeholderTextColor='#8F8F8F'
          />
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    color: '#8F8F8F',
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 6
  },
  viewInput: {
    backgroundColor: '#FFFFFF'
  },
  input: {
    backgroundColor: '#FFFFFF',
    fontSize: 17,
    color: '#4F4F4F',
    width: '90%',
    height: 45,
    marginLeft: 15,
  },
});

export default InputTextRow;