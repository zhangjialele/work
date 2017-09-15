var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");
var arr=[
{
    "tit":"音乐",
    "img":"images/1 (2).jpg"
},
{
    "tit":"历史",
    "img":"images/1 (3).jpg"
},
{
    "tit":"情感生活",
    "img":"images/1 (4).jpg"
},
{
    "tit":"人文",
    "img":"images/1 (5).jpg"
},
{
    "tit":"付费精品",
    "img":"images/1 (6).jpg"
},
{
    "tit":"脱口秀",
    "img":"images/1 (7).jpg"
},
{
    "tit":"娱乐",
    "img":"images/1 (8).jpg"
},
{
    "tit":"英语",
    "img":"images/1 (9).jpg"
},
{
    "tit":"戏曲",
    "img":"images/1 (10).jpg"
},
{
    "tit":"动漫游戏",
    "img":"images/1 (11).jpg"
},
{
    "tit":"名校公开课",
    "img":"images/1 (12).jpg"
},
{
    "tit":"党团课",
    "img":"images/1 (13).jpg"
},
{
    "tit":"旅游",
    "img":"images/1 (14).jpg"
},
{
    "tit":"电台",
    "img":"images/1 (15).jpg"
},
{
    "tit":"IT科技",
    "img":"images/1 (16).jpg"
},
{
    "tit":"汽车",
    "img":"images/1 (17).jpg"
},
{
    "tit":"国学书院",
    "img":"images/1 (18).jpg"
},
{
    "tit":"3D体验馆",
    "img":"images/1 (19).jpg"
},
{
    "tit":"头条",
    "img":"images/1 (20).jpg"
},
{
    "tit":"广播剧",
    "img":"images/1 (1).jpg"
}

];
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
        new webpack.optimize.UglifyJsPlugin(),
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