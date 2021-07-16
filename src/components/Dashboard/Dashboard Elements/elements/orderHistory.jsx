import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Table, TableHead, TableBody, TableCell, TableRow, Grid, Typography } from '@material-ui/core';
import { grey, brown } from '@material-ui/core/colors';

import { useState, useEffect } from 'react';
import db from '../../../../firebase';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 5 + '%',
        backgroundColor: grey[800],
        width: 80 + '%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px'
    },
    tableCell: {
        color: 'white',
        fontFamily: 'Baloo Da 2, cursive',
        textAlign: 'center',
        width: 30 + '%'
    },

}));


export default function OrderHistory() {

    const classes = useStyles();
    //const theme = useTheme();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        db.collection('Order').where('Type', 'in', ['5/2', '3/2']).get().then((doc) => {
            doc.forEach((docs) => {
                setOrders(orders => [...orders, docs.data()])
            })
        })
    }, [])

    console.log(orders)
    return (
        <Grid style={{ height: 82.75 + 'vh', overflow: 'hidden' }}>
            <Typography style={{ textAlign: 'center', color: brown[800], fontWeight: 900 }}>
                <h1>Order History</h1>
            </Typography>
            <Grid style={{ width: 100 + '%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <Card className={classes.root} >
                    <Table style={{ color: 'white' }}>
                        <TableHead>
                            <TableRow >
                                <TableCell className={classes.tableCell}>Order Type</TableCell>
                                <TableCell className={classes.tableCell}>Timestamp</TableCell>
                                <TableCell className={classes.tableCell}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                orders.map((document) => (
                                    <TableRow key={document.id}>
                                        <TableCell className={classes.tableCell}>{document.Type}</TableCell>
                                        <TableCell className={classes.tableCell}>{new Date(document.Time).toLocaleDateString("en-IN") + " " + new Date(document.Time).toLocaleTimeString("en-IN")}</TableCell>
                                        <TableCell className={classes.tableCell}>{document.Good == 1 ? 'Good' : 'Defective'}</TableCell>
                                    </TableRow>
                                ))


                            }
                        </TableBody>
                    </Table>
                </Card>
            </Grid>
        </Grid>
    );

}