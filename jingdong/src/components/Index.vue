<template>
    <div class="wrap">
        <router-view></router-view>
        <footer>
            <ul>
                <router-link tag="li" to="/shouye">
                    <i class="fa fa-thumbs-up f14"></i>
                    <p>首页</p>
                </router-link>
               <router-link tag="li" to="/fenlei">
                    <i class="fa fa-list f14"></i>
                    <p>分类</p>
                </router-link>
                <router-link tag="li" to="/faxian">
                    <i class="fa fa-ban f14"></i>
                    <p>发现</p>
                </router-link>
                <router-link tag="li" to="/gouwuche">
                    <i class="fa fa-shopping-cart f14"></i>
                    <p>购物车</p>
                </router-link>
                <router-link tag="li" to="/wode">
                   <i class="fa fa-user-o f14"></i>
                    <p>我的</p>
                </router-link>
            </ul>
        </footer>
    </div>
</template>
<script>
export default{
    name:"Index"
    
}
</script> 
<style>
</style>
