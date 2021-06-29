import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Paper } from '@material-ui/core';
import CircularStatic from './progressCircle';

const useStyles = makeStyles((theme) => ({
 card: {
     width: 100+'%',
     display: 'inline-block',
     height: 40+'vh',
     margin: 0.5+'%',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        width: 32+'%',
        height: 60+'vh'
    },
    },
    statusCards: {
        marginTop: 2+'%',
        width: 33+'%',
        display: 'inline-block',
        boxShadow: 'none',
        border: '1px solid black'

    }

 }));


export default function Workstations(){

    const classes = useStyles();
    const theme = useTheme();

    const WorkStationData = [
        {
            name: 'Workstation 1',
            title: 'Raw Part Storage Loading and QC ',
            currentProcess: 'Scanning Faces',
            user: 'Devanshi',
            inventory: 'NA',
            part : '5/2',
            power: 'true',
            pneumatic: 'true',
            pressure: '50' 
        },{
            name: 'Workstation 2',
            title: 'Axissymetric Part Storage QC and Inspection Work',
            currentProcess: 'Scanning Faces',
            user: 'Devanshi',
            inventory: 'NA',
            part : '5/2',
            power: 'true',
            pneumatic: 'true',
            pressure: '50' 
        },{
            name: 'Workstation 3',
            title: 'Prismatic Part Assembly and Screwing',
            currentProcess: 'Scanning Faces',
            user: 'Devanshi',
            inventory: 'NA',
            part : '5/2',
            power: 'true',
            pneumatic: 'true',
            pressure: '50' 
        }
    ]

    return(
        <Grid>
            {WorkStationData.map((workstation) => (
                <Card className = {classes.card}>
                    <CardHeader 
                        title = {workstation.name}
                        subheader = {workstation.title}
                    />
                    <CardContent>
                        <CircularStatic></CircularStatic>
                        <Typography>
                            <p>Progress</p>
                            <h5>{workstation.currentProcess}</h5>
                        </Typography>
                        <Grid style={{width: 100+'%'}}>
                            <Paper className = {classes.statusCards} >
                                <h6>User</h6>
                                <h6>{workstation.user}</h6>
                            </Paper>
                            <Paper className = {classes.statusCards}>
                                <h6>Inventory</h6>
                                <h6>{workstation.inventory}</h6>
                            </Paper>
                            <Paper className = {classes.statusCards}>
                                <h6>Power</h6>
                                <h6>{workstation.power}</h6>
                            </Paper>
                            <Paper className = {classes.statusCards}>
                                <h6>Part</h6>
                                <h6>{workstation.part}</h6>
                            </Paper>
                            <Paper className = {classes.statusCards}>
                                <h6>Pnematic</h6>
                                <h6>{workstation.pneumatic}</h6>
                            </Paper>
                            <Paper className = {classes.statusCards}>
                                <h6>Pressure</h6>
                                <h6>{workstation.pressure}</h6>
                            </Paper>
                        </Grid>
                    </CardContent>
                </Card>
            ))}
        </Grid>
    );

}