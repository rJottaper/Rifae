import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const chooseDate = () => {
    <DateTimePicker 
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
  };

  return (
    <View>
      <View>
        <Button title="DatePicker" onPress={() => chooseDate()} />
      </View>
    </View>
  );
};

export default DatePicker;