import React from 'react';
//import { makeStyles } from '@material-ui/styles';
import { Grid} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Clock from 'react-live-clock';

//const useStyles = makeStyles({});

const getDate = () => {
    var today = new Date();
    var dayName = getDayName(today.getDay());

    return (dayName + ',' +today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear())
}

function getDayName(number){
    switch(number){
        case 0 : return ('Monday');
        case 1: return ('Tuesday');
        case 2: return ('Wednesday');
        case 3: return ('Thrusday');
        case 4: return('Friday');
        case 5: return('Saturday');
        case 6: return('Sunday');
        default: return 'not a number';
    }
}
export default function UserDetails(){

    return(
        <Grid style={{color: '#13154e',width: 100+'%', height: 5+'vh'}}>
            <Grid style={{float: 'left'}}>
                <h4>Hello, USER</h4>
            </Grid>
            <Grid style= {{float: 'right'}}>
                <Typography > 
                {getDate()} &nbsp;
                <Clock format = 'HH:mm:ss' ticking = {true}></Clock>
                </Typography>
            </Grid>
        </Grid>
    );

}