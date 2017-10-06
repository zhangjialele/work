import Vue from "vue";
import Router from "vue-router";

import axios from "axios";
import vueAxios from "vue-axios";

import Index from "./components/Index.vue";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';


import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'


import addArticle from './page/addArticle.vue';
import add_one from './page/add_one.vue';
import add_tow from './page/add_tow.vue';
import article_M from './page/article_M.vue';
import classify from './page/classify.vue';
import welcome from './page/Welcome.vue';
import add_port from './page/add_port.vue';
import font_port from './page/font_port.vue';
import back_port from './page/back_port.vue';
import per_msg from './page/per_msg.vue';
import boke_msg from './page/boke_msg.vue';
Vue.use(Router);
Vue.use(ElementUI)
Vue.use(vueAxios,axios)
var router=new Router({
    linkActiveClass:"active",
    base:"/app",
    routes:[{
        name:"index",
        path:"/",
        component:Index,
        children:[{
            path:"/",
            redirect:"mains"
        },
        {
            path:"mains",
            name:"mains",
            component:welcome
        },
        {
            path:"add_article",
            name:"add_article",
            component:addArticle
        },
        {
            path:"article_M",
            name:"article_M",
            component:article_M
        },
        {
            path:"add_one",
            name:"add_one",
            component:add_one
        },
        {
            path:"add_tow",
            name:"add_tow",
            component:add_tow
        },
        {
            path:"classify",
            name:"classify",
            component:classify
        },
        {
            path:"add_port",
            name:"add_port",
            component:add_port
        },
        {
            path:"font_port",
            name:"font_port",
            component:font_port
        },
        {
            path:"back_port",
            name:"back_port",
            component:back_port
        },
        {
            path:"per_msg",
            name:"per_msg",
            component:per_msg
        },
        {
            path:"boke_msg",
            name:"boke_msg",
            component:boke_msg
        }
        ]
    }
    ]
})


new Vue({
    el:"#app",
    components:{
        index:Index
    },
    router
})