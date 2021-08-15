const {withEnzyme} = require('jest-expo-enzyme');

const react17Config = {
    testEnvironmentOptions: {
        enzymeAdapter: 'react17',
    },
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
};

module.exports = {
    preset: 'jest-expo-enzyme',
    projects: [
        {
            ...withEnzyme(require('jest-expo/ios/jest-preset')),
            ...react17Config,
        },
        {
            ...withEnzyme(require('jest-expo/android/jest-preset')),
            ...react17Config,
        },
        {
            ...withEnzyme(require('jest-expo/web/jest-preset')),
            ...react17Config,
        },
    ],
};
