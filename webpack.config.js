module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: __dirname,
    filename: './dist/main.js',
  },
  context: __dirname,
  target: 'node',
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
};
