const explain = {
  mode: 'production',
  target: 'web',
  context: 'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku',
  stats: {
    children: false,
    entrypoints: false,
    modules: false,
  },
  node: {
    Buffer: false,
    fs: 'empty',
    tls: 'empty',
  },
  output: {
    path: 'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\build',
    publicPath: '',
    filename: 'assets/[name].[contenthash:8].js',
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: [
      '.web.jsx',
      '.web.js',
      '.wasm',
      '.mjs',
      '.jsx',
      '.js',
      '.json',
    ],
  },
  module: {
    rules: [
      /* neutrino.config.module.rule('html') */
      {
        test: /\.html$/,
        use: [
          /* neutrino.config.module.rule('html').use('html') */
          {
            loader:
              'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\html-loader\\index.js',
            options: {
              attrs: ['img:src', 'link:href'],
            },
          },
        ],
      },
      /* neutrino.config.module.rule('compile') */
      {
        test: /\.(mjs|jsx|js)$/,
        include: [
          'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\src',
          'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\test',
        ],
        use: [
          /* neutrino.config.module.rule('compile').use('babel') */
          {
            loader:
              'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\babel-loader\\lib\\index.js',
            options: {
              cacheDirectory: true,
              babelrc: false,
              configFile: false,
              presets: [
                [
                  'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\@babel\\preset-env\\lib\\index.js',
                  {
                    debug: false,
                    useBuiltIns: false,
                    targets: {
                      browsers: [
                        'last 2 Chrome versions',
                        'last 2 Firefox versions',
                        'last 2 Edge versions',
                        'last 2 Opera versions',
                        'last 2 Safari versions',
                        'last 2 iOS versions',
                      ],
                    },
                  },
                ],
                [
                  'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\@babel\\preset-react\\lib\\index.js',
                  {
                    development: false,
                    useSpread: true,
                  },
                ],
              ],
              plugins: [
                'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\@babel\\plugin-syntax-dynamic-import\\lib\\index.js',
                'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\react-hot-loader\\babel.js',
                [
                  'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\babel-plugin-transform-react-remove-prop-types\\lib\\index.js',
                  {
                    removeImport: true,
                  },
                ],
                [
                  'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\@babel\\plugin-proposal-class-properties\\lib\\index.js',
                  {
                    loose: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      /* neutrino.config.module.rule('style') */
      {
        oneOf: [
          /* neutrino.config.module.rule('style').oneOf('modules') */
          {
            test: /\.module\.css$/,
            use: [
              /* neutrino.config.module.rule('style').oneOf('modules').use('extract') */
              {
                loader:
                  'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  esModule: true,
                },
              },
              /* neutrino.config.module.rule('style').oneOf('modules').use('css') */
              {
                loader:
                  'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  importLoaders: 0,
                  modules: true,
                },
              },
            ],
          },
          /* neutrino.config.module.rule('style').oneOf('normal') */
          {
            test: /\.css$/,
            use: [
              /* neutrino.config.module.rule('style').oneOf('normal').use('extract') */
              {
                loader:
                  'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  esModule: true,
                },
              },
              /* neutrino.config.module.rule('style').oneOf('normal').use('css') */
              {
                loader:
                  'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  importLoaders: 0,
                },
              },
            ],
          },
        ],
      },
      /* neutrino.config.module.rule('font') */
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          /* neutrino.config.module.rule('font').use('file') */
          {
            loader:
              'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      /* neutrino.config.module.rule('image') */
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|webp)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          /* neutrino.config.module.rule('image').use('url') */
          {
            loader:
              'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 8192,
              name: 'assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 5,
      name: false,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'external',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
  },
  plugins: [
    /* neutrino.config.plugin('html-index') */
    new (require('F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\html-webpack-plugin\\index.js'))(
      {
        template:
          'F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\@neutrinojs\\html-template\\template.ejs',
        appMountId: 'root',
        lang: 'en',
        meta: {
          viewport: 'width=device-width, initial-scale=1',
        },
        filename: 'index.html',
        chunks: ['index'],
        title: 'Screenshot Sudoku Solver',
      }
    ),
    /* neutrino.config.plugin('extract') */
    new (require('F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\mini-css-extract-plugin\\dist\\cjs.js'))(
      {
        filename: 'assets/[name].[contenthash:8].css',
      }
    ),
    /* neutrino.config.plugin('clean') */
    new (require('F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\node_modules\\clean-webpack-plugin\\dist\\clean-webpack-plugin.js'))(
      {
        verbose: false,
      }
    ),
  ],
  entry: {
    index: ['F:\\PersonalWebsite\\FrontEnd\\projects\\sudoku\\src\\index'],
  },
};
