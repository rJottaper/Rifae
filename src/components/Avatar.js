import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ urlImage }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: urlImage }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 39,
    marginBottom: 39
  },
  avatar: {
    width: 168,
    height: 168,
    borderRadius: 84
  }
});

export default Avatar;