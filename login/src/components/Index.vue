<template>
  <div class="hello">
   这是index页
      {{navData}}
      {{articleDate}}
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      navData:null,
      articleDate:null
    }
  },
  created(){
     this.$store.axios=this.axios;
    if(!this.$store.state.navData){
      this.$router.push({path:"/login",query:{"to":"/"}});
    }
    this.navData=this.$store.state.navData;
    this.articleDate=this.$store.state.articleDate;
    console.log(this.$store.state)
   
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
