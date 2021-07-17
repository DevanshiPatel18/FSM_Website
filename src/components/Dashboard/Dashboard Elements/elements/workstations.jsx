import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, Typography } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import useWorkstationData from './wprkstationHook';
import PropTypes from 'prop-types';
import LinearWithValueLabel from './linearProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import useStatusChange from './statuschange';
import db from '../../../../firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { CardContent } from '@material-ui/core';
import { BusinessCenterTwoTone } from '@material-ui/icons';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')
require('bootstrap-directional-buttons')
const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Baloo Da 2, cursive",
    },
    card: {
        display: 'inline-block',
        [theme.breakpoints.up('md')]: {
            width: 32 + '%',
            zIndex: 1
        },
        '&:hover': {
            transition: 'height 2s',
            animation: '',
            zIndex: 3,

        }
    },
    [theme.breakpoints.down('sm')]: {
        card: {
            padding: 0.11 + '%',
        },
        statusCards: {
            border: 'none'
        },
        cardHeader: {
            display: 'inline-block',
            width: 50 + '%',
            float: 'left',
        },
        cardContent: {

            display: 'inline: block',
            width: 100 + '%',
            float: 'right',
            padding: 2 + '%'

        }

    },  
}

));




function LinearProgressWithLabel(value) {
    return (
        <Box display="block">

            <Box>
                <Typography>{`${Math.round(
                    value,
                ) > 100 ? 100 : Math.round(value)}%`}</Typography>
            </Box>
            <Box width="100%">
                <LinearProgress variant="determinate" value={value > 100 ? 100 : value} style={{ color: 'red' }} />
            </Box>
        </Box>
    );
}



