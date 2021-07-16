
import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
import db from '../../../../firebase';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')

var processLOg = []

export default function useProcessStatus() {
    const [WS1, setWS1] = useState(0);
    const [WS2, setWS2] = useState(0);
    const [WS3, setWS3] = useState(0);

    const [process, setProcess] = useState([{
        processData: 'No Order',
        dateData: new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(Date.now())
    }])

    React.useEffect(() => {
        db.collection('OrderTest').doc('CurrentOrder').onSnapshot((doc) => {
            const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(Date.now());
            //console.log(enUSFormatter.format(date) + new Date().getTime());
            const processPart = doc.data().Process
            setProcess(process => [...process, { processData: processPart, dateData: date }])
            processLOg.push({process: processPart, date: date});
            
            if(doc.data().Machine === '0' && processPart === 'Completed'){
                console.log('1 completed');
                setWS1(1)
            }

            
            if(doc.data().Machine === '1' && processPart === 'Completed'){
                console.log('2 completed');
                
                setWS2(1)
            }
            
            if(doc.data().Machine === '2' || doc.data().Machine === '3' && processPart === 'Completed'){
                console.log('3 completed');
               
                setWS3(1);
            }
        })
    }, [])

    if(WS1 === 1 && WS2 === 1 && WS3 === 1){
        console.log(processLOg)
    }
    return {
        process
    }
}