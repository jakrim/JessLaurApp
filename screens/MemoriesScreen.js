import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Button,
  Flatlist,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

// import BackgroundImage from '../components/Memory';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Memory from '../components/Memory';

const image = require('../assets/BackgroundImage.jpg');

const MemoriesScreen = () => {
  return (
    <>
      {/* <BackgroundImage style={styles.image} /> */}
      <ImageBackground
        style={styles.image}
        source={require('../assets/BackgroundImage.jpg')}
      >
        <ScrollView>
          <Card style={styles.header}>
            <Text style={styles.headerText}>Hi Love,</Text>
            <Text style={styles.headerText}>
              I hope you can forgive all the hours I spent coding, I wanted to
              make you something as special and incredible as you. {'\n'} Happy
              23rd Birthday!!
            </Text>
          </Card>
          <View style={styles.memory}>
            <Memory style={styles.memory} />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    paddingVertical: 30,
    flex: 1,
    resizeMode: 'cover',
    // opacity: 0.9,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  header: {
    margin: 5,
    marginTop: 50,
    backgroundColor: Colors.lightPink,
  },
  headerText: {
    fontFamily: 'porcelain',
    fontSize: 30,
    padding: 5,
    color: Colors.magenta,
  },
  memory: {
    // backgroundColor: Colors.lightPink,
    // width: '80%',
    // height: 200,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default MemoriesScreen;
