// Re-export the root component from the Next.js website
// as the root component for the native React app.
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {default as App} from './pages/index';

function MyApp() {
    return (
        <NativeBaseProvider>
            <App />
        </NativeBaseProvider>
    );
}

export default MyApp;
