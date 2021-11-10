import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AddImage = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.view}>
        <FontAwesome style={styles.icon1} name="image" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <FontAwesome style={styles.icon2} name="chevron-right" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 44,
    marginTop: 26,
  },
  view: {
    flexDirection: 'row'
  },
  icon1: {
    fontSize: 22,
    color: '#EC7149',
    marginLeft: 10,
  },
  title: {
    fontSize: 17,
    color: '#EC7149',
    marginLeft: 15
  },
  icon2: {
    fontSize: 17,
    color: '#EC7149',
    marginRight: 10
  }
});

export default AddImage;