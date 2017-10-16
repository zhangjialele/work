<template>
  <div class="hello">
   这是home页
      {{homeData}}
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
     homeData:""
    }
  },
  created(){
   
     this.$store.axios=this.axios;
   // console.log(this.$store.state.homeData)
    if(!this.$store.state.homeData){
      this.$router.push({path:"/login",query:{"to":"/home"}});
    }
    this.homeData=this.$store.state.homeData;
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
