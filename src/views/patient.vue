<template>
  <div class="about">
    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">数据A</el-menu-item>
      <el-menu-item index="3">数据B</el-menu-item>
    </el-menu> -->
    <ConstantChart></ConstantChart>
    <!-- @TODO 路由传参
    patient/:id
      用户详情

    @TODO menu选项卡 -->
  </div>

</template>

<script type="module">
  import ConstantChart from '../components/constant-chart'
  // import user from '../store/user.js'
  // const { data } = user

  // @TODO 图表部分的包动态加载

  export default {
    data() {
      return { 
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    components: {
      ConstantChart,
    },
    methods:{
      handleSuccess(){
        console.log(1)
      },
      handleError() {
        console.log(2)
      }
    }
  }
</script>

<style>
#main{
  height: 400px;
}

</style>
