import React from 'react';
import { SafeAreaView, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderNavigation from '../components/HeaderNavigation';
import InputDetails from '../components/InputDetails';
import Button from '../components/Button';

const RaffleDetails = ({ route }) => {
  const navigation = useNavigation();

  const { urlImage, title, people, date, prizeDescription, prizeValue } = route.params;

  const Ticket = () => {
    navigation.navigate('BuyTicket', {
      title: title,
      people: people
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigation title={title} icon name="chevron-left" onPress={() => navigation.goBack()} />
      <View style={styles.viewImage}>
        {urlImage ? <Image style={styles.image} source={{ uri: urlImage }} /> : <Image style={styles.image} source={require('../assets/rifae.png')} />} 
      </View>
      <View style={styles.container}>
        <InputDetails name="Prize Name" title={title} />
        <InputDetails name="Prize Description" description title={prizeDescription} />
        <InputDetails name="Raffle Value" currency title={prizeValue} />
      </View>
      <Button title="Sheets" backgroundColor="#EC7149" color='#FFFFFF' onPress={() => Ticket()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    justifyContent: 'center'
  },
  viewImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#C4C4C4'
  },
  image: {
    width: '100%',
    height: 200
  }
});

export default RaffleDetails;