<template>
    <div class="aboutme">
            <el-row class="tips">
              <el-col >
                <el-card :body-style="{ padding: '0px' }">
                  <img src="images/tx.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>昵称：Z_JL</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <el-input
                placeholder="请输入一级类名"
                icon="search"
                v-model="input2"
                :on-icon-click="handleIconClick" class="search">
                </el-input>
            <el-table
                :data="newDate"
                style="width: 100%"
                :row-class-name="tableRowClassName" class="table"  @row-click="click">
                <el-table-column
                prop="article_name"
                :label='"文章列表=》"+input2'>
                </el-table-column>
            </el-table>
             <el-table
                :data="twoData"
                style="width: 100%"
                :row-class-name="tableRowClassName" class="table" @row-click="click1">
                <el-table-column
                prop="cnname"
                :label='"二级类名"'>
                </el-table-column>
            </el-table>
           <div class="pingjia">
               <h4>留下你的评价吧！</h4>
            <el-rate
            v-model="value3"
            show-text>
            </el-rate>
           </div>
           
    </div>
    
</template>
<script>
    export default {
        name:"aside",
        data(){
            return{
                 listDate: [],
                 input2: '',
                 newDate:[],
                 value3: null,
                 oneId:"",
                 twoData:[]
                 
            }
        },
        created(){
            this.axios.get("/api/front_article/getNav").then((data)=>{
               var arr=data.data.data;
                this.twoData=arr[0].twodata;
            })
            this.axios.get("/api/front_article/getArticleAll").then((data)=>{
               this.listDate=data.data.data;
              //console.log(this.listDate[0].twodata)
               this.twodata=this.listDate[0].twodata;
               this.listDate.forEach((val)=>{
                   if(val.cnname_one=="作者"){
                   this.newDate.push(val);
                   }
               })
            })
        },
         methods: {
             click(row, event, column){
               // console.log(row, event, column)
                this.$router.push({name:"asideOne",query:{"con":row}})
             },
              click1(row, event, column){
               // console.log(row, event, column)
               // this.$router.push({name:"asideTwo",query:{"con":row}})
                this.listDate.forEach((val)=>{
                   //console.log(val.cnname_two==row.cnname)
                   if(val.cnname_two==row.cnname){
                       // console.log(val)
                   this.$router.push({name:"oneList1",query:{"one":val.cnname_one,"two":val.cnname_two}})
                   }
               })
                // this.twodata.forEach(function(val){
                //         if(val.id==key){
                //             _this.two=val.cnname;
                //              //_this.$router.push({name:"oneList1",params:{con:val}})
                //             _this.navdata.forEach(function(item){
                //                 if(item.onedata.id==val.parent_id){
                //                     _this.one=item.onedata.cnname;
                //                     _this.$router.push({name:"oneList1",query:{one:_this.one,two:_this.two}})
                //                 }
                //             })
                //         }
                //     })
                // //console.log(row.cnname)
                // window.sessionStorage.setItem("cnname",row.cnname)
                // this.listDate.forEach((val)=>{
                //    if(val.oneId==row.parent_id){
                //         console.log(val.cnname_one)
                //          window.sessionStorage.setItem("cnname_one",val.cnname_one)
                //     }
                // })
                // //
             },
            handleIconClick() {
                var cnname=this.input2
                //console.log(this.input2);
                this.newDate=[];
                 this.listDate.forEach((val)=>{
                   
                    if(val.cnname_one==cnname){
                      
                        this.oneId=val.oneId;
                        this.newDate.push(val);
                    }
                }),
               // console.log(this.oneId)
                this.axios.post("/api/front_article/getClassTwo",{
                            oneId:this.oneId  //所属一级分类的id
                        }).then((data)=>{
                           
                            this.twoData=(data.data.data);
                            // console.log(this.twoData)
                        },(err)=>{
                            console.log(err)
                        })
                
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            tableRowClassName(row, index) {
                if (index === 1) {
                return 'info-row';
                } else if (index === 3) {
                return 'positive-row';
                }
                return '';
            }
        }
    }
</script>
<style scoped>
    .aboutme{
        padding: 30px;
        padding-top:10px;
       
    }
    .flower{
        height: 300px;
    }
    
    .search{
        margin-top: 5px;
    }
  .image {
    width: 100%;
    display: block;
  }
 .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
  .table{
      margin-top:5px;
  }
    .pingjia{
        margin-top: 5px;
    }
    .pingjia>h4{
        line-height: 30px;
    }
</style>