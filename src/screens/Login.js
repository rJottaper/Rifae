import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ConnectButton from '../components/ConnectButton';

const Login = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcome}>
        <Image source={require('../assets/rifae.png')} />
        <Text style={styles.title}>Rifaê</Text>
        <Text style={styles.subtitle}>Creating, managing and inviting friends to your raffle was never so easy =)</Text>
      </View>
      <View style={styles.connect}>
        <ConnectButton color="#3B5998" title="Connect with Facebook" name="facebook" onPress={() => navigation.navigate('Home')} />
        <Text style={styles.or}>OR</Text>
        <ConnectButton color="#c5d0d1" title="Connect with Google" name="google" onPress={() => navigation.navigate('Home')} />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>Continue without connecting</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    flex: 1,
    backgroundColor: '#EC7149',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 48,
    color: '#FAFAFA',
    marginTop: 14,
    marginBottom: 7
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#FFFFFF',
    marginHorizontal: 20
  },
  connect: {
    marginTop: 50,
    marginBottom: 30
  },
  or: {
    textAlign: 'center',
    fontSize: 17,
    color: '#EC7149',
    marginVertical: 6
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    color: '#EC7149',
    marginTop: 46
  }
});

export default Login;