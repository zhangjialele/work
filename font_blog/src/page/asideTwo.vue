<template>
    <div>
        <div class="list" v-for="item in listDate">
            <div class="top">
                <h5>
                    <el-button
                        plain
                        @click="open(item)">
                        {{item.article_name}}
                    </el-button>
                </h5>
                <p>{{item.time}}</p>
            </div>
            <div class="con">
                {{item.daodu}}
            </div>
        </div>
    </div>
   
    
</template>
<script>
    export default {
        name:"aside",
        data(){
            return{
                listDate:[],
                id:"",
                cnname:""
            }
        },
        created(){
           this.getData();
        },
        watch:{
            $route(){
               // console.log(111)
                this.getData();
            }
        },
        methods: {
             open(item) {
               //console.log(item)
                const h = this.$createElement;
                var content=item.content.replace(/<[^>]+>/g,"");
                this.$notify({
                title: '内容',
                message: h('i', { style: 'color: teal'}, content)
                });
            },
           getData(){
               this.listDate=[];
            this.cnname=this.$route.query.con.cnname;
               this.axios.get("/api/front_article/getArticleAll").then((data)=>{
                 const arr=data.data.data;
                    arr.forEach((val)=>{
                        if(val.cnname_two==this.cnname){
                            this.listDate.push(val);
                        }
                    })
                    //console.log(this.listDate)
                })
               
              // this.listDate=this.$route.params.con;
           
           }
        }
    }
</script>
<style>
    .list{
        height: 100px;
    }
    .top{
        height: 30px;
        line-height: 30px;
        background: #b7827e;
        position: relative;
    }
    
    .top>h5{
        float: left;
        padding-left: 2%;
        color: #5b3c37;
    }
    .top>p{
        position: absolute;
        right: 20px;
        top:0;
        font-size: 12px;
    }
    .con{
        padding: 5px;
        color: #625e5f;
    }
    
</style>