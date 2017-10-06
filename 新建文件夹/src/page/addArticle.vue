<template>
    <div>
        <h3>增加文章</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="文章标题" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="一级类名" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择">
                    <el-option label="技术" value="jishu"></el-option>
                    <el-option label="美食" value="meishi"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="二级类名" prop="region2">
                <el-select v-model="ruleForm.region2" placeholder="请选择">
                    <el-option label="vue" value="vue"></el-option>
                    <el-option label="前端" value="qianduan"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否显示" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="是否推荐" prop="resource2">
                <el-radio-group v-model="ruleForm.resource2">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="作者" prop="author">
                <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
            <el-form-item label="导读" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="时间" prop="date">
              <el-date-picker
              v-model="date"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
            </el-form-item>
            <div class="editor-container">
              <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
            </div>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  import UE from '../components/ue/ue.vue';
  export default {
    components: {UE},
    data() {
      return {
        ruleForm: {
          name: '',
          author:"",
          region: '',
          region2:"",
          date: '',
          desc:"",
          resource:"",
          resource2:"",
        },
        rules: {
          name: [
            { required: true, message: '请输入文章名称', trigger: 'blur' }
          ],
          author: [
            { required: true, message: '请输入作者', trigger: 'blur' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          region2: [
            {  required: true, message: '请选择二级分类', trigger: 'blur'  }
          ]
        },
        ue1: "ue1" // 不同编辑器必须不同的id
      };
    },
    props: {
      defaultMsg: {
        type: String
      },
      config:  {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
      id: {
        type: String
      },
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.getDate();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getDate(){
        var _this=this;
        this.axios.post('http://localhost:9993/api/back_article/addArticle', {
          oneId:string ,   // 文章所归属的一级分类id
          twoId:string ,   // 文章所归属的二级分类id
          article_name:_this.name,    //文章标题
          editer:_this.author ,   // 作者
          content:_this.desc ,   // 文章的内容
          time:_this.data  ,  //  文章的创建时间
          daodu:_this.desc ,   // 文章的导读
          imgsrc:string ,   //为可选项，标题导图
          recommend:1/0 ,   //boolen值，1代表true，0代表false 是否在首页推荐显示
          art_show:1/0  ,   // boolen值，1代表true，0代表false 是否显示
          enname_one:string ,   //一级分类的英文标识，根据此字段插入不同的表
        }).then(function (response) {
          var info=response.data;
          switch(info.code){
            case "3011":
              alert(info.msg)
            break;
            case "3010":
              alert(info.msg)
            break;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>
 
<style>
  .editor-container{
    width: 100%;
  }
  #edui1{
    width: 100% !important;
  }
  #edui1_iframeholder{
    height: 200px;
  }
    .edui-editor-iframeholder edui-default{
      height: 300px;
    }
</style>
