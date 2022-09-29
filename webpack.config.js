const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },

    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[ext]/[name][ext][query]',
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(txt)$/i,
            type: 'asset/resource',
          },
        ],
    },
};