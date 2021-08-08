const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UnusedWebpackPlugin = require('unused-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, '/src/index.ts'),

  externals: [nodeExternals()],

  mode: 'production',

  // Outputs the file to dist/index.js.
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '/dist'),
    publicPath: '' // This fixed an error when running tests on marketplace.
  },

  plugins: [
    // By default, this plugin will remove all files inside webpack's output.
    new CleanWebpackPlugin(),

    // Copies the raw index.css file over the /dist folder. To use it in a
    // dependent project, just import like this:
    // import '@getoverflow/ui-components/dist/index.css';
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/index.css', to: 'index.css' }]
    }),

    // Tells us about any unused/"dead" code in our repository.
    new UnusedWebpackPlugin({
      directories: [path.join(__dirname, 'src')],
      exclude: ['*.test.ts*', '*.stories.tsx', 'TestUtils.ts']
    })
  ],

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: 'ts-loader'
      },

      {
        // Handles styles: .css
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },

      {
        // Handles fonts: .ttf
        exclude: /node_modules/,
        loader: 'file-loader',
        options: { context: 'src', name: 'assets/fonts/[name].[ext]' },
        test: /\.(ttf)$/
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  }
};
