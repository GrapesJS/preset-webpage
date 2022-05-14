const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const webpack = require('webpack');
const fs = require('fs');
const name = pkg.name;
let plugins = [];
const rootDir = path.resolve(__dirname);

module.exports = (env = {}) => {
  console.log(env)
  if (env.production) {
    plugins = [
      new webpack.optimize.UglifyJsPlugin({ minimize: true, compressor: { warnings: false }}),
      new webpack.BannerPlugin(`${name} - ${pkg.version}`),
    ]
  } else {
    const index = 'index.html';
    const indexDev = '_' + index;
    plugins.push(new HtmlWebpackPlugin({
      template: fs.existsSync(indexDev) ? indexDev : index
    }));
  }

  return {
    entry: './src',
    output: {
        filename: `./dist/${name}.min.js`,
        library: name,
        libraryTarget: 'umd',
    },
    devServer: {
      ...env.devServer,
      static: [rootDir],
      headers: { 'Access-Control-Allow-Origin': '*' },
      allowedHosts: 'all',
    },
    module: {
      rules: [{
          test: /\.js$/,
          use: 'babel-loader',
          include: /src/,
      }],
    },
    externals: {'grapesjs': 'grapesjs'},
    plugins: plugins,
  };
}
