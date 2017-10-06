<template>
  <div>
    <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="backorfont"
      label="前后端分类"
      width="180">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间">
    </el-table-column>
    <el-table-column
      label=""
      prop="desc">
      <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
  </div>
  </div>
  
</template>
<script>
  export default {
    methods: {
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      handleEdit(){
        
      },
      handleDelete(){

      }
    },
    data() {
      return {
        tableData2: []
      }
    },
    created(){
      var _this=this;
      this.axios.get("http://localhost:9993/api/apilist/list?type=back").then(function(data){
       _this.tableData2=data.data.data;
      })
    },
  }
</script>
 
<style>
     .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
  .block{
    margin: 20px 300px;

  }
</style>
