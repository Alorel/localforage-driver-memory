const {join} = require('path');

module.exports = function () {
  return {
    target: 'web',
    entry: join(__dirname, 'src', 'index.ts'),
    devtool: '(none)',
    output: {
      path: join(__dirname, 'dist', 'umd'),
      filename: 'bundle.umd.js',
      libraryTarget: 'umd',
      library: 'localforageDriverMemory'
    },
    resolve: {
      mainFields: ['fesm5', 'esm5', 'module', 'es5', 'browser', 'main'],
      extensions: ['.js', '.ts', '.json']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{
            loader: 'ts-loader',
            options: {
              configFile: join(__dirname, 'tsconfig.esm5.json'),
              context: __dirname,
              colors: true
            }
          }]
        }
      ]
    }
  }
}