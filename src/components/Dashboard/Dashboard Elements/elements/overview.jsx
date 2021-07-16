import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Grid, CardContent, Typography, Box, LinearProgress } from '@material-ui/core';
import { ShoppingBasket, Delete, Build, Done } from '@material-ui/icons';
import { blue, red, orange, green } from '@material-ui/core/colors';
import LinearWithValueLable from './linearProgress';
import PropTypes from 'prop-types';
import usePartsAndOrder from './partsAndOrderHook';
import { useState, useEffect } from 'react';
import db from '../../../../firebase';
import useStatusChange from './statuschange';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')

const jwt = require('jsonwebtoken');

//const useStyles = makeStyles({});

/*db.collection('Order').doc('Status').get().then((doc)=> {
   
        console.log(doc.data());
})

db.collection('Order').doc('Status').get().then((doc) => {
    totalManufactured = doc.get('Total Manufactured');
    totalDefective = doc.get('Total Defective');
    
    let orderReceived =true
    console.log(doc.get('Received'));
    if (orderReceived){
        db.collection('OrderTest').doc('CurrentOrder').onSnapshot((doc) => {
            orderProcess = doc.get('Process');
            if( orderProcess !== 'Waiting...'){
                    
            }
        })
    }
})

*/

const useStyles = makeStyles({
    card: {
        display: 'flex',
        justifyContent: 'center',
        height: 8 + 'vh',
        float: 'right',
        width: 4 + 'vw',
        borderTopLeftRadius: 100 + '%',
        borderBottomLeftRadius: 100 + '%',
        borderBottomRightRadius: 100 + '%',
    },
    shadow: {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }
});

function LinearProgressWithLabel(props) {
    return (
        <Box display="block">

            <Box>
                <Typography>{`${parseFloat(props)
                    > 100 ? 100 : props}%`}</Typography>
            </Box>
            <Box width="100%">
                <LinearProgress variant="determinate" value={props > 100 ? 100 : props} style={{ color: 'red' }} />
            </Box>
        </Box>
    );
}



export default function Overview() {

    const classes = useStyles();
    let partType = 'NA'
    const { manufactured, defective, process, orderType } = usePartsAndOrder();
    
    const [orderData, setOrderData] = useState(0);


    useEffect(() => {
        db.collection('OrderTest').doc('CurrentOrder').onSnapshot((snap) => {
            setOrderData(snap.data());
        })


    }, [])

    const [ws1, setws1] = useState(0);
    const [ws2, setws2] = useState(0);
    const [ws3, setws3] = useState(0);

    const [totalProgress, setTotalProgress] = useState(0)

    useEffect(() => {
        db.collection('ProgressStatus').doc('Overall').onSnapshot((snap) => {
            setTotalProgress(snap.data().Progress);
        })
    })
   /* useEffect(() => {
        
        if(ws1 == 0 && ws2 ==0 && ws3 == 0){
            setTotalProgress(0);
        }

        if (orderData.Machine == 0) {
            setws1(1)
        }
        if (orderData.Machine == 0 && ws1 == 1) {
            if (orderData.Process == 'Machine 1 Stopped')
                setTotalProgress(35);

            setTotalProgress(totalProgress + 2);
        }

        if (orderData.Machine == 1) {
            setws2(1);
        }

        if (orderData.Machine == 1 && ws2 == 1) {
            if (orderData.Process == 'Machine 2 Stopped')
                setTotalProgress(60);

            setTotalProgress(totalProgress + 2);
        }

        if (orderData.Machine == 2) {
            setws3(1)
        }

        if (orderData.Machine == 2 && ws3 == 1) {
            if (orderData.Process == 'Machine 3 Stopped')
                setTotalProgress(100);

            console.log(totalProgress);
            setTotalProgress(totalProgress + 1);
        }

        if(totalProgress >= 100 && ws1 == 1 && ws2 == 1 && ws3 == 1){
            setTotalProgress(0);
        }
    }, [orderData])
*/
    return (
        <Grid style={{ marginBottom: 2+'%', display: 'flex', justifyContent: 'space-between', width: 100+'%'}}>
            <Card className={classes.shadow} style={{ width: 25 + '%', display: 'inline-block'}}>
                <Grid className={classes.card} style={{ backgroundColor: green[500] }}><Done fontSize='large' style={{ marginTop: 25 + '%', color: 'white' }}></Done></Grid>
                <CardContent style={{ marginLeft: 5 + '%', marginTop: 2 + '%', paddingBottom: 1 + '%' }}>
                    <Typography>
                        <LinearWithValueLable progress={totalProgress}></LinearWithValueLable>
                        <p>{process}</p>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.shadow} style={{ width: 23 + '%', display: 'inline-block',}}>
                <Grid className={classes.card} style={{ backgroundColor: blue[500] }}><ShoppingBasket fontSize='large' style={{ marginTop: 25 + '%', color: 'white' }}></ShoppingBasket></Grid>
                <CardContent style={{ marginLeft: 5 + '%', marginTop: 2 + '%', paddingBottom: 1 + '%' }}>
                    <Typography>
                        <Typography><h4 style={{ marginBottom: 0 }}>{manufactured}</h4></Typography>
                        <p>Total Maufactured</p>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.shadow} style={{ width: 23 + '%', display: 'inline-block',}}>
                <Grid className={classes.card} style={{ backgroundColor: red[500] }}><Delete fontSize='large' style={{ marginTop: 25 + '%', color: 'white' }}></Delete></Grid>
                <CardContent style={{ marginLeft: 5 + '%', marginTop: 2 + '%', paddingBottom: 1 + '%' }}>
                    <Typography>
                        <Typography><h4 style={{ marginBottom: 0 }}>{defective}</h4></Typography>
                        <p>Defective</p>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.shadow} style={{ width: 23 + '%', display: 'inline-block',}}>
                <Grid className={classes.card} style={{ backgroundColor: orange[500] }}><Build fontSize='large' style={{ marginTop: 25 + '%', color: 'white' }}></Build></Grid>
                <CardContent style={{ marginLeft: 5 + '%', marginTop: 2 + '%', paddingBottom: 1 + '%' }}>
                    <Typography>
                        <Typography><h4 style={{ marginBottom: 0 }}>{orderType}</h4></Typography>
                        <p>Part Maufactured</p>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

Overview.propTypes = {
    token: PropTypes.func
}
/*         <Card style={{display: 'inline-block', width: 50+'%', textAlign: 'center', justifyContent: 'center'}}>

                <CardContent style={{padding: 10+'%'}}>
                    <Grid><ShowChart style={{display: 'inline-block', marginRight: 5+'%'}}></ShowChart><h4 style={{display: 'inline-block'}}>Total Progress</h4></Grid>
                        <CircularStatic style={{width: 100+'%', height: 200}}></CircularStatic>
                        <Typography style={{color: 'hsl(44, 83%, 60%)'}}>
                            <p >Process Review</p>
                            <h5 style={{fontWeight: 900}}>Inserting Spool</h5>
                        </Typography>
                    </CardContent>

            </Card>
*/