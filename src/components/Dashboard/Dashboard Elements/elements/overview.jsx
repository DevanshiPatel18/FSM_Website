import React from 'react';
//import { makeStyles } from '@material-ui/styles';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import { Assignment, Build, ShowChart } from '@material-ui/icons';
import CircularStatic from './progressCircle';

//const useStyles = makeStyles({});

export default function Overview(){

    //const classes = useStyles();

    return(
        <Card>
            <Grid style={{ display: 'inline-block', width: 45 +'%', borderRight: '1px solid black',margin: 5+'%', height: '20h'}}>
                <Grid style={{}}>
                    <Grid><Assignment style={{marginRight: 2+'%'}}></Assignment><h4 style={{display: 'inline-block'}}>Order</h4></Grid>
                    <CardContent style = {{textAlign: 'center'}}>
                        <Grid style= {{display: 'inline-block', width: 40+'%',}}><h6>Number</h6><h4 style={{color: 'red',fontWeight: 900}}> 7415</h4></Grid>
                        <Grid style= {{display: 'inline-block', width: 40+'%'}}><h6>Part</h6><h4 style={{color: 'red',fontWeight: 900}}>5/2</h4></Grid>
                    </CardContent>
                </Grid>
                <Grid style={{}}>
                    <Grid><Build style={{marginRight: 2+'%'}}></Build><h4 style={{display: 'inline-block'}}>Parts</h4></Grid>
                    <CardContent style = {{textAlign: 'center'}}>
                        <Grid style= {{display: 'inline-block', width: 40+'%'}}><h6>Total</h6><h4 style={{color: 'red',fontWeight: 900}}> 7415</h4></Grid>
                        <Grid style= {{display: 'inline-block', width: 40+'%'}}><h6>Defective</h6><h4 style={{color: 'red',fontWeight: 900}}> 100</h4></Grid>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid  style={{display: 'inline-block', width: 40+'%', marginLeft: '-' + 3+'%', textAlign: 'center', justifyContent: 'center'}}>
                
                <CardContent style={{padding: 10+'%'}}>
                    <Grid><ShowChart style={{display: 'inline-block', marginRight: 5+'%'}}></ShowChart><h4 style={{display: 'inline-block'}}>Total Progress</h4></Grid>
                        <CircularStatic style={{width: 100+'%', height: 200}}></CircularStatic>
                        <Typography style={{color: 'hsl(44, 83%, 60%)'}}>
                            <p >Process Review</p>
                            <h5 style={{fontWeight: 900}}>Inserting Spool</h5>
                        </Typography>
                    </CardContent>
    
            </Grid>
        </Card>
    ); 
}