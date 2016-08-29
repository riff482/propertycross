var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/app",
    output: {
        path: __dirname + '/public/js',
        filename: "app.min.js"
    },
    module: {
        loaders: [
            { test: /\.less$/, loader:  ExtractTextPlugin.extract("style", "css?url=false&minimize!less") },
            { test: /\.(eot|woff|ttf|svg|png|jpg)$/, loader: 'raw-loader'}
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/style.min.css")
    ],
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
};