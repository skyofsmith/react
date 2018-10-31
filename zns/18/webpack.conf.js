module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'source-map',
    module:  {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js$/,
                loader: 'react-hot!babel',
                exclude: /node_modules/
            }
        ]
    }
}
