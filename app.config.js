module.exports = ({config}) => {
    return {
        ...config,
        extra: {
            enableStorybook: process.env.STORYBOOK === 'true',
        },
    };
};
