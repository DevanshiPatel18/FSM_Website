import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {  Grid, CardContent} from '@material-ui/core';
import UserDetails from './elements/userDetails';
import Overview from './elements/overview';
import PerformanceGraph from './elements/performanceGraph';
import Workstations from './elements/workstations';
import PropTypes from 'prop-types';
import ProcessLog from './elements/processLog';

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
AllDashboardElements.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
    token: PropTypes.string
  };

export default function AllDashboardElements(props){
    
    const theme = useTheme();
    const classes = useStyles();
    
    console.log(props.token)
    return(
        <Grid>
                <Grid>
                    <UserDetails token = {props.token}></UserDetails>
                    <hr />
                </Grid>

                <Grid style={{ width: 100+'%'}}>
                    <Overview token = {props.token}></Overview>
                </Grid>

                <Grid style={{ width: 100+'%', margin: 'auto'}}>
                       <Grid style={{display: 'flex', justifyContent: 'space-between', alignItems: 'stretch'}}>
                                <Grid style = {{width: 25+'%', height: 'inherit'}}>
                                    <ProcessLog></ProcessLog>
                                </Grid>
                                <Grid style={{width: 73+'%'}}>
                                    <Grid style={{}}>
                                        <Grid style={{ width: 100+'%', height: 60+'vh'}}>
                                            <PerformanceGraph style={{ }}></PerformanceGraph>
                                        </Grid>
                                        <Grid  id = 'Workstations' style={{ width: 100+'%', marginTop: 1+'%'}}>
                                            <Workstations
                                            
                                            ></Workstations>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                        </Grid>
                        
                    </Grid>
        </Grid>
    );


}
