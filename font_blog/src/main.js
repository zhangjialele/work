import Vue from "vue";
import Router from "vue-router";

import axios from "axios";
import vueAxios from "vue-axios";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import Index from "./components/Index.vue";
import Login from "./components/Login.vue";

import articleList from "./page/articleList.vue";
import oneList from "./page/oneList.vue";
import oneList1 from "./page/oneList1.vue";
import asideOne from "./page/asideOne.vue";
import asideTwo from "./page/asideTwo.vue";

Vue.use(Router);
Vue.use(ElementUI)
Vue.use(vueAxios,axios)
var router=new Router({
    linkActiveClass:"active",
    routes:[
        {
        name:"index",
        path:"/",
        component:Index,
        children:[
            {
                path:"/",
                redirect:"articleList"
            },
            {
                path:"articleList",
                name:"articleList",
                component:articleList
            },
            {
                path:"oneList",
                name:"oneList",
                component:oneList
            },
             {
                path:"oneList1",
                name:"oneList1",
                component:oneList1
            },
             {
                path:"asideOne",
                name:"asideOne",
                component:asideOne
            },
            {
                path:"asideTwo",
                name:"asideTwo",
                component:asideTwo
            }
        ]
    }]
})
       
new Vue({
    el:"#app",
    components:{
        index:Index
    },
    router
})