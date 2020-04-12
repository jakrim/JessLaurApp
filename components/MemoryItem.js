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

const MemoryItem = (props) => {
  return (
    <View style={styles.memoryItem}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {props.title}
          </Text>
          <Text style={styles.title} numberOfLines={1}>
            {props.location}
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={props.image} style={styles.image} />
        </View>
      </View>
      <View style={styles.description}>
        <Text>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  memoryItem: {
    flex: 1,
    // width: '80%',
    alignItems: 'center',
    margin: 30,
  },
  image: {
    width: Dimensions.get('window').width * 1.3,
    height: Dimensions.get('window').width * 1.3,
    // borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    overflow: 'hidden',
    resizeMode: 'contain',
    marginVertical: 10,
  },
  titleContainer: {
    backgroundColor: Colors.lightPink,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'balqis',
    fontSize: 24,
    color: Colors.pink,
    textAlign: 'center',
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
