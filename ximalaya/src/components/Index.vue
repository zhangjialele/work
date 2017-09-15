<template>
    <div>
        <div class="nav">
            <ul>
                    <router-link to="remen" tag="li"><a>热门</a></router-link>
                    <router-link to="fenlei" tag="li"><a>分类</a></router-link>
                    <router-link to="jingping" tag="li"><a>精品</a></router-link>
                    <router-link to="zhibo" tag="li"><a>直播</a></router-link>
                    <router-link to="guangbo" tag="li"><a>广播</a></router-link>
            </ul>
        </div>
        
             <router-view>

             </router-view>
    
    </div>
     
</template>
<script>
    export default{
            name:"Index",
            data(){
                return {
                    name:"张三"
                }
            }
    }
</script> 
<style>
</style>
