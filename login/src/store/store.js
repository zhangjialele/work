import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
 const store = new Vuex.Store({
  state: {
   navData:null,
   articleDate:null,
   homeData:"",
   state:false,
   state1:false
  },
  mutations: {
    getNav_m(state,data) {
      state.navData=data;
     
    },
    getArticle_m(state,data) {
      state.articleDate=data;
     
    },
    getHome_m(state,data) {
      state.homeData=data;
     
    },
    changeState(state,data){
         state.state=data;
    },
    changeState1(state,data){
         state.state1=data;
    }
  },
  actions:{
      getNav({dispatch, commit}){
            return new Promise((resolve,reject)=>{
                //console.log(this)
                this.axios.get("/api/front_article/getNav").then(data => {
                     console.log(1)
                    commit("getNav_m",data.data.data);
                    resolve()
                })
               
            })
        },
      getArticle({dispatch, commit}){
            return new Promise((resolve,reject)=>{
                this.axios.get("/api/front_article/getArticleAll").then(data => {
                    commit("getArticle_m",data.data.data);
                    resolve()
                })
                    
            })
         },
      getHome({dispatch, commit},fn){
            return new Promise((resolve,reject)=>{
                this.axios.get("/getHome").then(data => {
                    commit("getHome_m",data.data.msg);
                     commit("changeState1", true)
                    resolve()
                    fn()
                })
                    
            })
         },
      getAlldata({ dispatch, commit},fn){
          Promise.all([dispatch("getNav"), dispatch("getArticle")]).then(() => {
                commit("changeState", true)
                fn()
                // data._this.$router.push({ path: data.id })
         })
      }
   
  }
 })
 export default store;
 //module.exports=store;
