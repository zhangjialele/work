<template>
    <div>
        <div class="list" v-for="item in listDate" >
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
                listDate:[]
            }
        },
        created(){
            this.axios.get("/api/front_article/getArticleAll").then((data)=>{
               this.listDate=data.data.data;
            })
           //console.log(111)
        },
        watch:{
            $route(){
                console.log(1111,this.$route.params.con)
                this.listDate=this.$route.params.con
            }
        },
         methods: {
           open(item) {
              // console.log(item)
                const h = this.$createElement;
                var content=item.content.replace(/<[^>]+>/g,"");
                this.$notify({
                title: '内容',
                message: h('i', { style: 'color: teal'}, content)
                });
            },
        }
    }
</script>
<style>
    .list{
        height: 100px;
    }
    .top{
        height: 30px;
        
        background: #b7827e;
        position: relative;
    }
    
    .top>h5{
        float: left;
        padding-left: 2%;
        color: #5b3c37;
        position: relative;
    }
    .top>p{
        position: absolute;
        right: 20px;
        top:0;
        font-size: 12px;
        line-height: 30px;
    }
    .con{
        padding: 5px;
        color: #625e5f;
    }
    .el-button{
        width: 100%;
        height: 25px;
        margin-top: 2px;
        background: #b7827e;
        border: none;
    
    }
    .el-notification{
        top:50%;
        left: 50%;
    }
</style>