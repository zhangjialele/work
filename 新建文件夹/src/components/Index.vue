<template>
  <el-row class="container" style="height: 100%">
    <v-header ></v-header>
    <el-col :span="24" class="main">
      <el-row>
        <el-menu :default-active="$route.path" class="mar-l el-menu-vertical-demo el-col el-col-3" light router>
            <el-collapse >
                <el-collapse-item title="文章管理" name="1">
                    <router-link tag="div" to="add_article">添加文章</router-link>
                    <router-link tag="div" to="article_M">文章列表</router-link>
                </el-collapse-item>
                <el-collapse-item title="分类管理" name="2">
                    <router-link tag="div" to="add_one">增加一级管理</router-link>
                    <router-link tag="div" to="add_tow">增加二级管理</router-link>
                    <router-link tag="div" to="classify">分类列表</router-link>
                </el-collapse-item>
                <el-collapse-item title="接口管理" name="3">
                    <router-link tag="div" to="add_port">增加接口文档</router-link>
                    <router-link tag="div" to="font_port">前台接口列表</router-link>
                    <router-link tag="div" to="back_port">后台接口列表</router-link>
                </el-collapse-item>
                <el-collapse-item title="留言板管理" name="4">
                    <router-link tag="div" to="per_msg">个人简介留言</router-link>
                    <router-link tag="div" to="boke_msg">博客留言</router-link>
                </el-collapse-item>
            </el-collapse>
        </el-menu>
        <section class="contentCon">
          <el-col :span="21" :offset="3" class="content-wrapper">
            <transition>
              <router-view></router-view>
            </transition>
          </el-col>
        </section>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
 import header from '../page/Header.vue';
  const ERR_OK = "000";
  export default {
    data () {
      return {
        user: {}
      };
    },
    created () {
    //   this.$http.get('/api/user').then((response) => {
    //     response = response.data;
    //     if (response.code === ERR_OK) {
    //       this.user = response.datas;
    //     }
    //   });
    },
    beforeCreate () {
      if (this.$route.path === '/') {
       // this.$router.push({path: '/index'})
      }
    },
    components: {
     'v-header': header
    }
  };
</script>
<style>
  /* fa图标右侧需要流出空白 elementUI图标已自带样式 */
  i.fa {
    vertical-align: baseline;
    margin-right: 10px;
  }
  body {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    background-color: #F2F2F2;
  }
  *{
      font-weight: bold;
  }
  .active{
      color: red;
  }
  .menu,
  .el-menu {
    width: 200px;
    height: 100%;
    background-color: #E6E6E6;
    position: fixed;
    float: left;
  }
  .container {
    padding-top:50px;
    height: 100%;
  }
  .container .main {
    padding: 0;
  }

  .container ul li.el-menu-item {
    font-size: 100%;
  }

  .container .mar-l {
    padding: 0;
  }

  .container .content-wrapper {
    padding-left: 100px;
  }

   .el-collapse{
        width: 200px;
    }
    .el-collapse-item__header{
        height: 60px;
        line-height: 60px;
    }
    .el-collapse-item__content>div{
        height: 50px;
        line-height: 50px;
    }

</style>

