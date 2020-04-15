import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const { width } = Dimensions.get('window');

// import BackgroundImage from '../components/Memory';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import StyledButton from '../components/StyledButton';

const HomeScreen = (props) => {
  return (
    <>
      <ImageBackground
        style={styles.image}
        source={require('../assets/BackgroundImage.jpg')}
      >
        <ScrollView>
          <Card style={styles.header}>
            <Text style={styles.headerText}>
              Happy Birthday Lauren!!{'\n'}🇺🇸🇨🇦
            </Text>
          </Card>
          <TouchableOpacity
            style={styles.birthdayContainer}
            onPress={() => {
              props.navigation.navigate('Card');
            }}
            activeOpacity={0.8}
          >
            <Image
              style={styles.birthdayCard}
              source={require('../assets/birthdayCard.png')}
            />
          </TouchableOpacity>

          {/* <StyledButton
            style={styles.card}
            onPress={() => {
            }}
          >
            ❤️💖Open the Card!💖❤️
          </StyledButton> */}
          <View style={styles.memory}>
            <StyledButton
              style={styles.memories}
              onPress={() => {
                props.navigation.navigate('Memories');
              }}
            >
              ❤️💖💓Memories💓💖❤️
            </StyledButton>
          </View>
          <Card style={styles.hebrew}>
            <Text
              style={{
                color: '#0038B8',
                textAlign: 'center',
                fontSize: 40,
              }}
            >
              יום הולדת שמח לורן 🇮🇱 {'\n'}
              בשנה הבאה בתל אביב
            </Text>
          </Card>
          <Card style={styles.sig}>
            <Text style={styles.headerText}>אני אוהב אותך{'\n'}Jesse</Text>
          </Card>
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
  },
  header: {
    margin: 5,
    marginVertical: 25,
    backgroundColor: Colors.lightWhite,
    opacity: 0.85,
  },
  hebrew: {
    margin: 5,
    // marginVertical: 50,
    backgroundColor: Colors.lightWhite,
    opacity: 0.85,
  },
  headerText: {
    opacity: 1.0,
    textAlign: 'center',
    fontFamily: 'porcelain',
    fontSize: 45,
    padding: 5,
    color: Colors.pink,
  },
  card: {
    backgroundColor: Colors.purple,
    color: Colors.lightWhite,
    opacity: 0.95,
    fontSize: 28,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  memories: {
    backgroundColor: Colors.magenta,
    color: Colors.lightPurp,
    opacity: 0.95,
    fontSize: 35,
    fontFamily: 'Reckless',
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  memory: {
    paddingVertical: 30,
    justifyContent: 'center',
  },
  sig: {
    backgroundColor: Colors.lightWhite,
    opacity: 0.9,
    margin: 30,
  },
  birthdayCard: {
    width: width / 1.6,
    height: width / 1.3,
  },
  birthdayContainer: {
    alignItems: 'center',
  },
});

export default HomeScreen;
