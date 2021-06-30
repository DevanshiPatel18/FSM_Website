import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent ,Grid } from '@material-ui/core';


const useStyles = makeStyles( (theme) => ({
    card: {
        width: 30 + '%',
        display: 'inline-block',
        marginRight: 2+'%',
        textAlign: 'center',
        
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%',
            marginBottom: 2+'%'
        }
    
    },
}));



export default function ProcessLog(){

    const classes = useStyles();
    const theme = useTheme();

    return(
        <Grid >
            <Card className = {classes.card} >
                <CardHeader title= {
                            <h4 className = {classes.root} style={{color: 'hsl(44, 83%, 60%)', fontWeight: 500}}>Workstation 1</h4>
                         } />
                <CardContent>
                     <p style={{color: 'hsl(12, 92%, 46%)', fontWeight: 900}}>
                        Process related information
                    </p>
                </CardContent>
            </Card>
            <Card className = {classes.card}>
                <CardHeader title= {
                            <h4 className = {classes.root} style={{color: 'hsl(44, 83%, 60%)', fontWeight: 500}}>Workstation 1</h4>
                         }/>
                <CardContent>
                    <p style={{color: 'hsl(12, 92%, 46%)', fontWeight: 900}}>
                        Process related information
                    </p>
                </CardContent>
            </Card>
            <Card className = {classes.card}>
                <CardHeader title= {
                            <h4 className = {classes.root} style={{color: 'hsl(44, 83%, 60%)', fontWeight: 500}}>Workstation 1</h4>
                         } />
                <CardContent>
                    <p style={{color: 'hsl(12, 92%, 46%)', fontWeight: 900}}>
                        Process related information
                    </p>
                </CardContent>
            </Card>
        </Grid>
    );
}