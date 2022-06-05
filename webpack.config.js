const path = require('path')
const env = require('yargs').argv.env
const pkg = require('./package.json')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const lowercaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const libraryName = 'Mui'
const fileName = lowercaseFirstLetter(libraryName)

let outputFile, mode, devtool, outputPath

if (env === 'build') {
  mode = 'production'
  outputPath = path.join(__dirname, '/dist')
  outputFile = `${fileName}.min.js`
  devtool = false
} else {
  mode = 'development'
  outputPath = path.join(__dirname, '/dist')
  outputFile = `${fileName}.js`
  devtool = 'inline-source-map'
}

const config = {
  mode: mode,
  entry: {
    [libraryName]: ['@babel/polyfill', './src/index.ts']
  },
  target: ['web', 'es5'],
  devtool: devtool,
  output: {
    path: outputPath,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'typeof self !== "undefined" ? self : this'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }      
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.ts', 'tsx'],
    plugins: [new TsconfigPathsPlugin()]
  },
  devServer: {
    port: 8082,
    contentBase: path.join(__dirname, '/'),
    writeToDisk: true
  }
}

module.exports = config