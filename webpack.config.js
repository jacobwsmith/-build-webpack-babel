// Babel Loader: https://github.com/babel/babel-loader
// ESLint Loader: https://github.com/MoOx/eslint-loader

var webpack = require('webpack');

module.exports = {
    eslint: {
        configFile: './.eslintrc.js'
    },
    entry: {
        dashboard: './dashboard/src/entry.js',
        accounts: './accounts/src/entry.js'
    },
    output: {
        path: __dirname,
        filename: "./dist/[name].js"
    },
    plugins: [
        // Commons Chunk
        // new webpack.optimize.CommonsChunkPlugin(options)
        /*
        options.name or options.names (string|string[]): The chunk name of the commons chunk. An existing chunk can be selected by passing a name of an existing chunk. If an array of strings is passed this is equal to invoking the plugin multiple times for each chunk name. If omitted and options.async or options.children is set all chunks are used, otherwise options.filename is used as chunk name.
        options.filename (string): The filename template for the commons chunk. Can contain the same placeholder as output.filename. If omitted the original filename is not modified (usually output.filename or output.chunkFilename.
        options.minChunks (number|Infinity|function(module, count) -> boolean): The minimum number of chunks which need to contain a module before it’s moved into the commons chunk. The number must be greater than or equal 2 and lower than or equal to the number of chunks. Passing Infinity just creates the commons chunk, but moves no modules into it. By providing a function you can add custom logic. (Defaults to the number of chunks)
        options.chunks (string[]`): Select the source chunks by chunk names. The chunk must be a child of the commons chunk. If omitted all entry chunks are selected.
        options.children (boolean): If true all children of the commons chunk are selected
        options.async (boolean): If true a new async commons chunk is created as child of options.name and sibling of options.chunks. It is loaded in parallel with options.chunks.
        options.minSize (number): Minimum size of all common module before a commons chunk is created.
        */
        new webpack.optimize.CommonsChunkPlugin('./dist/common.js')
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /(node_modules|dist)/,
            loader: "eslint-loader"
        }],
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style!css" 
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|dist)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};