import React from 'react';
import { Image, StyleSheet, FlatList } from 'react-native';
import { MEMORIES } from '../data/dummy-data';

import MemoryItem from '../components/MemoryItem';
import Card from './Card';

const Memory = (props) => {
  return (
    <Card style={styles.card}>
      <FlatList
        style={styles.card}
        keyExtractor={(memory) => memory.id}
        data={MEMORIES}
        renderItem={(itemData) => (
          <MemoryItem
            id={itemData.item.id}
            title={itemData.item.title}
            location={itemData.item.location}
            description={itemData.item.description}
            image={itemData.item.image}
          />
        )}
      />
    </Card>
  );
  // <View>
  //   <Image
  //     style={styles.image}
  //     // source={require('../assets/Memory.jpg')}
  //   />
  // </View>;
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    // justifyContent: 'center',
    // height: '100%',
    // opacity: 0.8,
  },
});

export default Memory;
