<template>
  <div class="about">
    <div id="main"></div>
  </div>
</template>

<script type="module">

import echarts from 'echarts'
import axios from 'axios'
import config from '../config.js'
// import user from '../store/user.js'
// const { data } = user
var now = +new Date();
var oneHour = 1000;
var value = Math.random() * 1000;

function randomData() {
    now = new Date(+ now + oneHour);
    value = value + Math.random() * 21 - 10;
    return {
      value:[
        [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
        Math.round(value)
      ]
    }
    // return {
    //     name: now.toString(),
    //     value: [
    //         // [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
    //         [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
    //         Math.round(value)
    //     ]
    // }
}

export default {
  data() {
    return { 
      // constantChart: null,
      constantData: [],
    };
  },
  created() {
    let { id } = this.$route.params
    // console.log('id:', id)
  }, 
  mounted() {
    var data = [];

    let chart = echarts.init(document.getElementById('main'))
    setInterval(()=> {
      for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }
      // console.table(data[0])
      chart.setOption({
        series: [{
          data: data
        }]
      });
    }, 1000);


    for (var i = 0; i < 3600; i++) {
      data.push(randomData());
    }


    chart.setOption({
      title: {
          text: '实时心跳数据'
      },
      // tooltip: {
      //     trigger: 'axis',
      //     formatter: function (params) {
      //         params = params[0];
      //         var date = new Date(params.name);
      //         console.log(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1])
      //         return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
      //     },
      //     axisPointer: {
      //         animation: false
      //     }
      // },
      xAxis: {
        // type: 'time',
        data: data.map(item => item.value[0]),
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        data: data.map(item => item.value[1]),
        // minInterval: 1,
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
      },
      series: [{
        name: '实时心跳数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        // data: data
      }]
    })
  },
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
}

</style>
