var data=[
	{
		"img":"images/img_06.jpg",
		"tit":"QQ看点",
		"time":"上午11:35",
		"biaozhu":"[精选]",
		"info":"毁了杨幂刘亦菲以后，越南又打"

	},
	{
		"img":"images/img_09.jpg",
		"tit":"腾讯新闻",
		"time":"上午11:35",
		"biaozhu":"",
		"info":"大妈买鱼被“咬”住手 嚎啕大哭"

	},
	{
		"img":"images/img_11.jpg",
		"tit":"辽冀市场部精英群",
		"time":"上午0:09",
		"biaozhu":"[有新公告]",
		"info":"石家庄平山-王冰燕：@基础"

	},
	{
		"img":"images/img_13.jpg",
		"tit":"熊猫优选省钱购DH28",
		"time":"上午11:35",
		"biaozhu":"",
		"info":"DH爆品：[图片]天猫· 2018版曲一"

	},
	{
		"img":"images/img_15.jpg",
		"tit":"群助手",
		"time":"上午11:34",
		"biaozhu":"1个群有新消息",
		"info":""

	},
	{
		"img":"images/img_17.jpg",
		"tit":"13经济 石药实习",
		"time":"上午10:54",
		"info":"无人念我：123456789"

	},
	{
		"img":"images/img_06.jpg",
		"tit":"QQ看点",
		"time":"上午11:35",
		"biaozhu":"[精选]",
		"info":"毁了杨幂刘亦菲以后，越南又打"

	},
	{
		"img":"images/img_09.jpg",
		"tit":"腾讯新闻",
		"time":"上午11:35",
		"biaozhu":"",
		"info":"大妈买鱼被“咬”住手 嚎啕大哭"

	}
];
module.exports={
	entry:__dirname+"/index.js",
	devServer:{
		hot:true,
		port:8880,
		host:"127.0.0.1",
		setup(app){
			app.get("/home",function(req,res){
				res.setHeader("Access-Control-Allow-Origin","*");
				res.setHeader("content-type","application/json;charset=utf-8");
				res.json(data);
			})
		}
	}
}