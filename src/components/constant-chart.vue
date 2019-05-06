<template>
  <div class="about">
    <div id="main"></div>
  </div>
</template>

<script type="module">

import echarts from 'echarts'
import axios from 'axios'
import config from '../config.js'
import { clearInterval } from 'timers';
// import user from '../store/user.js'
// const { data } = user



export default {
  data() {
    return { 
      constantData: [],
      timer: null,
    };
  },
  created() {
    let { id } = this.$route.params
    // console.log('id:', id)
  }, 
  mounted() {
    var data = [];
    var now = +new Date();
    var oneSecond = 1000;
    var value = Math.random() * 10;

    function randomData() {
        now = new Date(+now + oneSecond);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                now,
                // [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        }
    }
    let chart = echarts.init(document.getElementById('main'))
    // if (data.length === 0) {
      for (var i = 0; i < 300; i++) {
        data.push(randomData());
      }
    // }
    // if(!this.timer) {
      this.timer = setInterval(function () {
        data.shift();
        data.push(randomData());
        chart.setOption({
          series: [{
            data: data
          }]
        });
      }, 1000);
    // }
    

    chart.setOption({
      title: {
          text: '动态数据 + 时间坐标轴'
      },
      tooltip: {
          trigger: 'axis',
          formatter: function (params) {
              params = params[0];
              var date = new Date(params.name);
              return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
          },
          axisPointer: {
              animation: false
          }
      },
      xAxis: {
          type: 'time',
          interval: 60 * 1000,
          splitLine: {
              show: false
          }
      },
      yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
              show: false
          }
      },
      series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data
      }]
    })
  },
  // destroyed() {
  //   console.log('des')
  //   if(this.timer){
  //     clearInterval(this.timer)
  //   }
  // },
  methods: {
    download() {
      axios.get(`${ config.host }/downloadRequest`, {
        params: {
          id: 17,
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