export default function Workstations(props) {

    const classes = useStyles();
    //const theme = useTheme();
    const { workstation1, workstation2, workstation3 } = useWorkstationData();

    let [orderData, setOrderData] = useState({});

    React.useEffect(() => {
        db.collection('OrderTest').doc('CurrentOrder').onSnapshot((snapshot) => {
            setOrderData(snapshot.data());
        })
    }, [])

    const [WS1StatusPer, setWS1StatusPer] = useState(0);
    const [WS2StatusPer, setWS2StatusPer] = useState(0);
    const [WS3StatusPer, setWS3StatusPer] = useState(0);
    
    useEffect(() => {
        db.collection('ProgressStatus').doc('WS1').onSnapshot((snap) => {
            setWS1StatusPer(snap.data().Progress);
        })
    },[])
    useEffect(() => {
        db.collection('ProgressStatus').doc('WS2').onSnapshot((snap) => {
            setWS2StatusPer(snap.data().Progress);
        })
    },[])

    useEffect(() => {
        db.collection('ProgressStatus').doc('WS3').onSnapshot((snap) => {
            setWS3StatusPer(snap.data().Progress);
        })
    },[])

    
    const [startWS1, setStartWS1] = useState(0)
    const [startWS2, setStartWS2] = useState(0)
    const [startWS3, setStartWS3] = useState(0)

/*
    //useEffect(() => {

        

        //if (orderData.Process == "Order Status: Processing") {
          //  setStartWS1(1)
           // setWS1StatusPer(WS1StatusPer + 3)
        //}

        //if (orderData.Machine == "0" && startWS1 == 1 && orderData.Process != "Machine 2 Started") {
          //  if (orderData.Process == "Machine 1 Stopped") {
            //    setWS1StatusPer(WS1StatusPer + 7)
            //}
            //else {
             //   setWS1StatusPer(WS1StatusPer + 3)
            //}
        //}

        //if (orderData.Process == "Machine 2 Started") {
          //  setStartWS2(1)
        //}

        //if (orderData.Machine == "1" && startWS2 == 1 && orderData.Process != "Machine 3 Started") {
          //  if (orderData.Process == "Machine 2 Stopped") {
            //    setWS2StatusPer(WS2StatusPer + 10)
            //}
            //else {
              //  setWS2StatusPer(WS2StatusPer + 5)
            //}
        //}

        //if (orderData.Process == "Machine 3 Started") {
          //  setStartWS3(1)
        //}

        //if (orderData.Machine == "2" && startWS3 == 1 && orderData.Process != "Machine 3 Started") {
          //  if (orderData.Process == "Machine 3 Stopped") {
           //     setWS3StatusPer(WS3StatusPer + 20)
           // }
            //else {
             //   setWS3StatusPer(WS3StatusPer + 4)
            //}
        //}

        //if (props.WS3StatusPer >= 100 && props.WS2StatusPer >= 100 && props.WS1StatusPer >= 100 && startWS1 == 1 && startWS2 == 1 && startWS3 == 1) {
          //  setWS1StatusPer(0);
           // setWS2StatusPer(0);
            //setWS3StatusPer(0);
        //}
   // }, [orderData])
*/


    function setColor(parameter) {
        if (!parameter || parameter === 'false')
            return red[500];
        else
            return green[500];
    }

    const WorkStationData = [
        {
            name: 'Workstation 1',
            title: 'Raw Part Storage Loading & QC ',
            powerColor: setColor(workstation1.power),
            pnumaticColor: setColor(workstation1.pnumatic),
            currentProcess: workstation1.process,
            user: workstation1.user,
            inventory: workstation1.inventory,
            part: workstation1.part,
            power: workstation1.power,
            pneumatic: workstation1.pneumatic,
            pressure: workstation1.pressure,
            statusPer: WS1StatusPer,
            style : 1 + '%',
        }, {
            name: 'Workstation 2',
            title: 'Axissymetric Part Storage QC & Inspection',
            currentProcess: workstation2.process,
            powerColor: setColor(workstation1.power),
            pnumaticColor: setColor(workstation1.pnumatic),
            user: workstation2.user,
            inventory: workstation2.inventory,
            part: workstation2.part,
            power: workstation2.power,
            pneumatic: workstation2.pneumatic,
            pressure: workstation2.pressure,
            statusPer: WS2StatusPer
        }, {
            name: 'Workstation 3',
            title: 'Prismatic Part Assembly and Screwing',
            powerColor: setColor(workstation1.power),
            pnumaticColor: setColor(workstation1.pnumatic),
            currentProcess: workstation3.process,
            user: workstation3.user,
            inventory: workstation3.inventory,
            part: workstation3.part,
            power: workstation3.power,
            pneumatic: workstation3.pneumatic,
            pressure: workstation3.pressure,
            statusPer: WS3StatusPer
        }
    ]
    
    return (
        <Grid className={classes.root} style={{display: 'flex', justifyContent: 'space-between'}}>

            {WorkStationData.map((workstation) => (
                
                <Card className={classes.card} style={{ width: 32 + '%',display:'flex',flexDirection: 'column',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <CardHeader style={{ paddingRight: 0 }}
                        title={
                            <div style={{ marginRight: 0 , display: 'flex', flexDirection: 'column', height: 50+'%', marginBottom: workstation.style}}>
                                <Grid >

                                 <h4 className={classes.root} style={{fontWeight: 575, display: 'inline-block', width: 55+'%'}}>{workstation.title}</h4>

                                <Grid style={{ disply: 'inline-block', float: 'right', width: 45 + '%',margin: 'auto', padding : 2 + "%" , marginTop: '-' + 3 + '%' }}>
                                  
                                        <button type= "button" className = 'btn  btn-arrow-left' style={{ color :'white', width: 100+'%', marginBottom : 2+'%',backgroundColor: workstation.powerColor }}>Power</button>
                                        <button  type= "button" className = 'btn  btn-arrow-left' style={{ color: 'white',backgroundColor: workstation.pnumaticColor, width: 100+'%', marginRight : 10+'%', paddingleft : '-' + 2 + '%'}}>Pneumatic</button>
                                   
                                </Grid>
                                </Grid>
                                {workstation.title === 'Raw Part Storage Loading & QC ' ? <Grid style={{paddingBottom : 2+'%'}}><br /></Grid> : ""}
                                {workstation.title === 'Prismatic Part Assembly and Screwing' ? <Grid style={{paddingBottom : 2+'%'}}><br /></Grid> : ""}
                                
                                  
                                <hr style={{width :100+'%'}}/>
                            </div>
                        }
                    />
                   <CardContent>
                    <Grid className={classes.cardContent} style={{display: 'flex',justifyContent: 'space-between', textAlign: 'center', marginTop: workstation.style }}>
                        <Grid className={classes.statusCards} style={{ width: 30 + '%' }} >
                            <h6 style={{ color: 'hsl(238, 61%, 19%)', fontWeight: 900 }}>User</h6>
                            <h6 style={{ color: 'hsl(212, 21%, 53%)', fontWeight: 800 }}>{workstation.user}</h6>
                        </Grid>
                        <Grid className={classes.statusCards} style={{  width: 30 + '%' }} >
                            <h6 style={{ color: 'hsl(238, 61%, 19%)', fontWeight: 900 }}>Inventory</h6>
                            <h6 style={{ color: 'hsl(212, 21%, 53%)', fontWeight: 800 }}>{workstation.inventory}</h6>
                        </Grid>
                        <Grid className={classes.statusCards} style={{ width: 30 + '%' }}>
                            <h6 style={{ color: 'hsl(238, 61%, 19%)', fontWeight: 900 }}>Pressure</h6>
                            <h6 style={{ color: 'hsl(212, 21%, 53%)', fontWeight: 800 }}>{workstation.pressure}</h6>
                        </Grid>
                    </Grid>

                    <Grid style={{ padding: 5 + '%' }}>
                        <div style={{ textAlign: 'center' }}>
                            <Box display="block">

                                <Box>
                                    <Typography>{`${Math.round(
                                        workstation.statusPer,
                                    ) > 100 ? 100 : Math.round(workstation.statusPer)}%`}</Typography>
                                </Box>
                                <Box width="100%">
                                    <LinearProgress variant="determinate" value={workstation.statusPer > 100 ? 100 : workstation.statusPer} style={{ color: 'red' }} />
                                </Box>
                            </Box>
                            <Typography>
                                <h6>Progress</h6>
                                <h5 style={{ fontWeight: 900 }}>{workstation.currentProcess}</h5>
                            </Typography>
                        </div>

                    </Grid>
                    </CardContent>
                </Card>
                
            ))}

        </Grid>
    );

}

/*


                        subheader={
                            <div>
                                <h6 className={classes.root} style={{ fontSize: 10, color: 'hsl(213, 21%, 53%)', fontWeight: 500 }}>{workstation.title}</h6>
                                <hr />
                            </div>
                        }

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