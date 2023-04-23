const pieChartDom = document.getElementById('pie');
const pieChart = echarts.init(pieChartDom);

const barChartDom = document.getElementById('bar');
const barChart = echarts.init(barChartDom);
fetch("https://edu.telking.com/api/?type=week").then((res) => res.json()).then((weekData) => {
    const { xAxis: xAxisData, series: seriesData } = weekData.data
    const newSeriesData = seriesData.map((item, index) => {
        return { value: item, name: xAxisData[index] }
    })
    const pieOption = {

        title: {
            text: '饼状图数据展示',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },

        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: newSeriesData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    pieOption && pieChart.setOption(pieOption);

    barOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ],
        title:{
            text: '柱状图数据展示',
            left: 'center'
        }
      };

      barOption && barChart.setOption(barOption);
})

