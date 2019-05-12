<template>
  <div class="patient">
    <UserCard></UserCard>
    
    <!--  TODO 按需展示图表 -->
     <el-menu
      :default-active="activeChart"
      class="menu"
      @select="chartName => activeChart = chartName"
    >
      <el-menu-item index="ConstantChart">
        <i class="el-icon-menu"></i>
        <span slot="title">实时数据</span>
      </el-menu-item>
      <el-menu-item index="HistoryChart">
        <i class="el-icon-setting"></i>
        <span slot="title">历史数据</span>
      </el-menu-item>
    </el-menu>

    <component :is="activeChart" class="main"></component>
  </div>

</template>

<script type="module">
  import ConstantChart from '../components/constant-chart'
  import HistoryChart from '../components/history-chart'
  import UserCard from '../components/user-card'

  // import user from '../store/user.js'
  // const { data } = user
  // @TODO 图表部分的包动态加载

  export default {
    data() {
      return { 
        activeIndex: '1',
        activeIndex2: '1',
        activeChart: 'ConstantChart'
      };
    },
    props: {
      val:{
        type: Number,
      }
    },
    components: {
      UserCard,
      ConstantChart,
      HistoryChart,
    },
    created() {
      console.log(this.plus)
      // this.$emit('plus', [2])
    },
    methods:{
      handleSuccess(){
        console.log(1)
      },
      handleError() {
        console.log(2)
      },
      func(n) {
        this.$emit('plus', n)
      }
    }
  }
</script>

<style>
.patient .menu{
  width: 200px;
  float: left;
  min-height: 400px;
}

.patient .main{
  overflow: auto;
}

</style>
