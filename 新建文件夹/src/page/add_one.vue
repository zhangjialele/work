<template>
    <div>
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px">
           <h3>一级类名设置</h3>
          <el-form-item label="中文类名">
            <el-input type="text" v-model="ruleForm2.chinese1" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="英文类名" prop="English1">
            <el-input type="text" v-model="ruleForm2.English1" auto-complete="off"></el-input>
          </el-form-item>
         <h3>二级类名设置</h3>
          <el-form-item label="中文类名">
            <el-input type="text" v-model="ruleForm2.chinese2" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="英文类名" prop="English2">
            <el-input type="text" v-model="ruleForm2.English2" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      var reg=/^[A-Za-z]+$/;
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入英文'));
        }else if(!reg.test(value)){
          callback(new Error('请输入英文'));
        }
        else {
          callback();
        }
      };
      return {
        ruleForm2: {
          chinese1:"",
          chinese2:"",
          English2:"",
          English1:""
        },
        rules2: {
          English1: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          English2: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        //console.log(th)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            //this.getDate();
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
        this.axios.post('http://localhost:9993/api/back_class/add_class_one', {
            enname_one:_this.ruleForm2.English1,   //一级英文标识
            cnname_one:_this.ruleForm2.chinese1 ,  //一级中文
            enname_two:_this.ruleForm2.English2 ,  //二级英文标识
            cnname_two:_this.ruleForm2.chinese2 ,  //二级中文
        })
        .then(function (response) {
          var info=response.data;
          //console.log(info.data);
          switch(info.code){
            case "1010":
              alert(info.msg)
            break;
            case "1011":
              alert(info.msg)
            break;
            case "1012":
              alert(info.msg)
            break;
            case "1013":
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
