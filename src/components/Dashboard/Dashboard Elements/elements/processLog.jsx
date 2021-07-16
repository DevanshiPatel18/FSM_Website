import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { Line, Chart } from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';
import 'chartjs-adapter-luxon';
import { ShowChart } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';
import { Grid, Card, CardContent, CardHeader, CardActionArea,Button,  Table, TableRow, TableCell, TableBody, TableHead } from '@material-ui/core'
import { Assignment } from '@material-ui/icons';
import { Scrollbars } from 'rc-scrollbars';
import db from '../../../../firebase';
import { useState } from 'react';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import useProcessStatus from './processLogHook';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')

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
    width: 100 + '%',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


export default function ProcessLog() {
  const ref = React.createRef(null);


  const { process } = useProcessStatus();

  const generateRows = () => {
    return  
  }
  
  return (
    <Grid style={{ width: 100 + '%', height: 100+'%'}}>
    
        <Card style={{ width: 100 + '%', display: 'block',height: 'inherit', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }}>
          <CardHeader style={{ paddingBottom: 0 }}
            title={
              <div>
                <h4 style={{display: 'inline-block'}}>Process Log</h4>
                <Button 
                style={{ display: 'inline-block',float: ' right',width: 40+'%' }}
                onClick={() => {
                        let element = ref.current;
                        console.log(element)
                        savePDF(element, {
                          repeatHeaders: true,
                          paperSize: "A4",
                          margin: "2cm",
                        });
                    }}>
                        <Typography >
                            <Assignment></Assignment>Print
                        </Typography>
                    </Button>
                <hr />
              </div>
            }
          />
          
          <CardContent  style={{ paddingTop: 0 }}>
          <Table ref= {ref} stickyHeader style={{width: 100+'%',overflowY : 'scroll',height: 90+'vh', fontFamily: 'Baloo Da 2, cursive', display: 'block'}}>
               
                <TableHead>
                    <TableRow>
                      <StyledTableCell>Process</StyledTableCell>
                      <StyledTableCell>TimeStamp</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {process.map((item => item)).reverse().map( (aProcess) => (
                  <StyledTableRow>
                  <StyledTableCell>
                    {
                    aProcess.processData}
                  </StyledTableCell>
                  <StyledTableCell>
                    {aProcess.dateData}
                  </StyledTableCell>
                  </StyledTableRow>
    
    ))
  }
    
  </TableBody>
                 
                </Table>
          </CardContent>
        

        </Card>
   
    </Grid>
  )
}

/*
<Grid style={{ width: 100 + '%' }}>
      <div item style={{ display: 'inline-block', maxHeight: 100 + '%', width: 100 + '%' }}>
        <Card style={{ width: 100 + '%', display: 'block', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }}>
          <CardHeader style={{ paddingBottom: 0 }}
            title={
              <div>
                <h4>Process Log</h4>
                <hr />
              </div>
            }
          />
          <CardContent style={{ paddingTop: 0 }}>
            <Table stickyHeader style={{ display: 'block', width: 100 + '%', height: 40 + 'vh', overflow: 'auto', fontFamily: 'Baloo Da 2, cursive' }}>
              <Scrollbars>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ width: 75 + '%', }}>Process</StyledTableCell>
                    <StyledTableCell style={{ width: 50 + '%' }}>TimeStamp</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {process.map((aProcess) => (

                    <StyledTableRow>
                      <StyledTableCell>
                        {aProcess.processData}
                      </StyledTableCell>
                      <StyledTableCell>
                        {aProcess.dateData}
                      </StyledTableCell>
                    </StyledTableRow>

                  ))
                  }

                </TableBody>
              </Scrollbars>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Grid>

*/