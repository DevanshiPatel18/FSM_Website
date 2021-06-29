import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import { Build } from '@material-ui/icons';


const useStyles = makeStyles({

});


export default function OrderHistory(){

    const classes = useStyles();

    return(
        <Grid >
            <h5><Build></Build>Order History</h5>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Order #</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>TimeStamp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>74185</TableCell>
                        <TableCell>5/2</TableCell>
                        <TableCell>Wednesday, 12:14:55</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>74185</TableCell>
                        <TableCell>5/2</TableCell>
                        <TableCell>Wednesday, 12:14:55</TableCell>
                    </TableRow><TableRow>
                        <TableCell>74185</TableCell>
                        <TableCell>5/2</TableCell>
                        <TableCell>Wednesday, 12:14:55</TableCell>
                    </TableRow><TableRow>
                        <TableCell>74185</TableCell>
                        <TableCell>5/2</TableCell>
                        <TableCell>Wednesday, 12:14:55</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Grid>
    );
    
}