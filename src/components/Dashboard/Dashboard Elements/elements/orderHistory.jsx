import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 5+'%',
        backgroundColor: 'black',
    },
    tableCell: {
        color: 'white',
        fontFamily: 'Baloo Da 2, cursive'
    },

    }    ));


export default function OrderHistory(){

    const classes = useStyles();
    const theme = useTheme();

    return(
        <Card className =  {classes.root} >
            <Table style={{color: 'white'}}>
                <TableHead>
                    <TableRow >
                        <TableCell className = {classes.tableCell}>Order #</TableCell>
                        <TableCell className = {classes.tableCell}>Type</TableCell>
                        <TableCell className = {classes.tableCell}>TimeStamp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className = {classes.tableCell}>74185</TableCell>
                        <TableCell className = {classes.tableCell}>5/2</TableCell>
                        <TableCell className = {classes.tableCell}>Wednesday, 12:14:55</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className = {classes.tableCell}>74185</TableCell>
                        <TableCell className = {classes.tableCell}>5/2</TableCell>
                        <TableCell className = {classes.tableCell}>Wednesday, 12:14:55</TableCell>
                    </TableRow><TableRow>
                        <TableCell className = {classes.tableCell}>74185</TableCell>
                        <TableCell className = {classes.tableCell}>5/2</TableCell>
                        <TableCell className = {classes.tableCell}>Wednesday, 12:14:55</TableCell>
                    </TableRow><TableRow>
                        <TableCell className = {classes.tableCell}>74185</TableCell>
                        <TableCell className = {classes.tableCell}>5/2</TableCell>
                        <TableCell className = {classes.tableCell}>Wednesday, 12:14:55</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    );
    
}