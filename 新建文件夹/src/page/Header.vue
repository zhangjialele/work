<template>
    <header>
        {{name}}
    </header> 
</template>
<script>
    export default{
            name:"header",
            data(){
                return {
                    name:"个人博客"
                }
            }
    }
</script> 
<style>
    header {
        background-color: rgb(32, 160, 255);
        height: 50px;
        line-height: 50px;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        padding: 0 20px;
        z-index: 999;
        box-sizing: border-box;
        position: fixed;
  }
</style>
