import React from 'react';
import { Grid, Typography,Card,CardHeader, CardContent, Table, TableRow, TableBody, TableCell, CardActionArea } from '@material-ui/core';
import { Assignment } from '@material-ui/icons';
import BarGraph from './barchart';
import DonutGraph from './donutchart';
const avgOEE = 99;
const avgPerf = 99;
const avgAvail = 78;
const avgQual = 74;


const getDate = () => {
    var today = new Date();

    return (today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear())
}

export default function Report(){


    return(
        <Grid style={{height: 82.5+'vh'}}>
            <Grid>
                <Typography style={{}}>
                    <h1 style={{display: 'inline-block'}}>Report</h1>
                    <p style={{display: 'inline-block',fontSize: 13, marginLeft: 1+'%'}} variant = 'body2'>as on {getDate()}</p>
                    <Typography style={{ marginTop: 1+'%', float:' right'}}>
                    <h6>Generate Report <Assignment></Assignment></h6>
                    </Typography>
                </Typography>
            </Grid>
            <Grid style={{display: 'flex',alignItems: 'stretch', marginTop: 2+'%', height: 60+'vh'}}>
                <Card style={{flex: 1}}>
                <CardHeader 
                        style={{paddingBottom: 0}}
                        title = {
                            <div>
                                <h3>Parameter Analytics</h3>
                                <hr />
                            </div>
                        }
                    />
                    <CardContent style={{padding: 2+'%', textAlign: 'center',paddingTop: 0, height: 40+'vh'}}>
                        <Table style={{width: 80+'%',margin: 'auto'}}>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                       Average OEE
                                    </TableCell>
                                    <TableCell>
                                        {avgOEE}
                                    </TableCell>
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell>
                                    Average Performance
                                    </TableCell>
                                    <TableCell>
                                        {avgPerf}
                                    </TableCell>
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell>
                                    Average Quality
                                    </TableCell>
                                    <TableCell>
                                        {avgQual}
                                    </TableCell>
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell>
                                    Average Availiblity
                                    </TableCell>
                                    <TableCell>
                                        {avgAvail}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card style={{flex: 1}}>
                <CardHeader 
                        title={
                            <div>
                                <h3>Part Details</h3>
                                <hr></hr>
                            </div>
                        }
                    />
                    <CardContent style={{padding: 5+'%', paddingTop: 0}}>
                        <BarGraph></BarGraph>
                    </CardContent>
                </Card>
                <Card style={{flex: 1}}>
                <CardHeader 
                            title= {
                                <div>
                                    <h3 style={{display: 'inline-block'}}>Time Analysis</h3>
                                    <p style={{display: 'inline-block', marginLeft: 2+'%'}}variant = 'body2'>( in minutes )</p>
                                    <hr />
                                </div>
                            }
                        />
                        <CardContent>
                            <DonutGraph></DonutGraph>
                        </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

/*<Grid style={{flex: '1'}}>
                <Card>
                    <CardHeader 
                        style={{paddingBottom: 0}}
                        title = {
                            <div>
                                <h3>Parameter Analytics</h3>
                                <hr />
                            </div>
                        }
                    />
                    <CardContent style={{padding: 2+'%', textAlign: 'center',paddingTop: 0, height: 40+'vh'}}>
                        <Table style={{width: 80+'%',margin: 'auto'}}>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                       Average OEE
                                    </TableCell>
                                    <TableCell>
                                        {avgOEE}
                                    </TableCell>
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell>
                                    Average Performance
                                    </TableCell>
                                    <TableCell>
                                        {avgPerf}
                                    </TableCell>
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell>
                                    Average Quality
                                    </TableCell>
                                    <TableCell>
                                        {avgQual}
                                    </TableCell>
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell>
                                    Average Availiblity
                                    </TableCell>
                                    <TableCell>
                                        {avgAvail}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>
            <Grid style={{flex: 1}}>
                <Card >
                    <CardHeader 
                        title={
                            <div>
                                <h3>Part Details</h3>
                                <hr></hr>
                            </div>
                        }
                    />
                    <CardContent style={{padding: 5+'%', paddingTop: 0}}>
                        <BarGraph></BarGraph>
                    </CardContent>
                </Card>
            </Grid>
            <Grid style={{flex: 1,maxWidth: 30+'%'}}>
                    <Card>
                        <CardHeader 
                            title= {
                                <div>
                                    <h3 style={{display: 'inline-block'}}>Time Analysis</h3>
                                    <p style={{display: 'inline-block', marginLeft: 2+'%'}}variant = 'body2'>( in minutes )</p>
                                    <hr />
                                </div>
                            }
                        />
                        <CardContent>
                            <DonutGraph></DonutGraph>
                        </CardContent>
                    </Card>
            </Grid>*/