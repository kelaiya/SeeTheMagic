module.exports = {
  entry: './client/index.js', // entry point-> ./client/index.js
  output: {
    path: __dirname,
    filename: './public/bundle.js'  // output-> ./public/bundle.js (webpack will create the output file)
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      // webpack will build anything that matches scss extension into a single css file
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
       {
        test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot/,
        loader: 'file-loader'
      }
    ]
  }
}
