import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Clock from 'react-live-clock';

const useStyles = makeStyles({

});

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
        <div>
        <Card style={{diplay: 'block', boxShadow: 'none', backgroundColor: 'hsla(0,0,0,0.5)', color: '#13154e'}}>
           
            <h4 style={{display: 'inline-block', float: 'left'}}>Hello, USER</h4>
            <Grid style= {{float: 'right', marginRight: 2+'%'}}>
                <Typography style={{diplay: 'inline', width: 'fit-content'}}> {getDate()}&nbsp;
                <Clock style={{diplay: 'inline-block' }} format = 'HH:mm:ss' ticking = {true}></Clock>
                </Typography>
            </Grid>
        </Card>
        <hr />
        </div>
    );

}