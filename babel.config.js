module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/screens': './src/screens',
          '~/styles': './src/styles',
          '~/routes': './src/routes',
          '~/services': './src/services',
          '~/hooks': './src/hooks',
        },
      },
    ],
  ],
};
