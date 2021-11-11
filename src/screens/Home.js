import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderNavigation from '../components/HeaderNavigation';
import Button from '../components/Button';
import Raffle from '../components/Raffle';

const Home = ({ route }) => {
  const navigation = useNavigation();

  const [raffles, setRaffles] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { prizeName, prizeDescription, raffleValue, newDate, numberPeople } = route.params;
      setRaffles(oldData => [ ...oldData, { prizeName, prizeDescription, raffleValue, newDate, numberPeople }]);
    };
  }, [route.params]);

  if (raffles.length < 1) {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderNavigation title="Raffles" />
        <View style={styles.contentNull}>
          <Text style={styles.textOne}>Ops! It looks a little bit quiet here. You have not created any raffle yet</Text>
          <Text style={styles.textTwo}>Start by selecting this button</Text>
          <Image source={require('../assets/Arrow.png')} />
        </View>
        <Button title="New Raffle" backgroundColor="#EC7149" color="#FAFAFA" onPress={() => navigation.navigate('NewRaffle')} />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderNavigation title="Raffles" />
        <View style={styles.content}>
          <FlatList 
            data={raffles}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item }) => <Raffle title={item.prizeName} people={item.numberPeople} prizeDescription={item.prizeDescription} date={item.newDate} prizeValue={item.raffleValue} />}
          />
        </View>
        <Button title="New Raffle" backgroundColor="#EC7149" color="#FAFAFA" onPress={() => navigation.navigate('NewRaffle')} />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentNull: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1
  },
  textOne: {
    textAlign: 'center',
    color: '#8F8F8F',
    lineHeight: 22,
    marginHorizontal: 16,
    marginBottom: 20
  },
  textTwo: {
    textAlign: 'center',
    color: '#8F8F8F',
    lineHeight: 22,
    marginHorizontal: 16,
    marginBottom: 54
  }
});

export default Home;