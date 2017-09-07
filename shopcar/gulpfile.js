var gulp=require("gulp");
var webserver=require("gulp-webserver");
var url=require("url");
var data=[
	{
		"img":"images/img_03.jpg",
		"tit":"一说科技",
		"sub":[{
			"img":"images/img_07.jpg",
			"tit":"一说 智能机器人S1儿童陪伴机器人 玩具 早教故事机",
			"price":"￥898",
			"price2":"￥1280",
			"count":"×1"
		}]
	},
	{
		"img":"images/img_10.jpg",
		"tit":"天猫超市",
		"sub":[
			{
				"img":"images/img_14.jpg",
				"tit":"[天猫超市]达利园 瑞士卷蛋糕（草莓味）240g/袋（12枚）",
				"price":"￥14.9",
				"price2":"0.24kg",
				"count":"×1"
			},
			{
				"img":"images/img_20.jpg",
				"tit":"[天猫超市]可比克薯我任性2+1袋装薯片122g休闲膨化办公室零食",
				"price":"￥10.9",
				"price2":"0.244kg",
				"count":"×2"
			},
			{
				"img":"images/img_23.jpg",
				"tit":"[天猫超市]达利园派巧克力味涂饰蛋类芯饼20枚休闲食品好享受",
				"price":"￥24.9",
				"price2":"0.6kg",
				"count":"×1"
			},
			{
				"img":"images/img_20.jpg",
				"tit":"[天猫超市]可比克薯我任性2+1袋装薯片122g休闲膨化办公室零食",
				"price":"￥10.9",
				"price2":"0.244kg",
				"count":"×2"
			}
		]
	}
]
gulp.task("server",function(){
	gulp.src("gulp")
		.pipe(webserver({
			port:8020,
			middleware:function(req,res,next){
				var method=req.method;
				var urlParse=url.parse(req.url);
				var pathname=urlParse.pathname;
				res.setHeader("Access-Control-Allow-Origin","*");
				res.setHeader("content-type","application/json;charset=utf-8");
				console.log(method)
				if(method==="GET"){

					res.end(JSON.stringify(data))
				}
			}
	}))

})
gulp.task("default",["server"]);