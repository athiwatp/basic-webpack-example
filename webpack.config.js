const path = require('path')
module.exports = {
  entry: './app.js', // Entry file
  output: {
    filename: path.resolve(__dirname, 'bundle.js') // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // For .js files..
        use: {
          loader: 'babel-loader' // Process with the Babel loader
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
