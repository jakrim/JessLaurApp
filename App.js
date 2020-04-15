import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import VirtualCard from './screens/VirtualCard';
import MemoriesScreen from './screens/MemoriesScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    balqis: require('./assets/fonts/Balqis.ttf'),
    'dm-sans-boldItalic': require('./assets/fonts/DMSans-BoldItalic.ttf'),
    porcelain: require('./assets/fonts/Porcelain.ttf'),
    Reckless: require('./assets/fonts/Reckless.otf'),
  });
};

const ApplicationNavigator = createStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <ApplicationNavigator.Navigator screenOptions={{ headerShown: false }}>
      <ApplicationNavigator.Screen name='Home' component={HomeScreen} />
      <ApplicationNavigator.Screen name='Card' component={VirtualCard} />
      <ApplicationNavigator.Screen name='Memories' component={MemoriesScreen} />
    </ApplicationNavigator.Navigator>
  </NavigationContainer>
);

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

  return <AppStack />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
