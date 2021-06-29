import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent ,Grid } from '@material-ui/core';
import { Build } from '@material-ui/icons';


const useStyles = makeStyles({
    card: {
        width: 30 + '%',
        display: 'inline-block',
        marginRight: 2+'%',
        textAlign: 'center',
    }
});



export default function ProcessLog(){

    const classes = useStyles();


    return(
        <Grid >
            <h5><Build></Build>Process Log</h5>
            <Card className = {classes.card}>
                <CardHeader title= 'Workstation1' />
                <CardContent>
                     <p>
                        Process related information
                    </p>
                </CardContent>
            </Card>
            <Card className = {classes.card}>
                <CardHeader title= 'Workstation 2' />
                <CardContent>
                    <p>
                        Process related information
                    </p>
                </CardContent>
            </Card>
            <Card className = {classes.card}>
                <CardHeader title= 'Workstation 3' />
                <CardContent>
                    <p>
                        Process related information
                    </p>
                </CardContent>
            </Card>
        </Grid>
    );
}