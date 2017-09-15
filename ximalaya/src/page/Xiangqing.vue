<template>
    <div>
       这是一个 {{name}}详情页
    </div>

</template>
<script>
    export default{
            name:"fenlei",
            data(){
                return {
                    name:""
                }
            },
            created(){
                this.name=this.$route.params.name;
            }
    }
</script> 
<style>
    
</style>
