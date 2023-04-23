const curveChartDom = document.getElementById('curve');
const curveChart = echarts.init(curveChartDom);

fetch("https://edu.telking.com/api/?type=month").then((res) => res.json()).then((monthData) => {
  const { xAxis: xAxisData, series: seriesData } = monthData.data
  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} 人'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        lineStyle: {
          color: '#8fb6f3',
          width: 5
        },
        areaStyle: {
          color: '#f3f6fd'
        },
       
        data: seriesData,
        label:{
          show:true,
          position: 'top'
        }
      }
    ],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    title:{
      text: '曲线图数据展示',
      left: 'center'
    }
  };
  option && curveChart.setOption(option);
})

