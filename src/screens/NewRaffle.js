import React, { useState } from 'react';
import { SafeAreaView, View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderNavigation from '../components/HeaderNavigation'
import InputTextRow from '../components/InputTextRow';
import InputValueRow from '../components/InputValueRow';
import Button from '../components/Button';
import DatePicker from '../components/DatePicker';

const NewRaffle = () => {
  const navigation = useNavigation();

  const [prizeName, setPrizeName] = useState('');
  const [prizeDescription, setPrizeDescription] = useState('');
  const [raffleValue, setRaffleValue] = useState(2);   

  const DecreaseValue = () => {
    setRaffleValue(raffleValue - 1);
    if (raffleValue <= 0) {
      setRaffleValue(0);
    };
  };

  const IncreaseValue = () => {
    setRaffleValue(raffleValue + 1);
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <SafeAreaView style={styles.container}>
        <HeaderNavigation title="New Raffle" icon name="chevron-left" onPress={() => navigation.goBack()} />
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? "padding" : "height"}
          style={styles.content}    
        >
          <View>
            <Text style={styles.step}>step 01/02</Text>
            <InputTextRow name="Prize Name" value={prizeName} newValue={(value) => setPrizeName(value)} bold="bold" />
            <InputTextRow name="Prize Description" value={prizeDescription} newValue={(value) => setPrizeDescription(value)} multiline  />
            <InputValueRow 
              name="Raffle Value" 
              currency value={raffleValue} 
              newValue={(value) => setRaffleValue(value)} 
              onPressLeft={() => DecreaseValue()} 
              onPressRight={() => IncreaseValue()} 
            />
          </View>
        </KeyboardAvoidingView>
        <Button title="Next" color='#FFFFFF' backgroundColor='#EC7149' onPress={() => navigation.navigate('FinishRaffle')} />
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
  }
});

export default NewRaffle;