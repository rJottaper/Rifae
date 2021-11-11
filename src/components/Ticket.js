import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const Ticket = ({ title, onPress }) => {
  const [paid, setPaid] = useState(false);

  const isPaid = () => {
    setPaid(true)
  }

  if (paid == true) {
    return (
      <View style={styles.ticketPaid}>
        <View style={styles.viewImage}>
          <Image style={styles.image} source={require('../assets/rifae.png')} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.viewPaid}>
          <Text style={styles.paid}>PAID</Text>
        </View>
      </View>
    );
  } else {
    return (
      <>
        <TouchableOpacity style={styles.ticket} onPress={() => { isPaid(); onPress(); }}>
          <View style={styles.viewImage}>
            <Image style={styles.image} source={require('../assets/rifae.png')} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        
      </>
    );
  }
};

const styles = StyleSheet.create({
  ticket: {
    alignItems: 'center',
    width: 115,
    height: 130,
    backgroundColor: '#E0E0E0',
    marginTop: 15,
    marginLeft: 5,
    borderRadius: 15,
  },
  ticketPaid: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 115,
    height: 130,
    backgroundColor: '#E0E0E0',
    marginTop: 15,
    marginLeft: 5,
    borderRadius: 15
  },
  viewImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#B9B9B9',
    marginTop: 15
  },
  image: {
    width: 54,
    height: 54
  },
  title: {
    fontSize: 22,
    color: '#4F4F4F',
    marginTop: 15
  },
  viewPaid: {
    backgroundColor: '#EC7149',
    width: 115,
    height: 15,
    borderRadius: 5,
  },
  paid: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
});

export default Ticket;