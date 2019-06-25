<template>
  <div class="history-chart">
    <el-time-picker
      is-range
      v-model="value1"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围">
    </el-time-picker>
    
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
   
    <el-button @click="querydata">查询</el-button>


    <div id="main"></div>
  </div>
</template>

<script type="module">

import echarts from 'echarts'
// import axios from 'axios'
import { baseChartOptions, randomData } from '../units/base-chart-data.js'
import user from '../store/user.js'
const { data: mockData } = user

export default {
  data() {
    return {
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      data:[],
      start: '0',
      end: '1000',
      id: this.$route.params.id,
      chart: null,
    };
  },
  created() {
    this.download()
  },
  mounted() {
    let [start, end] = [Number(this.start), Number(this.end)]
    this.chart = echarts.init(document.getElementById('main'))
    for (var i = start; i < end; i++) {
      let data = randomData(mockData, i)
      this.data.push(data);
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
    querydata() {
      let [start, end] = [Number(this.start), Number(this.end)]
      this.data = []
      for (var i =start; i < end; i++) {
        let data = randomData(mockData, i)
        this.data.push(data);
      }
      this.setChart(this.data)
    },
    download() {
      // axios.get(`${ this.host }/downloadRequest`, {
      //   params: {
      //     id: this.id,
      //     startTime: Date.now()-20,
      //     endTime: Date.now()
      //   }
      // })
      // .then(mes => {
      //   let { data } = mes
      //   if (data.success === "true") {
      //     // console.log(data)
      //     this.handleSuccess(data)
      //   } else if (data.success === "false") {
      //     this.handleError(data.message)
      //   }
      // }, e => {
      //   this.handleError(e)
      // })
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

      <!-- <div>start: </div>
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
      </el-input> -->
   
    <!-- <el-button @click="querydata">查询</el-button> -->
