import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import { Assignment, Build } from '@material-ui/icons';
import CircularStatic from './progressCircle';

const useStyles = makeStyles({});

export default function Overview(){


    return(
        <Card>
            <Grid style={{ display: 'inline-block', width: 45 +'%', borderRight: '1px solid black',margin: 5+'%', height: '20h'}}>
                <Grid style={{}}>
                    <Grid><Assignment></Assignment><h5 style={{display: 'inline-block'}}>Order</h5></Grid>
                    <CardContent style = {{textAlign: 'center'}}>
                        <Grid style= {{display: 'inline-block', width: 40+'%'}}><h6>Number</h6>7415</Grid>
                        <Grid style= {{display: 'inline-block', width: 40+'%'}}><h6>Part</h6>5/2</Grid>
                    </CardContent>
                </Grid>
                <Grid style={{}}>
                    <Grid><Build></Build><h5 style={{display: 'inline-block'}}>Parts</h5></Grid>
                    <CardContent style = {{textAlign: 'center'}}>
                        <Grid style= {{display: 'inline-block', width: 40+'%'}}><h6>Number</h6>7415</Grid>
                        <Grid style= {{display: 'inline-block', width: 40+'%'}}><h6>Part</h6>5/2</Grid>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid  style={{display: 'inline-block', width: 40+'%', marginLeft: '-' + 3+'%', textAlign: 'center', justifyContent: 'center'}}>
                
                <CardContent style={{padding: 10+'%'}}>
                    <Grid><Build style={{display: 'inline-block'}}></Build><h5 variant = 'h5' style={{display: 'inline-block'}}>Progress</h5></Grid>
                        <CircularStatic style={{width: 100+'%', height: 200}}></CircularStatic>
                        <Typography>
                            <p>Process Review</p>
                            <h6>Inserting Spool</h6>
                        </Typography>
                    </CardContent>
    
            </Grid>
        </Card>
    ); 
}