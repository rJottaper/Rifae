import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { FontAwesome } from '@expo/vector-icons';

const InputValueRow = ({ name, currency, value, newValue, onPressRight, onPressLeft }) => {
  if (currency) {
    return (
      <View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.content}>
          <TouchableOpacity style={styles.button} onPress={onPressLeft} >
            <FontAwesome style={[styles.icon, { marginBottom: 4 }]} name="window-minimize" />
          </TouchableOpacity>
          <View style={styles.inputView}>
            <Text style={styles.currency}>U$</Text>
            <CurrencyInput 
              style={styles.input} 
              value={value} 
              onChangeValue={newValue}
              keyboardType="number-pad"
              maxLength={10}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={onPressRight}>
            <FontAwesome style={[styles.icon, { marginTop: 3 }]} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.content}>
          <TouchableOpacity style={styles.button} onPress={onPressLeft}>
            <FontAwesome style={[styles.icon, { marginBottom: 4 }]} name="window-minimize" />
          </TouchableOpacity>
          <TextInput 
            style={[styles.input, { flex: 1 }]} 
            value={value.toString()}
            onChangeText={newValue}
            keyboardType="number-pad"
            maxLength={6}
          />
          <TouchableOpacity style={styles.button} onPress={onPressRight}>
            <FontAwesome style={[styles.icon, { marginTop: 3 }]} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    color: '#8F8F8F',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 6
  },
  content: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 47,
    alignItems: 'center',
    
  },
  button: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#EC7149',
    width: 32,
    height: 32,
    marginHorizontal: 10,
    borderRadius: 16
  },
  icon: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  inputView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4F4F4F',
  },
  currency: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4F4F4F',
    marginRight: 10,
  },
});

export default InputValueRow;