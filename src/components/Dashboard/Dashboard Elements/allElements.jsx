import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Grid, Typography} from '@material-ui/core';
import UserDetails from './elements/userDetails';
import Overview from './elements/overview';
import PerformanceGraph from './elements/performanceGraph';
import { Build } from '@material-ui/icons';
import Workstations from './elements/workstations';
import ProcessLog from './elements/processLog';
import OrderHistory from './elements/orderHistory';

const useStyles = makeStyles({
    performanceGraph: {
        display: 'inline-block',
        width: 50+'%'
    },
    overView: {
        display: 'inline-block',
        width:50+'%'
    }
});

export default function AllDashboardElements(){

    const classes = useStyles();

    return(
        <Grid>
                <Grid>
                    <UserDetails></UserDetails>
                </Grid>
                <Grid>
                    <Grid className = {classes.overView} style= {{padding: 2+'%', height: 20+'vh'}}>
                        <Typography><Build></Build><h5 style= {{display: 'inline-block'}}>Overview</h5></Typography>
                        <Overview></Overview>
                    </Grid>
                    <Grid className = {classes.performanceGraph} style= {{padding: 2+'%',}}>
                        <Typography><Build></Build><h5 style= {{display: 'inline-block'}}>Workstation 1 Analytics</h5></Typography>
                        <Card style= {{padding: 5+'%'}}>
                            <PerformanceGraph></PerformanceGraph>
                        </Card>
                    </Grid>
                </Grid>
                <Grid style={{textAlign: 'center'}}>
                    <Typography><Build></Build><h5 style= {{display: 'inline-block'}}>Workstations</h5></Typography>
                    <Workstations></Workstations>
                </Grid>
                <Grid>
                    <Card style= {{height: 40+'vh',display: 'inline-block', width: 50+'%',boxShadow: 'none'}}>
                        <ProcessLog></ProcessLog>
                    </Card>
                    <Card style ={{display: 'inline-block', width: 50+'%',padding: 5+'%'}}>
                        <OrderHistory style={{width: '80vh',position: 'absolute',top: 10+'%',padding: 5+'%'}}></OrderHistory>
                    </Card>
                </Grid>
        </Grid>
    );


}