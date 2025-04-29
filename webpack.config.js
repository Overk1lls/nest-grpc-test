const CopyPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');

module.exports = function (options) {
  return {
    ...options,
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: 'apps/producer/src/data/users.json',
            to: 'apps/producer/data',
          },
          {
            from: 'proto/**/*.proto',
            to: 'proto',
          },
        ],
      }),
    ],
  };
};
