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
import StyledButton from '../components/StyledButton';
import Memory from '../components/Memory';

const HomeScreen = (props) => {
  return (
    <>
      {/* <BackgroundImage style={styles.image} /> */}
      <ImageBackground
        style={styles.image}
        source={require('../assets/BackgroundImage.jpg')}
      >
        <ScrollView>
          <Card style={styles.header}>
            <Text>I need to make a card component and put text in a card</Text>
            <Text style={styles.headerText}>Hi Laur,</Text>
            <Text style={styles.headerText}>
              I hope you can forgive all the hours I spent coding, I wanted to
              make you something as special and incredible as you. {'\n'}
              <Text
                style={{
                  color: Colors.pink,
                  textAlign: 'center',
                  fontSize: 45,
                }}
              >
                Happy 23rd Birthday!!
              </Text>
            </Text>
          </Card>
          <View style={styles.memory}>
            <StyledButton
              style={styles.button}
              onPress={() => {
                props.navigation.navigate('Memories');
              }}
            >
              ❤️💓💖Memories❤️💓💖
            </StyledButton>
            {/* <Memory style={styles.memory} /> */}
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
    backgroundColor: Colors.lightWhite,
    opacity: 0.85,
  },
  headerText: {
    opacity: 1.0,
    fontFamily: 'porcelain',
    fontSize: 35,
    padding: 5,
    color: Colors.magenta,
  },
  button: {
    backgroundColor: Colors.magenta,
    // shadowOpacity: 0.2,
    // width: '100%',
    paddingVertical: 10,
  },
  memory: {
    // backgroundColor: Colors.lightPink,
    // flex: 1,
    // height: 200,
    paddingVertical: 100,

    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
