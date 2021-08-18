module.exports = {
    presets: ['@expo/next-adapter/babel', 'next/babel'],
    plugins: ['transform-inline-environment-variables', ['@babel/plugin-proposal-class-properties']],
};
