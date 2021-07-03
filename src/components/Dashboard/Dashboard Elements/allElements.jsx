import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {  Grid, CardContent} from '@material-ui/core';
import UserDetails from './elements/userDetails';
import Overview from './elements/overview';
import PerformanceGraph from './elements/performanceGraph';
import Workstations from './elements/workstations';


const useStyles = makeStyles((theme) => ({
    performanceGraph: {
        display: 'block',
        width: 100+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%'
        }
    },
    overView: {
        display: 'inline-block',
        width:100+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%'
        }
    },
    ProcessLog: {
        display: 'inline-block',
        float: 'left',
        width: 100+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%'
        }
    },
    OrderHistory: {
        display: 'inline-block',
        float: 'right',
        width: 40+'%',
        marginBottom: 2+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%',
            marginBottom: 2+'%'
        }
    },
    cardIcon: {
        display: 'flex', 
        justifyContent: 'center',
        height: 8+'vh',
        float: 'right', 
        width: 4+'vw', 
        borderTopLeftRadius: 100+'%',
        borderBottomLeftRadius: 100+'%',
        borderBottomRightRadius: 100+'%'
    }
}));

export default function AllDashboardElements(){
    
    const theme = useTheme();
    const classes = useStyles();

    return(
        <Grid>
                <Grid>
                    <UserDetails></UserDetails>
                    <hr />
                </Grid>
                
                    <Grid id = 'Overview' className = {classes.overView} style= {{padding: 2+'%'}}>
                        <Overview></Overview>
                    </Grid>
                    <Grid>
                        <Grid   id = 'PerformanceGraph' className = {classes.performanceGraph} style= {{ height:100+'%', width: 100+'%' }}>
                        <Grid>
                            <CardContent style={{}}>
                                <Grid>
                                    <PerformanceGraph style={{ }}></PerformanceGraph>
                                </Grid>
                            </CardContent>
                        </Grid>
                        </Grid>
                    </Grid>
                
                <Grid  id = 'Workstations' style={{display: 'inline-block', width: 100+'%'}}>
                    <Workstations></Workstations>
                </Grid>
        </Grid>
    );


}