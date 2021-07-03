import React from 'react';
import { withStyles} from '@material-ui/core';
import {Line, Chart} from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';
import 'chartjs-adapter-luxon';
import { ShowChart } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';
import {Grid,Card, CardContent, CardHeader,CardActionArea, Table, TableRow, TableCell, TableBody, TableHead} from '@material-ui/core'
import {Scrollbars } from 'rc-scrollbars';

Chart.register(StreamingPlugin);

//const useStyles = makeStyles({});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: grey[800],
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const avgOEE = 99;
const avgPer = 74;
const avgQual = 63;
const avgAvail = 78;

const customLabel = [
  {
    icon: ShowChart,
    text: 'OEE',
    value: avgOEE,
    color: '#1199EE',
  },{
    icon: ShowChart,
    text: 'Performance',
    value: avgPer,
    color: '#D1A166',
  },{
    icon: ShowChart,
    text: 'Quality',
    value: avgQual,
    color: '#E03409',
  },{
    icon: ShowChart,
    text: 'Availibility',
    value: avgAvail,
    color: '#000000',
  }
]


const data = {
  datasets: [
    {
      label: 'OEE',
      //backgroundColor: 'hsla(203,87%,50%,0.5)',
      borderColor: '#1199EE',
      data: [],
      borderWidth: 2,
      pointRadius: 0,
   
    },
    {
      label: 'Performance',
      //backgroundColor: 'hsla(33, 54%, 61%,0.5)',
      borderColor: '#D1A166',
      data: [],
      borderWidth: 2,
      pointRadius: 0,
     
    },
    {
      label: 'Availibility',
      //backgroundColor: 'hsla(12, 92%, 46%,0.5)',
      borderColor: '#E03409',
      data: [],
      borderWidth: 2,
      pointRadius: 0,
     
    },{
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
  chart.data.datasets.forEach(dataset => {
    dataset.data.push({
      x: now,
      y: 1 + Math.random()*(100)
    });
  });
};

const config = {
  reponsive: true,
  maintainAspectRatio: true,
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
          fontSize: 0.1+'vw',
          color: 'hsl(238, 61%, 19%)',
          font: '"Baloo Da 2", cursive'
        }
      }
    },
};


export default function PerformanceGraph(){

  //const theme = useTheme();

    return(
        <div style={{display: 'flex', justifyContent: 'space-between',width: 100+'%',}}>
          <Card style={{display: 'inline-block',width: 65+'%', height: 100+'%',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
            <CardHeader 
            title= {
                <div>
                  <h4> Workstation 1 Analytics</h4>
                  <hr />
                  </div>
               }
            />
            <CardActionArea style={{textAlign :'center'}}>
            {customLabel.map((label) => (
                <Grid style= {{ margin: 1+'%',width: 20+'%', display: 'inline-block'}}>
                <Grid style={{display: 'inline-block',padding: 6+'%', backgroundColor: label.color, borderRadius: 100+'%'}}>
                <ShowChart style={{color: 'white'}} size = 'large'></ShowChart>
                </Grid>
                  <Grid style={{display: 'inline-block', marginLeft: 5+ '%', verticalAlign: 'top'}}>
                  <h4 style={{marginBottom: 0}}>{label.value}</h4>
                  <p variant = 'body2' >{label.text}</p>
                  </Grid>
                </Grid>
            ))}
            </CardActionArea>
            <CardContent style={{}}>
                <Line data = {data} options = {config} style={{}} />
            </CardContent>
            </Card>
            <div item style={{ display: 'inline-block', maxHeight: 100+'%', width: 32+'%'}}>
            <Card style={{width: 100+'%', display: 'block',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',}}>
              <CardHeader style={{paddingBottom: 0}}
                title = {
                  <div>
                    <h4>Process Log</h4>
                    <hr />
                  </div>
                } 
              />
              <CardContent style={{paddingTop: 0}}>
                <Table stickyHeader style={{width: 100+'%',overflow : 'auto', height: 65+'vh', fontFamily: 'Baloo Da 2, cursive', display: 'block'}}>
                <Scrollbars>
                <TableHead>
                    <TableRow>
                      <StyledTableCell>Process</StyledTableCell>
                      <StyledTableCell>TimeStamp</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  <StyledTableRow >
                      <StyledTableCell>Pallet entered workstation 1</StyledTableCell>
                      <StyledTableCell>21/02/2021, 12:12:12</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Pallet entered workstation 1</StyledTableCell>
                      <StyledTableCell>21/02/2021, 12:12:12</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Pallet entered workstation 1</StyledTableCell>
                      <StyledTableCell>21/02/2021, 12:12:12</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Pallet entered workstation 1</StyledTableCell>
                      <StyledTableCell>21/02/2021, 12:12:12</StyledTableCell>
                    </StyledTableRow><StyledTableRow>
                      <StyledTableCell>Pallet entered workstation 1</StyledTableCell>
                      <StyledTableCell>21/02/2021, 12:12:12</StyledTableCell>
                    </StyledTableRow><StyledTableRow>
                      <StyledTableCell>Pallet entered workstation 1</StyledTableCell>
                      <StyledTableCell>21/02/2021, 12:12:12</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Pallet entered workstation 1</StyledTableCell>
                      <StyledTableCell>21/02/2021, 12:12:12</StyledTableCell>
                    </StyledTableRow><StyledTableRow>
                      <StyledTableCell>Pallet entered workstation 1</StyledTableCell>
                      <StyledTableCell>21/02/2021, 12:12:12</StyledTableCell>
                    </StyledTableRow><StyledTableRow>
                      <StyledTableCell>Pallet entered workstation 1</StyledTableCell>
                      <StyledTableCell>21/02/2021, 12:12:12</StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                  </Scrollbars>
                </Table>
              </CardContent>
            </Card>
            </div>
        </div>
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
                </Table>*/