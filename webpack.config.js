const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist', // Folder to store generated bundle
        filename: 'bundle.js',  // Name of generated bundle after build
        publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ],
    },
    devServer: {
        contentBase: './src',
        hot: true,
        port: 3000,
    }
}