import React from 'react'
import { Line } from 'react-chartjs-2';
import "./Chart.css"

function Chart (props) {
  console.log(props)
  const [lowerLimit, upperLimit] = [new Date(props.startDate).getTime(),new Date(props.endDate).getTime()]
    const dates = [];
    const counters = [];
    props.list.forEach((data)=>{
        if(data.date>=lowerLimit && data.date<=upperLimit){
            dates.push(new Date(data.date).toISOString().split('T')[0]);
            counters.push(data.size);
        }
    })
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Messages Recieved',
        data:counters,
        borderColor: ['rgba(105, 105,105, 0.7)'],
        backgroundColor: ['rgba(255, 255, 255, 0.2)'],
        pointBackgroundColor: ['rgba(105, 105,105, 0.6)'],
        pointBorderColor: ['rgba(105, 105,105, 0.4)'],
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Message Statistics'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            stepSize: 1,
          }
        }
      ]
    }
  }

  return <div className="Analytics"><div className="chart"><Line data={data} options={options} /></div></div>
}

export default Chart
