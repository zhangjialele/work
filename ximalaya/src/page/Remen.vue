<template>
    <div class="content">
         <template v-for="i in list">
             <router-link tag="div" :to="{name:'xiangqing',params:{name:i.tit}}" class="main">
                  <img :src="i.img" alt="">
                 <p>{{i.tit}}</p>
             </router-link>
        </template>
    </div> 
</template>
<script>
    export default{
            name:"remen",
            data(){
                return {
                    name:"这是一个remen的路由",
                    list:""
                }
            },
            beforeRouteEnter(to,from,next){
                next(vm=>{
                    vm.axios.get("/list").then(function(data){
                        vm.list=data.data
                    })
                })
            }
    }
</script> 
<style>
    
</style>
