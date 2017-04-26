var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:4444/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js']
    },
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['react-hot-loader', 'babel-loader']
        }
        ]
    },
/*    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]*/
};


//boilerplate code for webpack setup
//path helps manipulate path names easily

//devtool provides line numbers for showing errors
//entry is where webpack looks for the files
//src is where it will look for the initial file to run. No file name so by default it looks for index.js
//output - webpack would output files here, but this is just for production.
//bundle.js is standard
//resolve is where webpack looks for the files to bundle
//module loaders - just need js files for this.
//react-hot is for hot reloading
//plugins, HotModuleReplacementPlugin for hot reloading
