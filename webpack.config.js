const path = require("path");

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        // historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'src/assets/images/'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: "Webpack App",
            filename: "index.html",
            template: "src/template.html"
        })
    ]
}