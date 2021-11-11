import React, { useEffect, useState, useRef } from 'react';
import { FlatList, View, Text, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';

import HeaderNavigation from '../components/HeaderNavigation';
import Ticket from '../components/Ticket';
import InputTextRow from '../components/InputTextRow'
import Button from '../components/Button';

const BuyTicket = ({ route }) => {
  const navigation = useNavigation();

  const { title, people } = route.params;

  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    let range = [];
    for (let i = 0; i < people; i++)
    range[i] = i + 1;
    setQuantity(range)
  }, []);

  // Modal

  const modalizeRef = useRef(null);

  const OpenModal = (value) => {
    modalizeRef.current?.open();
  };

  const CloseModal = () => {
    modalizeRef.current?.close();
    Alert.alert('Congratulations on the ticket purchase')
  };

  return (
    <>
      <SafeAreaView>
        <HeaderNavigation title={title} icon name="chevron-left" onPress={() => navigation.goBack()} />
        <FlatList 
          data={quantity}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item }) => <Ticket title={item} onPress={() => OpenModal()}  />}
          columnWrapperStyle={{ justifyContent: 'space-around' }}
          numColumns={3}
          style={styles.list}
        />
      </SafeAreaView>
        <Modalize 
        ref={modalizeRef}
        snapPoint={280}  
      >
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Continue to Buy Your Ticket</Text>
          <InputTextRow name="Buy's Name" placeholder="Your Name" />
          <FontAwesome style={styles.icon} name="smile-o" />
          <Button title="Buy" color='#FFFFFF' backgroundColor='#EC7149' onPress={() => CloseModal()} />
        </View>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    marginRight: 10,
    marginBottom: 50
  },
  modal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 280,
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  modalTitle: {
    textAlign: 'center',
    color: '#EC7149',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30
  },
  icon: {
    textAlign: 'center',
    fontSize: 40, 
    color: '#EC7149' 
  }
});

export default BuyTicket;