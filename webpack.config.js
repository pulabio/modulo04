const path = require('path');

module.exports = {
  // não posso dizer entry: 'src/index.js' por causa da diferença da barra usada
  // por diferentes Sistemas Operacionais... é mole?
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      
    ]
  }
}