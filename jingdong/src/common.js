import Vue from "vue";
import Mint from 'mint-ui';
import swipe from "vue-awesome-swiper";
Vue.use(swipe)
import "swiper/dist/css/swiper.css";
Vue.use(Mint);
import { Swipe, SwipeItem } from 'mint-ui';
import { Loadmore } from 'mint-ui';
import "mint-ui/lib/style.css";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);