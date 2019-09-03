<template>
  <div class="wrapper" >
    <el-pagination
    background
    :hide-on-single-page="true"
    layout="prev, pager, next"
    :total="12"
    @current-change="change">
  </el-pagination>
  </div>
</template>

<script type="module">
  export default {
    data() {
      return {

      };
    },
    components: {

    },
    methods:{
      prev(e) {
        console.log('prev',e)
      },
      change(e) {
        console.log('change',e)
      },
      next(e) {
        console.log('prev',e)
      },
      withdraw() {
        this.$confirm('此操作会将报备单永久拒绝, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }

    }
  }
</script>

<style>
.wrapper{
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}



</style>
