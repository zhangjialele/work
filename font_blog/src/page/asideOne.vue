<template>
    <div>
        <div class="list"  >
            <div class="top">
                <h5>
                    <el-button
                        plain
                        @click="open(listDate)">
                       {{listDate.article_name}}
                    </el-button>
                </h5>
                <p>{{listDate.time}}</p>
            </div>
            <div class="con">
                {{listDate.daodu}}
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
            },
            listDate(){
                 this.$parent.one=this.listDate.cnname_one;
                 this.$parent.two=this.listDate.cnname_two;
            }
        },
        mounted(){
            console.log(this.listDate)
            //cnname_one,cnname_two
            // this.$parent.one=this.listDate.cnname_one;
            // this.$parent.two=this.listDate.cnname_two;
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
           getData(){
               this.listDate=this.$route.query.con;
           
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