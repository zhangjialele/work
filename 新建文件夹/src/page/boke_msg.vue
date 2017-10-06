<template>
  <div>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="标题"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.article_name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="作者"
      width="180">
      <template scope="scope">
        {{scope.row.editer}}
      </template>
    </el-table-column>
    <el-table-column
      label="时间"
      width="180">
      <template scope="scope">
        {{scope.row.time}}
      </template>
    </el-table-column>
    <el-table-column label="操作">
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
  <el-pagination small layout="prev, pager, next" :total="50" class="page"></el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    created(){
      //console.log(this)
      var _this=this;
      this.axios.get("http://localhost:9993/api/back_article/getArticle").then(function(data){
        console.log(data.data.data)
        _this.tableData=data.data.data;
      })
    }
  }
</script>
<style>
    .page{
      margin: 20px 300px;;
    }
</style>
