<template>
  <div class="about">
    <div id="main"></div>
  </div>
</template>

<script type="module">
// import axios from 'axios'
import echarts from 'echarts'
import { baseChartOptions, randomData } from '../units/base-chart-data.js'
import user from '../store/user.js'
const { data: mockData } = user

export default {
  data() {
    return {
      data:[],
      timer: null,
      id: this.$route.params.id,
      chart: null,
    };
  },
  created() {
    // console.log('id:', this.id)
  },  
  mounted() {
    this.chart = echarts.init(document.getElementById('main'))

    for (var i = 0; i < 1200; i++) {
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

    this.timer = setInterval(() => {
      for (var j = 0; j < 200; j++) {
        let data = randomData(mockData, i++)
        this.data.push(data);
        this.data.shift();
      }
      this.setChart(this.data);
    }, 1000);
  },
  methods: {
    setChart(data) {
      this.chart.setOption({
        series: [{
          data,
        }],
      })
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
    handleSuccess(){
      // console.log(1)
    },
    handleError() {
      // console.log(2)
    }
  }
}
</script>

<style>
#main{
  height: 400px;
  /* width: 604px; */
}

</style>
