// const standard = require('@neutrinojs/standardjs');
const react = require('@neutrinojs/react');
// const jest = require('@neutrinojs/jest');

const bundling = (neutrino) => {
  neutrino.config.optimization.merge({
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          reuseExistingChunk: true,
        },
      },
    },
  });
};

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    // standard(),
    react({
      html: {
        title: 'Screenshot Sudoku Solver',
      },
      publicPath: '',
      hot: true,
    }),
    bundling,
    // jest(),
  ],
};
