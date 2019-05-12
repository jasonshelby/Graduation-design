<template>
  <div class="about">
    <div id="main"></div>
  </div>
</template>

<script type="module">

import echarts from 'echarts'
import axios from 'axios'
// import user from '../store/user.js'
// const { data } = user

export default {
  data() {
    return { 
      constantData: [],
      timer: null,
      id: this.$route.params.id,
      kk: this.val
    };
  },
  props: {
    val:{
      type: Number,
    }
  },
  created() {
    // this.$emit(this.plus, 2)
    console.log('id:', this.id)
  }, 
  mounted() {
    var data = [];
    var now = +new Date() - 60 * 5 * 1000;
    var oneSecond = 1000;
    var value = Math.random() * 10;

    function randomData() {
      now = new Date(+now + oneSecond);
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [
          now,
          Math.round(value)
        ]
      }
    }
    let chart = echarts.init(document.getElementById('main'))
    for (var i = 0; i < 300; i++) {
      data.push(randomData());
    }
    this.timer = setInterval(function () {
      data.shift();
      data.push(randomData());
      chart.setOption({
        series: [{
          data: data
        }]
      });
    }, 1000);
    

    chart.setOption({
      title: {
          text: '实时脉搏数据'
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
          max: 200,
          min: 50,
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
  methods: {
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
