import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme} from '../src/theme';

export const decorators = [
    Story => (
        <NativeBaseProvider resetCSS theme={theme}>
            <Story />
        </NativeBaseProvider>
    )
];