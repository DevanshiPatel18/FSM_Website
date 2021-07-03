import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Card, Table, TableHead, TableBody, TableCell, TableRow , Grid, Typography} from '@material-ui/core';
import { grey, brown } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 5+'%',
        backgroundColor: grey[800],
        width: 80+'%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px'
    },
    tableCell: {
        color: 'white',
        fontFamily: 'Baloo Da 2, cursive',
        textAlign: 'center',
        width: 30+'%'
    },

    }    ));


export default function OrderHistory(){

    const classes = useStyles();
    //const theme = useTheme();

    return(
        <Grid style={{height: 82.75+'vh', overflow: 'hidden'}}>
            <Typography style={{textAlign : 'center', color: brown[800], fontWeight: 900}}>
                <h1>Order History</h1>
            </Typography>
            <Grid  style={{width: 100+'%', textAlign: 'center',  display: 'flex', justifyContent: 'center'}}>
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
            </Grid>
        </Grid>
    );
    
}