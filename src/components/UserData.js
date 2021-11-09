import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserData = ({ type, data }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#C8C7CC'
  },
  type: {
    fontSize: 17,
    color: '#EC7149',
    marginLeft: 10
  },
  data: {
    fontSize: 16,
    color: '#8F8F8F',
    marginRight: 10
  }
});

export default UserData;