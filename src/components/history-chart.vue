<template>
  <div class="history-chart">
    <div class="box">
      <div>start: </div>
      <el-input
        class="start"
        placeholder="请输入内容"
        v-model="start"
        clearable>
      </el-input>
      <div>end: </div>
      <el-input
        class="end"
        placeholder="请输入内容"
        v-model="end"
        clearable>
      </el-input>
    </div>
   
    <el-button @click="querydata">查询</el-button>
    <div id="main"></div>
  </div>
</template>

<script type="module">

import echarts from 'echarts'
import axios from 'axios'
import { baseChartOptions, randomData } from '../units/base-chart-data.js'
import user from '../store/user.js'
const { data: mockData } = user

export default {
  data() {
    return {
      data:[],
      start: '',
      end: '',
      id: this.$route.params.id,
      chart: null,
    };
  },
  created() {
    this.download()
  },
  mounted() {
    this.chart = echarts.init(document.getElementById('main'))
    
    for (var i = 0; i < 1000; i++) {
      this.data.push(randomData(mockData));
    }

    this.chart.setOption({
      ...baseChartOptions,
      series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data
      }],
    })
  },
  methods: {
    setChart(data) {
      this.chart.setOption({
        series: [{
          data,
        }],
      })
    },
    querydata(start = this.start, end = this.end) {
      console.log('查询', start, end)
    },
    download() {
      axios.get(`${ this.host }/downloadRequest`, {
        params: {
          id: this.id,
          startTime: Date.now()-20,
          endTime: Date.now()
        }
      })
      .then(mes => {
        let { data } = mes
        if (data.success === "true") {
          // console.log(data)
          this.handleSuccess(data)
        } else if (data.success === "false") {
          this.handleError(data.message)
        }
      }, e => {
        this.handleError(e)
      })
    },
    handleSuccess(...v){
      console.log(...v)
    },
    handleError(...v){
      console.log(...v)
    },
    
  },
}
</script>
<style>
#main{
  height: 400px;
  /* width: 604px; */
}
/* .history-chart{

}

.history-chart .box{

} */

.history-chart .box > div{
  height: 40px;
  line-height: 40px;
  float: left;
  margin-left: 20px;
}

.history-chart .box .start{
  width: 300px;
  float: left;
}

.history-chart .box .end{
  float: left;
  width: 300px;
}

</style>
