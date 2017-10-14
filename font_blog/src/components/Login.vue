<template>
    <div class="wrap">
        <h2>个人博客</h2>
        <ul>
          <li v-forms="name">
            <label htmlFor="name">姓名</label>
            <input type="text" id="name" v-model.lazy="name.value" @blur="changeFn(name)"/>
          </li>
          <li v-forms="pwd">
              <label htmlFor="pwd">密码</label>
              <input type="password" id="pwd" v-model.lazy="pwd.value"/>
          </li>
          <li>    
            <button @click="submit">登录</button>
          </li>
        </ul>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        name:{
            reg:/^[a-zA-Z]{4,8}$/,
            msg:"您输入的姓名格式不对",
            required:true,
            value:"",
            isfocu:false,
            state:false
        },
        pwd:{
            reg:/^[a-zA-Z]\w{5,17}$/,
            msg:"您输入的密码格式不对",
            required:true,
            value:"",
            isfocu:false,
            state:false
        },
      };
    },
    methods:{
        changeFn(data){
            data.isfocu=true;
        },
        submit(){
          var _this=this;
             this.$http.post("http://localhost:9993/api/back_class",{
                  loginname:this.name.value,    //登录名
                  loginpw:this.pwd.value,    //登录密码
              }).then(function(data){
                  
                  if(data.data.code=="1001"){
                      _this.$message({
                        message: '登录成功',
                        type: 'success'
                      });
                       window.sessionStorage.setItem("id",data.data.userid)
                      _this.$router.push({name:"mains",params:{user:_this.name.value} })
                     
                     // console.log(data.data.userid)
                  }else if(data.data.code=="1002"){
                      _this.$message.error('登录失败');
                  }else{
                    _this.$message({
                      message: '请认真填写',
                      type: 'warning'
                    });
                 }
              })
            }
    },
    directives:{
                forms:{
                    componentUpdated(el,binding){
                       // var $p=el.getElementsByTagName("p")[0];
                       //创建p
                        var createP=(msg)=>{
                                var $p=document.createElement("p");
                                    $p.innerHTML=msg;
                                    $p.style.color="red";
                                    el.appendChild($p);
                        }
                        var clearP=()=>{
                            var $p=el.getElementsByTagName("p")[0];
                            if($p!==undefined){
                                 el.removeChild($p);
                            }
                        }
                        var test=()=>{
                             clearP()
                             if(binding.value.value!==""){
                                if(!binding.value.reg.test(binding.value.value)){
                                //不符合条件，创建p
                                    createP(binding.value.msg)
                                    binding.value.state=false;
                                }else{
                                    //符合条件
                                    binding.value.state=true;
                                }
                             }
                            
                        }
                        var requiredFn=()=>{
                             if(binding.value.value===""){
                                 clearP();
                                if(binding.value.isfocu){
                                     createP("不能为空");
                                 }
                            }else{
                                test()
                            }
                        }
                        
                        switch(binding.value.required){
                            case true :{
                                requiredFn()
                            }break;
                            default:{
                                test();
                            }
                        }                    
                    }
                }
            }
  };
</script>
<style scoped>
  .wrap{
    width: 30%;
    height: 400px;
    border: 2px solid salmon;
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    margin: auto;
  }
  h2{
    color: salmon;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  li{
    list-style: none;
    width: 90%;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
  }
  input{
    height: 30px;
    border: none;
    border: 1px solid salmon;
    border-radius: 10px;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
  }
  button{
    border: none;
    background: salmon;
    padding: 5px 10px;
    border-radius: 5px;
    outline: none;
    color: #fff;
  }
</style>

