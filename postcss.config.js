/* eslint-disable @typescript-eslint/no-var-requires */
const postcssPresetEnv = require('postcss-preset-env');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = () => {
  if (isProduction) {
    return { plugins: [postcssPresetEnv({ browsers: 'last 2 versions' })] };
  }
  return {};
};
