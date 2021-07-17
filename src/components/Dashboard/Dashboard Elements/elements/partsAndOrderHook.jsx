import db from '../../../../firebase';
import { useEffect, useState } from 'react';
import React from 'react';
import { sendAverage } from './average';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')


export default function usePartsAndOrder() {
    const [manufactured, setManufactured] = useState(0)
    const [defective, setDefective] = useState(0)
    const [process, setProcess] = useState()
    const [orderType, setOrderType] = useState('No Order')

    React.useEffect(() => {
        db.collection('EWON').doc('Properties').onSnapshot((snapshot) => {
            if(!snapshot.data().PowerStatus){
                setOrderType("No order")
            }
        })
    },[orderType])

    React.useEffect(() => {
        db.collection('Order').doc('Status').get().then((doc) => {
            setManufactured(doc.get('Total Manufactured'));
            setDefective(doc.get('Total Defective'));

            db.collection('OrderTest').doc('CurrentOrder').onSnapshot((doc) => {
                setProcess(doc.get('Process'));
                if (process !== 'Waiting...') {
                    setProcess(doc.get('Process'));
                    if(doc.data().Process){
                        db.collection("Order").orderBy("Time", "desc").limit(1).onSnapshot((snapshot) => {
                            setOrderType(snapshot.docs[0].data().Type)
                        });
                    }
                //if(doc.data().Process === 'Machine 3 Stopped'){
                       
                  //         setOrderType("No order")
                    
                    //}
                }

                if(doc.data().Machine == '0' && doc.data().Process === 'Machine 2 Started'){
                    console.log('Hello');
                    sendAverage();
                }
            })

        })

        //db.collection("Order").orderBy("Time", "desc").limit(1).onSnapshot((snapshot) => {
        //  setOrderTime( new Date(snapshot.docs[0].data().Time.seconds))
        //});

    }, [])

   
    return {
        defective,
        manufactured,
        process,
        orderType
    }
}