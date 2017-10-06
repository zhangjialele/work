var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:__dirname+"/src/main.js",
    output:{
        path:__dirname+"/dist",
        filename:"[name].js",
        chunkFilename:"[name].js"
    },
    module:{
        rules:[{
            test:/\.js$/,
            use:["babel-loader"]
        },
        {
            test:/\.vue$/,
            use:["vue-loader"]
        },
        {
            test:/\.css$/,
            use:["style-loader","css-loader"]
        },
        {
            test:/\.html$/,
            use:["html-loader"]
        },
        {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
            name: '[name].[ext]?[hash]'
            }
        }
        ]
    },
    devServer:{
        host:"localhost",
        port:8888,
        hot:true,
        contentBase:__dirname+"/static",
        watchContentBase:true
    },
    plugins:[
       // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:"common",
            filename:"common"
        }),
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ],
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    }
}
