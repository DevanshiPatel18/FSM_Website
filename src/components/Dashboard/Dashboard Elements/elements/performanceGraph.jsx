import React from 'react';
import { withStyles } from '@material-ui/core';
import { Line, Chart } from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';
import 'chartjs-adapter-luxon';
import { ShowChart } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';
import { Grid, Card, CardContent, CardHeader, CardActionArea, Table, TableRow, TableCell, TableBody, TableHead } from '@material-ui/core'
import { Scrollbars } from 'rc-scrollbars';
import CustomLabel from './customLabels';
import pure from 'recompose/pure'
import db from '../../../../firebase';
import { useState } from 'react';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')

Chart.register(StreamingPlugin);

//const useStyles = makeStyles({});


export default function PerformanceGraph() {
  //const theme = useTheme();

  let thiscurrentOEE = 0;
  let thiscurrentAvail = 0;
  let thiscurrentQual = 0;
  let thiscurrentPer = 0;




  const data = {
    datasets: [
      {
        id: 'oee',
        label: 'OEE',
        //backgroundColor: 'hsla(203,87%,50%,0.5)',
        borderColor: '#1199EE',
        data: [],
        borderWidth: 2,
        pointRadius: 0,

      },
      {
        id: 'performance',
        label: 'Performance',
        //backgroundColor: 'hsla(33, 54%, 61%,0.5)',
        borderColor: '#D1A166',
        data: [],
        borderWidth: 2,
        pointRadius: 0,

      },
      {
        id: 'availibility',
        label: 'Availibility',
        //backgroundColor: 'hsla(12, 92%, 46%,0.5)',
        borderColor: '#E03409',
        data: [],
        borderWidth: 2,
        pointRadius: 0,

      }, {
        id: 'quality',
        label: 'Quality',
        //backgroundColor: 'hsla(0, 0%, 0%,0.5)',   
        borderColor: '#000000',
        data: [],
        borderWidth: 2,
        pointRadius: 0,
      }
    ]
  };


  const onRefresh = chart => {
    const now = Date.now();

    db.collection('Realtime').doc('WS 1').onSnapshot((snapshot) => {
      thiscurrentOEE = snapshot.data().oee;
      thiscurrentAvail = snapshot.data().avalability;
      thiscurrentPer = snapshot.data().performance;
      thiscurrentQual = snapshot.data().quality;
    })

    chart.data.datasets[0].data.push({ x: now, y: thiscurrentOEE })
    chart.data.datasets[1].data.push({ x: now, y: thiscurrentPer })
    chart.data.datasets[2].data.push({ x: now, y: thiscurrentQual })
    chart.data.datasets[3].data.push({ x: now, y: thiscurrentAvail })

    //chart.data.datasets.forEach((dataset,id) => {
    //  dataset.data.push({
    //  x: now,
    // y: Math.random()*100
    //});
    //});


  };

  const config = {
    reponsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'realtime',
        realtime: {
          duration: 20000,
          refresh: 1000,
          delay: 1000,
          onRefresh: onRefresh
        }
      },
      y: {
        title: {
          display: false,
          text: 'Value'
        }
      }
    },
    interaction: {
      intersect: false
    },
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          fontSize: 0.1 + 'vw',
          color: 'hsl(238, 61%, 19%)',
          font: '"Baloo Da 2", cursive'
        }
      }
    },
  };



  return (
    
      <Card style={{ display: 'inline-block', width: 100 + '%', height: 100 + '%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
        <CardHeader
          title={
            <div>
              <h4> Workstation 1 Analytics</h4>
              <hr />
            </div>
          }
        />
        <CardActionArea style={{ textAlign: 'center' }}>
          <CustomLabel></CustomLabel>
        </CardActionArea>
        <CardContent style={{height :  65+'%'}}>
          <Line data={data} options={config} style={{}} />
        </CardContent>
      </Card>

  );

}
/*<Table style={{display: 'block',overflow: 'scroll', height: 100+'%'}}>
                  <TableHead >
                    <StyledTableRow>
                      <TableCell>Process</TableCell>
                      <TableCell>TimeStamp</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody style={{ overflowY: 'scroll', height: 100+'%'}} >
                    <TableRow>
                      <TableCell>Pallet entered workstation 1</TableCell>
                      <TableCell>21/02/2021, 12:12:12</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pallet entered workstation 1</TableCell>
                      <TableCell>21/02/2021, 12:12:12</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pallet entered workstation 1</TableCell>
                      <TableCell>21/02/2021, 12:12:12</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pallet entered workstation 1</TableCell>
                      <TableCell>21/02/2021, 12:12:12</TableCell>
                    </TableRow><TableRow>
                      <TableCell>Pallet entered workstation 1</TableCell>
                      <TableCell>21/02/2021, 12:12:12</TableCell>
                    </TableRow><TableRow>
                      <TableCell>Pallet entered workstation 1</TableCell>
                      <TableCell>21/02/2021, 12:12:12</TableCell>
                    </TableRow>


                  </TableBody>
chart.data.datasets[0].data.push({x: now, y: thiscurrentOEE})
      chart.data.datasets[1].data.push({x: now, y: thiscurrentPer})
      chart.data.datasets[2].data.push({x: now, y: thiscurrentQual})
      chart.data.datasets[3].data.push({x: now, y: thiscurrentAvail})
                </Table>*/