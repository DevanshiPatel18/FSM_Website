import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import { Assignment,ShoppingBasket,Delete, Build,Done, ShowChart } from '@material-ui/icons';
import CircularStatic from './progressCircle';
import { blue, red, orange, green } from '@material-ui/core/colors';
import LinearWithValueLable from './linearProgress';

const useStyles = makeStyles({
    card: {
        display: 'flex', 
        justifyContent: 'center',
        height: 8+'vh',
        float: 'right', 
        width: 4+'vw', 
        borderTopLeftRadius: 100+'%',
        borderBottomLeftRadius: 100+'%',
        borderBottomRightRadius: 100+'%'
    },
    onHover: {
        
    }
});




export default function Overview(){

    const classes = useStyles();

    return(
        <Grid>
        
                <Card style={{width: 23+'%', display: 'inline-block', marginRight: 2+'%'}}>
                    <Grid className = {classes.card}  style={{backgroundColor: blue[500]}}><ShoppingBasket fontSize = 'large' style={{marginTop: 25+'%', color: 'white'}}></ShoppingBasket></Grid>
                    <CardContent style = {{marginLeft: 5+'%', marginTop:2+'%', paddingBottom: 1+'%'}}>
                        <Typography>
                            <Typography><h4 style={{marginBottom: 0}}>745896</h4></Typography>
                            <p>Total Maufactured</p>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{width: 23+'%', display: 'inline-block', marginRight: 2+'%'}}>
                    <Grid className = {classes.card} style={{backgroundColor: red[500]}}><Delete fontSize = 'large' style={{marginTop: 25+'%', color: 'white'}}></Delete></Grid>
                    <CardContent style = {{marginLeft: 5+'%', marginTop:2+'%', paddingBottom: 1+'%'}}>
                        <Typography>
                            <Typography><h4 style={{marginBottom: 0}}>458</h4></Typography>
                            <p>Defective</p>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{width: 23+'%', display: 'inline-block', marginRight: 2+'%'}}>
                    <Grid className = {classes.card} style={{backgroundColor: orange[500]}}><Build fontSize = 'large' style={{marginTop: 25+'%', color: 'white'}}></Build></Grid>
                    <CardContent style = {{marginLeft: 5+'%', marginTop:2+'%', paddingBottom: 1+'%'}}>
                        <Typography>
                            <Typography><h4 style={{marginBottom: 0}}>5/2</h4></Typography>
                            <p>Part Maufactured</p>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{width: 23+'%', display: 'inline-block', marginRight: 2+'%'}}>
                    <Grid className = {classes.card} style={{backgroundColor: green[500]}}><Done fontSize = 'large' style={{marginTop: 25+'%', color: 'white'}}></Done></Grid>
                    <CardContent style = {{marginLeft: 5+'%', marginTop:2+'%', paddingBottom: 1+'%'}}>
                        <Typography>
                            <LinearWithValueLable></LinearWithValueLable>
                            <p>Process Progress</p>
                        </Typography>
                    </CardContent>
                </Card>
                
        </Grid>
    ); 
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