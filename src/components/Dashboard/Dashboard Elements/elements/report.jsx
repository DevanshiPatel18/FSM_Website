import React, { createRef } from 'react';
import { Grid, Typography, Card, CardHeader, CardContent, Table, TableRow, TableBody, TableCell, CardActionArea, Button } from '@material-ui/core';
import { Assignment } from '@material-ui/icons';
import BarGraph from './barchart';
import DonutGraph from './donutchart';
import ReactPDF from '@react-pdf/renderer/lib/react-pdf.browser.es.js';
import ProcessLog from './processLog';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import './pdf.css';
import { useState } from 'react';
import { useEffect } from 'react';

import db from '../../../../firebase';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')


const getDate = () => {
    var today = new Date();

    return (today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear())
}



export default function Report() {


    const ref = React.createRef();

    const [OEE, setOEE] = useState(0);
    const [Avail, setAvail] = useState(0);
    const [Qual, setQual] = useState(0);
    const [Per, setPer] = useState(0);


    useEffect(() => {
        db.collection('Analytics').doc('Parameters').onSnapshot((snap) => {
            setOEE(snap.data().oee);
            setAvail(snap.data().availability);
            setQual(snap.data().quality);
            setPer(snap.data().performance);
        })
    },[])



    return (

        <Grid style={{height: 83+'vh', overflow: 'hidden'}}>
            <Grid>
                <Typography style={{}}>
                    <Grid style={{display: 'inline-block', width: 40+'%'}}>
                    <h1 style={{ display: 'inline-block' }}>Report</h1>
                    <p style={{ display: 'inline-block', fontSize: 13, marginLeft: 1 + '%' }} variant='body2'>as on {getDate()}</p>
                    </Grid>
                    <Button   style={{ marginTop: 1 + '%', float: ' right' }} onClick={() => {
                        if (ref.current) {
                            console.log(ref.current.style);
                            ref.current.save();
                        }
                    }}>
                        <Typography >
                            <h6>Generate Report <Assignment></Assignment></h6>
                        </Typography>
                    </Button>
                </Typography>
            </Grid>
            <PDFExport ref={ref} >
                <Grid style={{ display: 'flex', alignItems: 'stretch',justifyContent: 'space-between', marginTop: 2 + '%', height: 60 + 'vh' }} >
                    <Card style={{  width: 48+'%' }}>
                        <CardHeader
                            style={{ paddingBottom: 0 }}
                            title={
                                <div>
                                    <h3>Parameter Analytics</h3>
                                    <hr />
                                </div>
                            }
                        />
                        <CardContent style={{ padding: 2 + '%', textAlign: 'center', paddingTop: 0, height: 40 + 'vh' }}>
                            <Table style={{ width: 80 + '%', margin: 'auto' }}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            Average OEE
                                        </TableCell>
                                        <TableCell>
                                            {OEE}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            Average Performance
                                        </TableCell>
                                        <TableCell>
                                            {Per}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            Average Quality
                                        </TableCell>
                                        <TableCell>
                                            {Qual}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            Average Availiblity
                                        </TableCell>
                                        <TableCell>
                                            {Avail}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card style={{ width: 48+'%' }}>
                        <CardHeader
                            title={
                                <div>
                                    <h3>Part Details</h3>
                                    <hr></hr>
                                </div>
                            }
                        />
                        <CardContent style={{ padding: 5 + '%', paddingTop: 0 , height: 90+'%'}}>
                            <BarGraph></BarGraph>
                        </CardContent>
                    </Card>

                </Grid>
                
            </PDFExport>

        </Grid>

    )
}

/*

<Grid style={{ width: 80 + '%', display: 'flex', marginTop: 5 + '%', justifyContent: 'center', margin: 'auto' }}>
                    <ProcessLog></ProcessLog>
                </Grid>

<Grid style={{flex: '1'}}>
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
            </Grid>




            <Card style={{ flex: 1 }}>
                        <CardHeader
                            title={
                                <div>
                                    <h3 style={{ display: 'inline-block' }}>Time Analysis</h3>
                                    <p style={{ display: 'inline-block', marginLeft: 2 + '%' }} variant='body2'>( in minutes )</p>
                                    <hr />
                                </div>
                            }
                        />
                        <CardContent>
                            <DonutGraph></DonutGraph>
                        </CardContent>
                    </Card>*/