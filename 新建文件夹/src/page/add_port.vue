
<template>
    <div>
        <h3>增加接口文档</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="标题" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
             <el-form-item label="接口地址" prop="address">
                <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item label="类型" prop="type">
                <el-input v-model="ruleForm.type"></el-input>
            </el-form-item>
             <el-form-item label="请求类型" prop="request">
                <el-input v-model="ruleForm.request"></el-input>
            </el-form-item>
            
            <el-form-item label="请求参数" prop="param">
                <el-input type="textarea" v-model="ruleForm.param"></el-input>
            </el-form-item>
            <el-form-item label="返回数据" prop="returnData">
                <el-input type="textarea" v-model="ruleForm.returnData"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          request:"",
          returnData:"",
          address:"",
          title:"",
          type:"",
          param:""
        },
        rules: {
          title: [
            { required: true, message: '请输入接口名称', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入接口地址', trigger: 'blur' }
          ],
          type: [
            { type: 'date', required: true, message: '请选择接口归属类型', trigger: 'change' }
          ],
          request: [
            { type: 'date', required: true, message: '请选择接口请求类型', trigger: 'change' }
          ],
          param: [
            { required: true, message: '请输入接口发送参数', trigger: 'change' }
          ],
          returnData: [
            { required: true, message: '请输入接口返回参数', trigger: 'change' }
          ]
        }
      };
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
        this.axios.post('http://localhost:9993/api/apilist/', {
          title:_this.ruleForm.title,  //接口标题
          url:_this.ruleForm.address,  //接口地址
          type:_this.ruleForm.type, //接口类型
          sendparams:_this.ruleForm.param, //发送的参数
          getparams:_this.ruleForm.returnData, //响应参数
          backorfont:_this.ruleForm.request, //前台或后台接口
            enname_one:_this.ruleForm.English1,   //一级英文标识
            cnname_one:_this.ruleForm2.chinese1 ,  //一级中文
            enname_two:_this.ruleForm2.English2 ,  //二级英文标识
            cnname_two:_this.ruleForm2.chinese2 ,  //二级中文
        })
        .then(function (response) {
          var info=response.data;
          switch(info.code){
            case "2001":
              alert(info.msg)
            break;
            case "200":
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
    
</style>
