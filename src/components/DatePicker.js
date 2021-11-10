import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = ({ title, showDatePicker, newDate, hideDatePicker, handleConfirm, isDatePickerVisible }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles} style={styles.container} onPress={showDatePicker}>
        <FontAwesome style={styles.icon} name="calendar" />
        <Text style={styles.date}>{newDate}</Text>
        <FontAwesome style={styles.icon2} name="chevron-right" />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 47,
  },
  title: {
    fontSize: 14,
    color: '#8F8F8F',
    marginTop: 15,
    marginBottom: 6,
    marginLeft: 15
  },
  date: {
    fontSize: 19,
    color: '#EC7149'
  },
  icon: {
    fontSize: 32,
    color: '#EC7149',
    marginLeft: 15,
  },
  icon2: {
    fontSize: 17,
    color: '#EC7149',
    marginRight: 15,
    marginTop: 2
  }
});

export default DatePicker;