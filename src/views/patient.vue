<template>
  <div class="about">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">数据A</el-menu-item>
      <el-menu-item index="3">数据B</el-menu-item>
    </el-menu>
    <div class="line"></div>
    <div id="main"></div>
    <!-- @TODO 路由传参
    patient/:id
      用户详情

    @TODO menu选项卡 -->
  </div>

  <!-- 39.107.126.150:80/login -->
</template>

<script type="module">
import echarts from 'echarts'
import user from '../store/user.js'
const { data } = user

// @TODO 抽出一个组件 图表代码分离
// @TODO 图表部分的包动态加载

  export default {
    data() {
      return { 
        activeIndex: '1',
        activeIndex2: '1' 
      };
    },
    mounted() {
      let len = data.length
      var myChart = echarts.init(document.getElementById('main'));
      // 绘制图表
      var base = +new Date(1968, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var date = [];

      for (var i = 1; i < len; i++) {
          var now = new Date(base += oneDay);
          date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      }
      myChart.setOption({
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        series: [
          {
              name: '心率数据',
              type: 'line',
              smooth: true,
              symbol: 'none',
              sampling: 'average',
              itemStyle: {
                  color: 'rgb(255, 70, 131)'
              },
              // areaStyle: {
              //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //         offset: 0,
              //         color: 'rgb(255, 158, 68)'
              //     }, {
              //         offset: 1,
              //         color: 'rgb(255, 70, 131)'
              //     }])
              // },
              data: data
          }
        ],
        // title: {
        //     left: 'center',
        //     text: '大数据量面积图',
        // },
        // toolbox: {
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: 'none'
        //         },
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        
        yAxis: {
            type: 'value',
            boundaryGap: ['10%', '80%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 20
          }, 
          {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
          }
        ],
    });
    },
    methods: {
      
    }
  }
</script>

<style>
#main{
  height: 400px;
}

</style>
