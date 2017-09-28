var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");
var arr=[{
    "img":"images/img_05.jpg",
    "info":"优选100"
    
},
{
    "img":"images/img_07.jpg",
    "info":"新品尝鲜"
},
{
    "img":"images/img_09.jpg",
    "info":"本周热卖"
},
{
    "img":"images/img_11.jpg",
    "info":"0元试吃"
},
{
    "img":"images/img_13.jpg",
    "info":"天天果园"
}]
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
        }
        ]
    },
    devServer:{
        host:"localhost",
        port:9999,
        hot:true,
        contentBase:__dirname+"/src/static",
        watchContentBase:true,
        setup(app){
            app.get("/list",function(req,res,next){
                res.setHeader("Access-Control-Allow-Origin","*");
				res.setHeader("content-type","application/json;charset=utf-8");
                res.json(arr);
            })
        }
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