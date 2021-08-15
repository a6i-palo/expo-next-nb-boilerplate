// Re-export the root component from the Next.js website
// as the root component for the native React app.
import {registerRootComponent} from 'expo';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Constants from 'expo-constants';
import {default as App} from './pages/index';
import {default as Storybook} from './storybook';
import {theme} from './theme';

function MyApp() {
    return (
        <NativeBaseProvider theme={theme}>
            {Constants!.manifest!.extra?.enableStorybook ? <Storybook /> : <App />}
        </NativeBaseProvider>
    );
}

export default registerRootComponent(MyApp);
