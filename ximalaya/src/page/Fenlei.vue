<template>
    <div class="content">
        {{name}}
 </div>

</template>
<script>
    export default{
            name:"fenlei",
            data(){
                return {
                    name:"这是一个分类页"
                }
            },
            mounted(){
                console.log(this)
            }
    }
</script> 
<style>
    
</style>
