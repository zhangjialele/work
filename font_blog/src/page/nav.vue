<template>
    <div class="nav">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><div @click="fn">首页</div></el-menu-item>
            <el-submenu index="2">
                <template slot="title">一级列表</template>
                <el-menu-item  v-for="item in navdata" :key="item.onedata.id" :index="item.onedata.id">{{item.onedata.cnname}}</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">二级列表</template>
                <el-menu-item  v-for="val in twodata" :key="val.id" :index="val.id">{{val.cnname}}</el-menu-item>
            </el-submenu>
        </el-menu>
        
              
        <el-breadcrumb separator="/" >
            <el-breadcrumb-item :to="{ path: '/' }"><span @click="click">首页</span></el-breadcrumb-item>
            <el-breadcrumb-item ><span @click="click1(one)">{{one}}</span></el-breadcrumb-item>
            <el-breadcrumb-item>{{two}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
    export default {
        name:"nav",
        data(){
            return{
                 activeIndex: '1',
                 activeIndex2: '1',
                 navdata:[],
                 twodata:[],
                 one:"",
                 two:"",
                 key:""
            }
        },
        props:["name"],
        created(){
            this.axios.get("/api/front_article/getNav").then((data)=>{
                this.navdata=data.data.data;
                this.twodata=this.navdata[0].twodata;
            })
            
        },
        watch:{
            name(){
                 console.log(this.one)
                  this.one=this.name.one;
                  this.two=this.name.two
            }
        },
         methods: {
             fn(){
                this.$router.push({name:"articleList"});
                this.$parent.one="";
                this.$parent.two="";
             },
             click(){
                 this.$parent.one="";
                 this.$parent.two="";
             },
              click1(one){
                  var _this=this;
                 this.$parent.two="";
                 //console.log(one)
                // this.$router.push({name:"oneList",query:{'one':one}})
                  this.navdata.forEach(function(item){
                     console.log(item)
                        // if(item.onedata.cnname==one){
                        //     // console.log(item)
                        // //     _this.twodata=item.twodata;
                        // //     //console.log(item.onedata.cnname)
                        // //     //_this.one=item.onedata.cnname;
                        // //    _this.$parent.one=item.onedata.cnname
                        // //     //console.log(_this.one)
                        // //     _this.$parent.two="";
                        // //    // _this.two="";
                        //     _this.$router.push({name:"oneList",query:{con:item}})
                        // }
                    })
                //  this.navdata.forEach(function(item){
                //       if(item.onedata.cnname==one){
                //           console.log(item)
                //       }
                // })
             },
            handleSelect(key, keyPath) {
                var _this=this;
                this.key=key;
               // console.log(key, keyPath);
                if(keyPath[0]=="2"){
                    this.navdata.forEach(function(item){
                        if(item.onedata.id==key){
                            _this.twodata=item.twodata;
                            //console.log(item.onedata.cnname)
                            //_this.one=item.onedata.cnname;
                           _this.$parent.one=item.onedata.cnname
                            //console.log(_this.one)
                            _this.$parent.two="";
                           // _this.two="";
                            _this.$router.push({name:"oneList",query:{con:item}})
                        }
                    })
                }else if(keyPath[0]=="3"){
                    this.twodata.forEach(function(val){
                        if(val.id==key){
                             _this.$parent.two=val.cnname;
                            _this.two=val.cnname;
                             //_this.$router.push({name:"oneList1",params:{con:val}})
                            _this.navdata.forEach(function(item){
                                if(item.onedata.id==val.parent_id){
                                     _this.$parent.one=item.onedata.cnname
                                   _this.one=item.onedata.cnname;
                                    _this.$router.push({name:"oneList1",query:{one:_this.one,two:_this.two}})
                                }
                            })
                        }
                    })
                }
            }
        }
    }
</script>
<style>
    .nav{
         width: 100%;
         height: 100px;
    }
    .menu, .el-menu{
        width: 100%;
        height: 60px;
        
        background: #dcc496;
    }
    .el-breadcrumb{
        padding-top: 10px;
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__item__inner{
        color: #48576a ;
    }
</style>