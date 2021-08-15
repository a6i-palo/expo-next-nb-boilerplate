module.exports = {
    presets: ['@expo/next-adapter/babel'],
    plugins: ['transform-inline-environment-variables', ['@babel/plugin-proposal-class-properties', {loose: true}]],
};
