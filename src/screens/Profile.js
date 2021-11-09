import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import HeaderNavigation from '../components/HeaderNavigation'
import Avatar from '../components/Avatar';
import UserData from '../components/UserData';
import Button from '../components/Button'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigation title="Profile" />
      <View style={styles.content}>
        <Avatar urlImage="https://github.com/rJottaper.png" />
        <UserData type="Name" data="Joao Pedro Rocha" />
        <UserData type="E-mail" data="rjoao.dev@gmail.com" />
      </View>
      <Button title="Logout" backgroundColor="#FFFFFF" color="#EC7149" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1
  }
})

export default Profile;