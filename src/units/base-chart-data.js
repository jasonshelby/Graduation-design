export const baseChartOptions = {
  // title: {
  //   text: '历史脉搏数据'
  // },
  xAxis: {
    type: 'time',
    // interval: 60 * 1000,
    splitLine: {
        show: false
    }
  },
  yAxis: {
    type: 'value',
    max: -1200000,
    min: -1180000,
    boundaryGap: [0, '100%'],
    splitLine: {
        show: false
    }
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
  
}

var now = +new Date() - 60 * 5 * 1000;
var oneSecond = 5;

export function randomData(mockData) {
  now = new Date(+now + oneSecond);
  return {
    name: now.toString(),
    value: [
      now,
      // Number(String(mockData.pop()).substring(4)) + 300 
      -mockData.shift()
    ]
  }
}