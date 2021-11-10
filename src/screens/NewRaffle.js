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
    if (raffleValue <= 2) {
      setRaffleValue(2);
    };
  };

  const IncreaseValue = () => {
    setRaffleValue(raffleValue + 1);
  };

  // Calendar Part

  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  }; 

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const newDate = day + '/' + month + '/' + year;

  // Validation

  const [isValidPrizeName, setIsValidPrizeName] = useState(true);
  const [isValidPrizeDate, setIsValidPrizeDate] = useState(true);
  
  const nextStep = () => {
    if (prizeName == '' || prizeName.length < 6) {
      return setIsValidPrizeName(false);
    };
    navigation.navigate('FinishRaffle', {
      prizeName: prizeName,
      prizeDescription: prizeDescription,
      raffleValue: raffleValue,
      newDate: newDate
    });
  };

  const PrizeNameInput = (value) => {
    setPrizeName(value)
    if (value.length > 6) {
      setIsValidPrizeName(true);
    };
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
            <InputTextRow name="Prize Name" value={prizeName} newValue={(value) => PrizeNameInput(value)} bold="bold" />
            {isValidPrizeName ? null : <Text style={styles.msgError}>Please, put a name!</Text>}
            <InputTextRow name="Prize Description" value={prizeDescription} newValue={(value) => setPrizeDescription(value)} multiline  />
            <InputValueRow 
              name="Raffle Value" 
              currency value={raffleValue} 
              newValue={(value) => setRaffleValue(value)} 
              onPressLeft={() => DecreaseValue()} 
              onPressRight={() => IncreaseValue()} 
            />
            <DatePicker 
              title="Prize Draw" 
              showDatePicker={() => showDatePicker()} 
              hideDatePicker={() => hideDatePicker()} 
              newDate={newDate.toString()} 
              handleConfirm={(date) => handleConfirm(date)}
              isDatePickerVisible={isDatePickerVisible}  
            />
          </View>
        </KeyboardAvoidingView>
        <Button title="Next" color='#FFFFFF' backgroundColor='#EC7149' onPress={() => nextStep()} />
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
  msgError: {
    marginTop: 15,
    marginLeft: 15,
    color: '#ff305e',
    fontWeight: 'bold'
  },
});

export default NewRaffle;