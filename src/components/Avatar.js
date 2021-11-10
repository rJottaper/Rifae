import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ urlImage }) => {
  if (urlImage) {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: urlImage }} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('../assets/avatar.png')} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 39,
    marginBottom: 39,
  },
  avatar: {
    width: 168,
    height: 168,
    borderRadius: 84
  }
});

export default Avatar;