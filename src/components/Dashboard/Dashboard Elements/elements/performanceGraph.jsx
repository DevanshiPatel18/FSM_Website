import React from 'react';
//import { makeStyles } from '@material-ui/core';
import {Line, Chart} from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';
import 'chartjs-adapter-luxon'

Chart.register(StreamingPlugin);

//const useStyles = makeStyles({});

const data = {
  datasets: [
    {
      label: 'OEE',
      backgroundColor: 'hsla(203,87%,50%,0.5)',
      borderColor: '#1199EE',
      data: [12,14,15,12],
      borderWidth: 2,
      pointBorderWidth: 0.1,
    },
    {
      label: 'Performance',
      backgroundColor: 'hsla(33, 54%, 61%,0.5)',
      borderColor: '#D1A166',
      data: [7,5,8,9,2],
      borderWidth: 2,
      pointBorderWidth: 0.1,
    },
    {
      label: 'Availibility',
      backgroundColor: 'hsla(12, 92%, 46%,0.5)',
      borderColor: '#E03409',
      data: [7,5,8,9,2],
      borderWidth: 2,
      pointBorderWidth: 0.1,
    },{
      label: 'Quality',
      backgroundColor: 'hsla(0, 0%, 0%,0.5)',   
      borderColor: '#000000',
      data: [7,5,8,9,2],
      borderWidth: 2,
      pointBorderWidth: 0.1,
    }
  ]
};

const onRefresh = chart => {
  const now = Date.now();
  chart.data.datasets.forEach(dataset => {
    dataset.data.push({
      x: now,
      y: 1 + Math.random()*(100)
    });
  });
};

const config = {
    scales: {
      x: {
        type: 'realtime',
        realtime: {
          duration: 20000,
          refresh: 1000,
          delay: 2000,
          onRefresh: onRefresh
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value'
        }
      }
    },
    interaction: {
      intersect: false
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontSize: 0.1+'vh',
          color: 'hsl(238, 61%, 19%)',
        }
      }
    },legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontSize: 0.1+'vh',
        color: 'hsl(238, 61%, 19%)',
      }
    }
};


export default function PerformanceGraph(){

    return(
        <div>
            <Line style={{display: 'inline-block'}} data = {data} options = {config}  />
        </div>
    );

}