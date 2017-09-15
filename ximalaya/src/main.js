import Vue from "vue";
import Router from "vue-router";
//详情页
//import Xiangqing from "./page/Xiangqing.vue";
//tab切换
// import Remen from "./page/Remen.vue";
// import Fenlei from "./page/Fenlei.vue";
// import Jingping from "./page/Jingping.vue";
// import Zhibo from "./page/Zhibo.vue";
// import Guangbo from "./page/Guangbo.vue";
//首页
// import Index from "./components/Index.vue";
// import Woting from "./components/Woting.vue";
//import directive from "./components/directive.vue";
import axios from "axios";
import VueAxios from "vue-axios";

var Xiangqing = resolve => require.ensure(['./page/Xiangqing.vue'], () => resolve(require('./page/Xiangqing.vue')));
var Remen = resolve => require.ensure(['./page/Remen.vue'], () => resolve(require('./page/Remen.vue')));
var Fenlei = resolve => require.ensure(['./page/Fenlei.vue'], () => resolve(require('./page/Fenlei.vue')));
var Index = resolve => require.ensure(['./components/Index.vue'], () => resolve(require('./components/Index.vue')));
var Woting = resolve => require.ensure(['./components/Woting.vue'], () => resolve(require('./components/Woting.vue')));
const Jingping = resolve => require.ensure([], () => resolve (require('./page/Jingping.vue')), 'group-foo')
const Zhibo = resolve => require.ensure([], () => resolve (require('./page/Zhibo.vue')), 'group-foo')
const Guangbo = resolve => require.ensure([], () => resolve (require('./page/Guangbo.vue')), 'group-foo')


Vue.use(VueAxios,axios)
//import List from "./page/list.vue"
Vue.use(Router);
var router=new Router({
    linkActiveClass:"active active1",
    routes:[
        {
            path:"/",
            redirect:"index"
        },
        {
            name:"woting",
            path:"/woting",
            component:Woting
        },
        {
            name:"xiangqing",
            path:"/xiangqing",
            component:Xiangqing
        },
        {
        name:"index",
        path:"/index",
        component:Index,
        children:[
            {
                path:"/",
                redirect:"remen"
            },
                {
                name:"remen",
                path:"remen",
                component:Remen
            },
            {
                name:"fenlei",
                path:"fenlei",
                component:Fenlei
            },
            {
                name:"jingping",
                path:"jingping",
                component:Jingping
            },
            {
                name:"zhibo",
                path:"zhibo",
                component:Zhibo
            },
            {
                name:"guangbo",
                path:"guangbo",
                component:Guangbo
            }
        ]
    },
    // {
    //     name:"tab",
    //     path:"/tab",
    //     component:Tabs
    // },
    // {
    //     name:"list",
    //     path:"/list",
    //     component:List
    // }
    ]
})
new Vue({
    el:"#app",
    //template:"<div><tabs></tabs><forms></forms></div>",
    // render(h){
    //     return h(Index);
    // },
    data:{
        //list1:"list"
    },
    components:{
        //index:Index,
        //directive:directive,
        index:Index
    },
    router
})