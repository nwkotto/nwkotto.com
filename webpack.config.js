module.exports = {
    entry: "./main.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    }
};