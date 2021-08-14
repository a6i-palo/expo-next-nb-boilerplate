import React from 'react';
import type { NextPage } from 'next'
import {Text} from 'native-base'
import {StyleSheet, View} from 'react-native';

const Home: NextPage = () => (
    <View style={styles.container}>
      <Text fontSize="lg">Welcome to Expo + Next.js 👋</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Home
