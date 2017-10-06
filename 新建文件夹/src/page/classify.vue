<template>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template scope="props">
          <el-table
            :data="props.row.twodata"
            style="width: 100%">
            <el-table-column
              label=""
              prop="cnname">
            </el-table-column>
            <el-table-column
              label=""
              prop="enname">
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

      </template>
    </el-table-column>
    <el-table-column
      label=""
      prop="onedata.cnname">
    </el-table-column>
    <el-table-column
      label=""
      prop="onedata.enname">
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
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData2: [],
        tableData5: []
      }
    },
     created(){
      var _this=this;
      this.axios.get("http://localhost:9993/api/back_class/class_list").then(function(data){
       _this.tableData5=data.data.data;
      })
    },
    methods: {
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
 
<style>
     .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
