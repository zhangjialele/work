<template>
  <div class="login">
      这是login页
  </div>
</template>

<script>
  import {mapState,mapActions} from "vuex"
  export default {
    name: 'login',
    data () {
      return {
        path:""
      }
    },
    created(){
      this.path=this.$route.query.to;
    },
    computed:mapState([
     "state",
     "state1"
    ]),
    methods: {
     ...mapActions(["getAlldata","getHome"]),
     returnFn(){
       if(this.state){
         //console.log(this.path)
         this.$router.push(this.path)
       }
      //console.log(this.state)
     },
     returnFn1(){
      // console.log(this.state1,111)
       if(this.state1){
         //console.log(this.path)
         this.$router.push(this.path)
       }
     // console.log(this.state)
     }
    },
    mounted(){
     // console.log(this.path)
      if(this.path=="/"){
         this.getAlldata(this.returnFn)
      }else if(this.path=="/home"){
       // console.log(this.returnFn1)
         this.getHome(this.returnFn1)
         //console.log(2222)
      }
     
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
