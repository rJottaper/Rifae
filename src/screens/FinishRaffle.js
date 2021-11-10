import React, { useState } from 'react';
import { SafeAreaView, View, Text, Alert, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import HeaderNavigation from '../components/HeaderNavigation';
import AddImage from '../components/AddImage';
import InputValueRow from '../components/InputValueRow';
import InputTypeRow from '../components/InputTypeRow';
import Button from '../components/Button';

const FinishRaffle = () => {
  const navigation = useNavigation();
  const [numberPeople, setNumberPeople] = useState(0);

  const DecreaseValue = () => {
    setNumberPeople(numberPeople - 1);
    if (numberPeople <= 0) {
      setNumberPeople(0);
    };
  };

  const IncreaseValue = () => {
    setNumberPeople(numberPeople + 1)
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <SafeAreaView style={styles.container}>
        <HeaderNavigation title="Create Raffle" icon name="chevron-left" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <Text style={styles.step}>step 02/02</Text>
          <AddImage title="Add Prize Image" />
          <InputValueRow name="Number of Participants" value={numberPeople} newValue={(value) => setNumberPeople(value)} onPressLeft={() => DecreaseValue()} onPressRight={() => IncreaseValue()}  />
          <View style={styles.viewInfo}>
            <Text style={styles.title}>Raffle Type</Text>
            <TouchableOpacity onPress={() => Alert.alert('Please, choose a type to your raffle.')}>
              <FontAwesome style={styles.icon} name="info-circle" />
            </TouchableOpacity>
          </View>
          <InputTypeRow type="Car Names" />
          <InputTypeRow type="Men Names" />
          <InputTypeRow type="Women Names" />
          <InputTypeRow type="Numbers" />
        </View>
        <Button title="Create" backgroundColor="#EC7149" color="#FFFFFF" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1
  },
  step: {
    fontSize: 13,
    color: '#8F8F8F',
    marginTop: 11,
    textAlign: 'center'
  },
  viewInfo: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 6
  },
  title: {
    fontSize: 14,
    color: '#8F8F8F'
  },
  icon: {
    fontSize: 17,
    color: '#EC7149',
    paddingHorizontal: 5
  },
})

export default FinishRaffle;