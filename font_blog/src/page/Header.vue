<template>
    <div class="tops">
        <div class="logo">
            <img src="images/logo.jpg" alt="">
        </div>
        <h1>{{name}}<p>追求得到之日即其终止之时，寻觅的过程亦即失去的过程  —《国境以南 太阳以西》 村上春树 </p></h1>
    </div> 
</template>
<script>
    export default{
            name:"header",
            data(){
                return {
                    name:"安心",
                    user:""
                }
            }
    }
</script> 
<style>
    .tops{
        height: 100px;
        position: relative;
    } 
 
  .tops>.logo{
      position: absolute;
      top:10px;
      left: 86px;
      width: 5%;
  }
  .logo>img{
      width: 100%;
  }
  .tops h1{
      position: absolute;
      left: 240px;
      width: 80%;
      line-height: 60px;
      top:0;
      margin: 0;
      color: skyblue;
      text-decoration: underline;
      font-size: 32px;
  }
  .tops h1>p{
      font-size: 16px;
      border-radius: 5px;
      background: #486573;
      position: absolute;
      width: 80%;
      left: 10%;
      top:10px;
      text-align: center;

  }
  
  
</style>
