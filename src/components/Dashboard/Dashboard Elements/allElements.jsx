import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, Grid, Typography} from '@material-ui/core';
import UserDetails from './elements/userDetails';
import Overview from './elements/overview';
import PerformanceGraph from './elements/performanceGraph';
import { Build, Assignment, Home, ShowChart, LocalShipping } from '@material-ui/icons';
import Workstations from './elements/workstations';
import ProcessLog from './elements/processLog';
import OrderHistory from './elements/orderHistory';


const useStyles = makeStyles((theme) => ({
    performanceGraph: {
        display: 'inline-block',
        width: 50+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%'
        }
    },
    overView: {
        display: 'inline-block',
        width:50+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%'
        }
    },
    ProcessLog: {
        display: 'inline-block',
        float: 'left',
        width: 50+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%'
        }
    },
    OrderHistory: {
        display: 'inline-block',
        float: 'right',
        width: 50+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%'
        }
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
                <Grid>
                    <Grid id = 'Overview' className = {classes.overView} style= {{padding: 2+'%', float: 'left'}}>
                        <Typography><Home fontSize = 'large' style={{ verticalAlign: 'top'}}></Home><h3 style= {{display: 'inline-block',}}>Overview</h3></Typography>
                        <Overview></Overview>
                    </Grid>
                    <Grid   id = 'PerformanceGraph' className = {classes.performanceGraph} style= {{padding: 2+'%', float: 'right', height:100+'%' }}>
                        <Typography><ShowChart fontSize = 'large' style={{ verticalAlign: 'top'}}></ShowChart><h3 style= {{display: 'inline-block'}}>Workstation 1 Analytics</h3></Typography>
                        <Card style={{padding: 2+'%'}}>
                            <PerformanceGraph></PerformanceGraph>
                        </Card>
                    </Grid>
                </Grid>
                <Grid  id = 'Workstations' style={{textAlign: 'center',display: 'inline-block', width: 100+'%'}}>
                    <Typography><Build fontSize = 'large' style={{ verticalAlign: 'top'}}></Build><h3 style= {{display: 'inline-block'}}>Workstations</h3></Typography>
                    <Workstations></Workstations>
                </Grid>
                <Grid id = 'ProcessLogAndOrderHistory' style= {{height: 40+'vh', marginTop: 2+'%'}}>
                    <Grid className= {classes.ProcessLog}>
                        <Typography><Assignment fontSize = 'large' style={{ verticalAlign: 'top'}}></Assignment ><h3 style= {{display: 'inline-block'}}>Process Log</h3></Typography>
                        <ProcessLog></ProcessLog>
                    </Grid>
                    <Grid className = {classes.OrderHistory}>
                        <Typography ><LocalShipping fontSize = 'large' style={{ verticalAlign: 'top'}}></LocalShipping><h3 style= {{display: 'inline-block'}}>Order History</h3></Typography>
                        <OrderHistory style={{position: 'absolute',top: 10+'%',}}></OrderHistory>
                    </Grid>
                </Grid>
        </Grid>
    );


}