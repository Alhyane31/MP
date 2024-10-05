module.exports = {
  dependencies: {
    'react-native-sqlite-storage': {
      platforms: {
        ios: null, // Remove or set to null if iOS configuration is not needed
      },
    },
  },
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets']
};