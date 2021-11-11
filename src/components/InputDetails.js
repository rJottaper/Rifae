import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InputDetails = ({ name, title, description, currency }) => {
  if (description) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.viewDescription}>
          <Text style={styles.details}>{title}</Text>
        </View>
      </View>
    );
  } else if (currency) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.view}>
          <Text style={styles.details}>U$ {title}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.view}>
          <Text style={styles.details}>{title}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#8F8F8F',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 6
  },
  view: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 39,
    justifyContent: 'center'
  },
  viewDescription: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 120,
    justifyContent: 'center'
  },
  details: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15
  }
});

export default InputDetails;