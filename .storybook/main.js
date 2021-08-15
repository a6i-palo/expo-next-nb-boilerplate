const rules = [
    {
      test: /\.js$|tsx/,
      exclude: /node_modules\/(?!()\/).*/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    
]
module.exports = {
    stories: ['../src/storybook/**/*.stories.@(js|jsx|ts|tsx)'],
    webpackFinal: (config) => {
        return {
            ...config,
            resolve: { 
                ...config.resolve,
                alias: { 
                    ...config.resolve.alias, 
                    'react-native$': 'react-native-web',
                    '@storybook/react-native': '@storybook/react',
                    'styled-components/native': 'styled-components',
                    'react-native-svg': 'react-native-svg-web',
                } 
            },
            module: { ...config.module, rules: rules },
        }
    }
}