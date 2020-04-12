import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Flatlist,
  ImageBackground,
} from 'react-native';

import Memory from '../components/Memory';
import StyledButton from '../components/StyledButton';
import Colors from '../constants/Colors';

const MemoriesScreen = () => {
  return (
    <>
      <ImageBackground
        style={styles.image}
        source={require('../assets/heartsBackground.jpg')}
      >
        <Memory />
        <StyledButton style={styles.button}>
          Generate Random Memory
        </StyledButton>
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
  screen: { fontSize: 20 },
  button: {
    fontSize: 30,
    backgroundColor: Colors.magenta,
  },
});

export default MemoriesScreen;
