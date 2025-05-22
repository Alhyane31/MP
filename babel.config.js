module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        // Must be *before* react-native-reanimated/plugin
        '@babel/plugin-proposal-optional-chaining',
        'react-native-reanimated/plugin',
      ],
    };
  };
  