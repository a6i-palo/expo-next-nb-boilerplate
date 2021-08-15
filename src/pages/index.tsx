import React from 'react';
import type {NextPage} from 'next';
import {Text} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {Paper} from '../components/Paper/Paper';

const Home: NextPage = () => (
    <View style={styles.container}>
        <Text fontSize="lg">Welcome to Expo + Next.js 👋</Text>
        <Paper elevation={3} m="24px 16px" fontSize="sm">
            Boilerplate for Expo / NextJS / NativeBase / Storybook
        </Paper>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
