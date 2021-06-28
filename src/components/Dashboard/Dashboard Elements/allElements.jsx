import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import UserDetails from './elements/userDetails';
import Overview from './elements/overview';


const useStyles = makeStyles({

});

export default function AllDashboardElements(){

    return(
        <Grid>
            <UserDetails></UserDetails>
            <Overview></Overview>
        </Grid>
    );


}