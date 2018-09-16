const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    mode: "development",
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude : /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
            }
        ]

  }
};