<template>
  <div :class="isPC ? 'patient' : 'M-patient'">
    <UserCard v-if="isPC" :state="state"></UserCard>
    <el-menu
      :default-active="activeChart"
      :class="isPC ? 'menu' : 'M-menu'"
      :mode="isPC ? 'vertical' : 'horizontal'"
      @select="chartName => activeChart = chartName"
    >
      <el-menu-item index="ConstantChart" class="lll">
        <i class="el-icon-menu"></i>
        <span slot="title">实时数据</span>
      </el-menu-item>
      <el-menu-item index="HistoryChart" class="lll">
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
  import state from '../store/index.js'

  // @TODO 图表部分的包动态加载
  export default {
    data() {
      return {
        state,
        activeChart: 'ConstantChart'
      };
    },
    components: {
      UserCard,
      ConstantChart,
      HistoryChart,
    },
    methods:{
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

.M-patient .el-menu-item{
  width: 50%;
}

</style>
