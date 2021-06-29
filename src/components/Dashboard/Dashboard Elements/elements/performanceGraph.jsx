import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import {Line} from 'react-chartjs-2';

const useStyles = makeStyles({

});

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0)",
      borderColor: "rgba(0,0,0,1)",
    },
  ]
};

export default function PerformanceGraph(){

    const classes = useStyles();

    return(
        <div>
            <Line style={{display: 'inline-block'}}data = {data}/>
        </div>
    );

}