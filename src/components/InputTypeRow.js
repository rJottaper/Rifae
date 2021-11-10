import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const InputTypeRow = ({ type }) => {
  const [isSelected, setIsSelected] = useState(false);

  const Selected = () => {
    if (isSelected == true) {
      setIsSelected(false)
    } else if (isSelected == false) {
      setIsSelected(true)
    };
  };

  if (isSelected) {
    return (
      <TouchableOpacity style={styles.button} onPress={() => Selected()}>
        <Text style={styles.type}>{type}</Text>
        <FontAwesome style={styles.icon} name="check" />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.button} onPress={() => Selected()}>
        <Text style={styles.type}>{type}</Text>
      </TouchableOpacity>
    );
  };
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 44,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#b6b7b8'
  },
  type: {
    fontSize: 17,
    color: '#000000',
    marginLeft: 15,
  },
  icon: {
    fontSize: 17,
    color: '#EC7149',
    marginRight: 15
  }
});

export default InputTypeRow;