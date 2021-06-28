import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Grid, CardContent } from '@material-ui/core';
import { Assignment, Build } from '@material-ui/icons';

const useStyles = makeStyles({});

export default function Overview(){


    return(
        <Card style= {{position: 'relative', width: 40+'%'}}>
            <Grid style={{display: 'inline-block', width: 50+'%', height: 100+'%', borderRight: '1px solid black',margin: 5+'%'}}>
                <Grid style={{padding: 5+'%'}}>
                    <Grid><Assignment></Assignment><h5 style={{display: 'inline-block'}}>Order</h5></Grid>
                    <CardContent style = {{textAlign: 'center'}}>
                        <p style= {{display: 'inline-block', width: 40+'%'}}><h6>Number</h6>7415</p>
                        <p style= {{display: 'inline-block', width: 40+'%'}}><h6>Part</h6>5/2</p>
                    </CardContent>
                </Grid>
                <Grid style={{padding: 5+'%'}}>
                    <Grid><Build></Build><h5 style={{display: 'inline-block'}}>Parts</h5></Grid>
                    <CardContent style = {{textAlign: 'center'}}>
                        <p style= {{display: 'inline-block', width: 40+'%'}}><h6>Number</h6>7415</p>
                        <p style= {{display: 'inline-block', width: 40+'%'}}><h6>Part</h6>5/2</p>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid  style={{display: 'inline-block', position: 'absolute', height: 100+'%', width: 50+'%', padding: 10+'%'}}>
                <h4>Progress</h4>
            </Grid>
        </Card>
    ); 
}