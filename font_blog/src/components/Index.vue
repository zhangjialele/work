<template>
  <div class="container">
    <div class="header">
      <v-header ></v-header>
    </div>
    <div class="main">
      <section class="section">
        <v-nav :name="{'one':one,'two':two}"></v-nav>
        <div>
          <router-view></router-view>
        </div>
      </section>
    </div>
     <div class="aside">
         <v-aside></v-aside>
    </div>
  </div>
</template>
<script>
 import header from '../page/Header.vue';
 import nav from '../page/nav.vue';
 import aside from '../page/aside.vue';
  const ERR_OK = "000";
  export default {
    data () {
      return {
        user: {},
        one:"",
        two:""
      };
    },
    created () {
   
    },
    components: {
     'v-header': header,
     "v-nav":nav,
     "v-aside":aside
    },
    watch:{
      one(){
        //console.log(this.one,this.two)
      },
      two(){
        //console.log(this.one,this.two)
      }
    },
    mounted(){
     
      //console.log(this.$children)
    }
  };
</script>
<style>
  *{
      margin: 0;
      padding: 0;
      list-style: none;
  }
  .container{
    width: 100%;
    height: 100%;
   
    display: flex;
    flex-direction: column;
    
  }
  .header{
    height:100px;
    
  }
  .main{
    flex: 1;
    padding-left : 100px;
    padding-right: 25px;
    overflow: auto;
    overflow-y: scroll;
  }
  .aside{
    position: fixed;
    right: 40px;
    width: 250px;
    top:100px;
    height: 100%;
   background: #95bfcb;
   
    z-index: 999;
    margin-left: 100px;
    /*padding-right: 40px;*/
  }
  .section{
     width: 70%;
     padding: 20px;
     background: #b89291;
  }

</style>

