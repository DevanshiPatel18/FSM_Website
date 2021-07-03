import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, Typography } from '@material-ui/core';
import { green} from '@material-ui/core/colors';
import LinearWithValueLabel from './linearProgress';
const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Baloo Da 2, cursive",
    },
 card: {
     display: 'inline-block',
    [theme.breakpoints.up('md')]: {
        width: 32+'%',
        zIndex: 1
    },
    '&:hover' :{
        transition: 'height 2s',
        animation: '',
        zIndex: 3,

    }
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
    //const theme = useTheme();

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
                <Card className = {classes.card} style={{width: 30+'%', marginRight: 1+'%', marginLeft: 2+'%',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <CardHeader style={{paddingRight: 0}}
                        title = {
                            <div style={{marginRight: 0}}>
                            
                            <Grid style={{disply: 'inline-block',float: 'right', width: 25+'%',marginTop: '-'+3 +'%'}}>
                            <Grid style={{display: 'inline-block',width: 100+'%'}}>
                                
                                <p style={{textAlign: 'center',color:'white',padding: 5+'%',marginBottom: 5+'%', borderTopLeftRadius: 100+'%', borderBottomLeftRadius: 100+'%', backgroundColor: green[400]}}>Power</p>
                            </Grid>
                            <Grid style={{display: 'inline-block', width: 100+'%'}}>
                                
                                <p style={{textAlign: 'center',color:'white',padding: 5+'%',marginBottom: 0,borderTopLeftRadius: 100+'%', borderBottomLeftRadius: 100+'%', backgroundColor: green[400]}}>Pneumatic</p>
                            </Grid>
                            
                            
                            </Grid>
                            
                            <h4 className = {classes.root}>{workstation.name}</h4>
                            </div>
                         }
                        subheader = {
                                <div>
                                <h6 className = {classes.root} style={{fontSize: 10, color: 'hsl(213, 21%, 53%)', fontWeight: 500}}>{workstation.title}</h6>
                                <hr/>
                                </div>
                            }
                    />
                        <Grid className={classes.cardContent} style={{textAlign: 'center'}}>
                            <Grid className = {classes.statusCards} style={{display: 'inline-block', width: 30+'%'}} >
                                <h6 style={{color: 'hsl(238, 61%, 19%)', fontWeight: 900}}>User</h6>
                                <h6 style={{color: 'hsl(212, 21%, 53%)', fontWeight: 800}}>{workstation.user}</h6>
                            </Grid>
                            <Grid className = {classes.statusCards} style={{display: 'inline-block', width: 30+'%'}} >
                                <h6 style={{color: 'hsl(238, 61%, 19%)', fontWeight: 900}}>Inventory</h6>
                                <h6 style={{color: 'hsl(212, 21%, 53%)', fontWeight: 800}}>{workstation.inventory}</h6>
                            </Grid>
                            <Grid className = {classes.statusCards} style={{display: 'inline-block', width: 30+'%'}}>
                                <h6 style={{color: 'hsl(238, 61%, 19%)', fontWeight: 900}}>Pressure</h6>
                                <h6 style={{color: 'hsl(212, 21%, 53%)', fontWeight: 800}}>{workstation.pressure}</h6>
                            </Grid>
                        </Grid>
                        
                        <Grid style= {{padding: 5+'%'}}>
                            <div style={{ textAlign: 'center'}}>
                        
                            <LinearWithValueLabel></LinearWithValueLabel>
                            <Typography>
                                <h6>Progress</h6>
                                <h5 style={{fontWeight: 900}}>{workstation.currentProcess}</h5>
                            </Typography>
                            </div>

                        </Grid>
                </Card>
            ))}

        </Grid>
    );

}
/*

{WorkStationData.map((workstation) => (
                <Card>
                    <CardHeader 
                        title = {
                            <h3 className = {classes.root}>{workstation.name}</h3>
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


            
                            <Grid style={{display: 'inline-block',padding: 0.25+'%', backgroundColor: green[500], borderRadius: 100+'%'}}>
                            <ShowChart style={{color: green[500], display: 'inline-block'}} ></ShowChart>
                            </Grid>
*/ 