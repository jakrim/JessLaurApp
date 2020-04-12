import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';

const MemoryItem = (props) => {
  return (
    <Card style={styles.memoryItem}>
      <View style={{ width: '100%' }}>
        {/* <View style={styles.titleContainer}> */}

        <Text style={styles.location}>
          <Ionicons
            name={Platform.OS === 'android' ? 'md-pin' : 'ios-pin'}
            size={24}
            color={Colors.primaryColor}
            style={styles.callTxt}
          />{' '}
          {props.location}
        </Text>
        {/* </View> */}
        <View style={{ alignItems: 'center' }}>
          <Image source={props.image} style={styles.image} />
        </View>
      </View>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.description}>
        <Text>{props.description}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  memoryItem: {
    flex: 1,
    // width: '80%',
    alignItems: 'center',
    margin: 35,
    backgroundColor: Colors.lightPink,
    // opacity:
  },
  image: {
    width: Dimensions.get('window').width * 1.3,
    height: Dimensions.get('window').width * 1.3,
    // borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderRadius: 10,
    // borderWidth: 0.5,
    borderColor: 'black',
    // overflow: 'hidden',
    resizeMode: 'contain',
    marginVertical: 5,
  },
  // titleContainer: {
  //   backgroundColor: Colors.lightPink,
  //   paddingVertical: 5,
  //   marginHorizontal: 100,
  //   width: '100%',
  //   justifyContent: 'center',
  // },
  title: {
    paddingVertical: 5,
    fontFamily: 'balqis',
    fontSize: 24,
    color: Colors.pink,
    textAlign: 'center',
  },
  location: {
    paddingTop: 10,
    fontSize: 22,
    color: Colors.magenta,
    // paddingHorizontal: 120,
    paddingHorizontal: 50,
    fontFamily: 'porcelain',
  },
  description: {
    margin: 5,
    backgroundColor: Colors.lightPink,
  },
  descriptionText: {
    textAlign: 'center',
    color: Colors.magenta,
    fontFamily: 'balqis',
    fontSize: 24,
  },
});

export default MemoryItem;
