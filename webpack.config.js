const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:"babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use:["style-loader", "css-loader", "sass-loader"]
            }
        ],  
    },
    mode: "development" 
}