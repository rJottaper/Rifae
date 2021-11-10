import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

const HeaderNavigation = ({title, icon, name, onPress}) => {
  if (icon) {
    return (
      <View>
        <View style={styles.header}> 
          <TouchableOpacity onPress={onPress}>
            <FontAwesome name={name} style={styles.icon} />
          </TouchableOpacity>
          <Text style={[styles.title, { marginRight: width / width * 35 }]}>{title}</Text>  
        </View>
        <View style={styles.border} />
      </View>
    );
  } else {
    return (
      <View>
      <View style={styles.header}> 
        <Text style={styles.title}>{title}</Text>  
      </View>
      <View style={styles.border} />
    </View>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 22,
    marginTop: 5
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    color: '#EC7149'
  },
  icon: {
    fontSize: 17,
    color: '#EC7149',
    marginLeft: 20,
    margin: 2,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#0000004D',
    marginTop: 11
  }
});

export default HeaderNavigation;