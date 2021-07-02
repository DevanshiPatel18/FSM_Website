import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, Typography, Paper } from '@material-ui/core';
import CircularStatic from './progressCircle';
import zIndex from '@material-ui/core/styles/zIndex';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Baloo Da 2, cursive",
    },
 card: {
     width: 100+'%',
     display: 'inline-block',
    textAlign: 'center',
    margin: 0.5+'%',
    [theme.breakpoints.up('md')]: {
        width: 32+'%',
        height: 60+'vh',
        zIndex: 1
    },
    '&:hover' :{
        height: 50+'%',
        transition: 'height 2s',
        animation: '',
        zIndex: 3,

    }
    },
    statusCards: {
        marginTop: 2+'%',
        width: 33+'%',
        display: 'inline-block',
        boxShadow: 'none',

    },
        [theme.breakpoints.down('sm')]: {
            card: {
                padding: 1+'%',
            },
            statusCards:{
                border: 'none'
            },
            cardHeader: {
            display: 'inline-block',
            width: 50+'%', 
            float: 'left',
            },
            cardContent: {
                
                    display: 'inline: block',
                    width: 50+'%',
                    float: 'right',
                    padding: 2+'%'
                
            }

        }
    }

 ));


export default function Workstations(){

    const classes = useStyles();
    const theme = useTheme();

    const WorkStationData = [
        {
            name: 'Workstation 1',
            title: 'Raw Part Storage Loading & QC ',
            currentProcess: 'Scanning Faces',
            user: 'Devanshi',
            inventory: 'NA',
            part : '5/2',
            power: 'true',
            pneumatic: 'true',
            pressure: '50' 
        },{
            name: 'Workstation 2',
            title: 'Axissymetric Part Storage QC & Inspection Work',
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
        <Grid className= {classes.root}>
            {WorkStationData.map((workstation) => (
                <Card className = {classes.card}>
                    <CardHeader 
                        title = {
                            <h3 className = {classes.root} style= {{color: 'hsl(238, 61%, 19%)', fontWeight: 900}}>{workstation.name}</h3>
                         }
                        subheader = {
                                <h6 className = {classes.root} style={{ color: 'hsl(213, 21%, 53%)', fontWeight: 500}}>{workstation.title}</h6>
                        }
                    />
                        <Grid className = {classes.cardHeader}>
                            <CircularStatic ></CircularStatic>
                            <Typography>
                                <h6>Progress</h6>
                                <h5 style={{fontWeight: 900}}>{workstation.currentProcess}</h5>
                            </Typography>
                        </Grid>
                        <Grid className={classes.cardContent}>
                            <Paper className = {classes.statusCards} >
                                <h6 style={{color: 'hsl(238, 61%, 19%)', fontWeight: 900}}>User</h6>
                                <h6 style={{color: 'hsl(212, 21%, 53%)', fontWeight: 800}}>{workstation.user}</h6>
                            </Paper>
                            <Paper className = {classes.statusCards}>
                                <h6 style={{color: 'hsl(238, 61%, 19%)', fontWeight: 900}}>Inventory</h6>
                                <h6 style={{color: 'hsl(212, 21%, 53%)', fontWeight: 800}}>{workstation.inventory}</h6>
                            </Paper>
                            <Paper className = {classes.statusCards}>
                                <h6 style={{color: 'hsl(238, 61%, 19%)', fontWeight: 900}}>Power</h6>
                                <h6 style={{color: 'hsl(212, 21%, 53%)', fontWeight: 800}}>{workstation.power}</h6>
                            </Paper>
                            <Paper className = {classes.statusCards}>
                                <h6 style={{color: 'hsl(238, 61%, 19%)', fontWeight: 900}}>Part</h6>
                                <h6 style={{color: 'hsl(212, 21%, 53%)', fontWeight: 800}}>{workstation.part}</h6>
                            </Paper>
                            <Paper className = {classes.statusCards}>
                                <h6 style={{color: 'hsl(238, 61%, 19%)', fontWeight: 900}}>Pnematic</h6>
                                <h6 style={{color: 'hsl(212, 21%, 53%)', fontWeight: 800}}>{workstation.pneumatic}</h6>
                            </Paper>
                            <Paper className = {classes.statusCards}>
                                <h6 style={{color: 'hsl(238, 61%, 19%)', fontWeight: 900}}>Pressure</h6>
                                <h6 style={{color: 'hsl(212, 21%, 53%)', fontWeight: 800}}>{workstation.pressure}</h6>
                            </Paper>
                        </Grid>
                </Card>
            ))}
        </Grid>
    );

}