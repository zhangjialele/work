import Vue from "vue";
import Router from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import iscroll from "./static/js/iscroll.js";
import jquery from "jquery";
import "./common.js";
import Index from "./components/Index.vue";
import Swiper from "./components/Swiper.vue";
import Shouye from "./page/Shouye.vue";
import Fenlei from "./page/Fenlei.vue";
import Gouwuche from "./page/Gouwuche.vue";
import Faxian from "./page/Faxian.vue";
import Wode from "./page/Wode.vue";

Vue.use(VueAxios,axios)
Vue.use(Router);
Vue.prototype.$=jquery;
Vue.prototype.$iscroll=iscroll;
var router=new Router({
    linkActiveClass:"active active1",
    routes:[
        {
            path:"/",
            redirect:"shouye"
        },
        {
            path:"/shouye",
            name:"shouye",
            component:Shouye
        },
        {
            path:"/fenlei",
            name:"fenlei",
            component:Fenlei
        },
        {
            path:"/gouwuche",
            name:"gouwuche",
            component:Gouwuche
        },
        {
            path:"/faxian",
            name:"faxian",
            component:Faxian
        },
        {
            path:"/wode",
            name:"wode",
            component:Wode
        },
        {
            path:"/swiper",
            name:"swiper",
            component:Swiper
        }
        
    ]
})
new Vue({
    el:"#app",
    // render:h=>h(Index),
    components:{
       index:Index
    },
    router
})
//  var banner=new Swiper(".swiper-container",{
// 			autoplay:2000,
// 			loop:true,
//             pagination: '.swiper-pagination',
// 		})