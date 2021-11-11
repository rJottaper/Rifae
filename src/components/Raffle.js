import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Raffle = ({ urlImage, title, people, date, prizeDescription, prizeValue }) => {
  const navigation = useNavigation();

  const sendDetails = () => {
    navigation.navigate('RaffleDetails', {
      urlImage: urlImage,
      title: title,
      people: people,
      date: date,
      prizeDescription: prizeDescription,
      prizeValue: prizeValue
    });
  };

  if (urlImage) {
    return (
      <TouchableOpacity style={styles.container} onPress={() => sendDetails()}>
        <Image source={urlImage} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.viewPeople}>
              <FontAwesome style={styles.peopleIcon} name="users" />
              <Text style={styles.people}>{people}</Text>
            </View>
          </View>
          <Text style={styles.date}>{date}</Text>
        </View>
        <FontAwesome style={styles.icon} name="chevron-right" />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.container} onPress={() => sendDetails()}>
        <View style={styles.image} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.viewPeople}>
              <FontAwesome style={styles.peopleIcon} name="users" />
              <Text style={styles.people}>{people}</Text>
            </View>
          </View>
          <View style={styles.viewDate}>
            <FontAwesome style={styles.dateIcon} name="calendar" />
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
        <FontAwesome style={styles.icon} name="chevron-right" />
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 108,
    marginBottom: 10
  },
  image: {
    width: 79,
    height: 79,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    marginLeft: 10,
  },
  content: {
    flex: 1
  },
  header: {
    marginBottom: 10,
    marginLeft: 10
  },
  title: {
    fontSize: 17,
    color: '#4F4F4F',
  },
  viewPeople: {
    flexDirection: 'row'
  },
  people: {
    fontSize: 14,
    color: '#8F8F8F'
  },
  peopleIcon: {
    fontSize: 12,
    color: '#8F8F8F',
    marginTop: 3,
    marginRight: 3
  },
  viewDate: {
    flexDirection: 'row',
    marginLeft: 10
  },
  date: {
    fontSize: 14,
    color: '#8F8F8F',
  },
  dateIcon: {
    fontSize: 12,
    color: '#8F8F8F',
    marginTop: 2,
    marginRight: 3
  },
  icon: {
    fontSize: 17,
    color: '#EC7149',
    marginRight: 15
  }
});

export default Raffle;