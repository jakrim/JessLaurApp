import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import MemoriesScreen from './screens/MemoriesScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    balqis: require('./assets/fonts/Balqis.ttf'),
    'dm-sans-boldItalic': require('./assets/fonts/DMSans-BoldItalic.ttf'),
    porcelain: require('./assets/fonts/Porcelain.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  while (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log('Error in Loading Fonts', err)}
      />
    );
  }

  return <MemoriesScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
