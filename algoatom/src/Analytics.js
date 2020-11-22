import React from 'react'
import { Line } from 'react-chartjs-2';
import "./Analytics.css"

function Analytics () {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May'
    ],
    datasets: [
      {
        label: 'Messages Recieved (M)',
        data: [3, 2, 2, 1, 5],
        borderColor: ['rgba(105, 105,105, 0.2)'],
        backgroundColor: ['rgba(255, 255, 255, 0.2)'],
        pointBackgroundColor: ['rgba(105, 105,105, 0.2)'],
        pointBorderColor: ['rgba(105, 105,105, 0.2)'],
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
            max: 6,
            stepSize: 1
          }
        }
      ]
    }
  }

  return <div className="Analytics"><div className="chart"><Line data={data} options={options} /></div></div>
}

export default Analytics
