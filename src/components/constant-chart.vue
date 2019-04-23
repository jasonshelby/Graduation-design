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


  export default {
    data() {
      return { 
        constantChart: null,
        constantData: [1,2,3,4,5],
      };
    },
    created() {
      let { id } = this.$route.params
      console.log('id:', id)
    }, 
    mounted() {
      this.constantChart = echarts.init(document.getElementById('main'))
      setInterval(()=> {
        for (var i = 0; i < 5; i++) {
          this.constantData.shift();
          this.constantData.push(randomData());
        }

        this.constantChart.setOption({
          series: [{
            data: data
          }]
        });
      }, 1000);
        function randomData() {
          now = new Date(+now + oneDay);
          value = value + Math.random() * 21 - 10;
          return {
            name: now.toString(),
            value: [
              [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
              Math.round(value)
            ]
          }
        }

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}

this.constantChart.setOption({
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
            console.log(data)
            this.handleSuccess(data)
          } else if (data.success === "false") {
            this.handleError(data.message)
          }
        }, e => {
          this.handleError(e)
        })
      },
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
