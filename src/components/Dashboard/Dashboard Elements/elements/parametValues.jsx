import { useEffect } from "react";
import { useState } from "react";
import React from 'react'
import db from '../../../../firebase';
const firebase = require('firebase');

require('firebase/firestore')
require('firebase/auth')

var numberOfEntries = 0;

export default function useParameterValues(){
    const [avgOEE, setAvgOEE] = useState(0);
    const [avgAvail, setAvgAvail] = useState(0);
    const [avgPer, setAvgPer] = useState(0);
    const [avgQual, setAvgQual] = useState(0);
    const [currentOEE, setCurrentOEE] = useState(0);
    const [currentAvail, setCurrentAvail] = useState(0);
    const [currentQual, setCurrentQual] = useState(0);
    const [currentPer, setCurrentPer] = useState(0);

    console.log(avgOEE+" "+avgAvail+" "+avgPer+" "+avgQual)
  React.useEffect(() => {
    db.collection('Realtime').doc('WS 1').onSnapshot((doc) => {
      console.log(doc.data().oee)
        numberOfEntries += 1;
        setCurrentOEE(doc.data().oee + 10);
        setCurrentAvail(doc.data().availability + 10);
        setCurrentPer(doc.data().performance + 10);
        setCurrentQual(doc.data().quality + 10);
        console.log(currentOEE+" "+currentAvail+" "+currentPer+" "+currentQual)

        setAvgOEE(((avgOEE*numberOfEntries + currentOEE)/(numberOfEntries+1)).toFixed(3));
        setAvgAvail(((avgAvail*numberOfEntries + currentAvail)/(numberOfEntries+1)).toFixed(3));
        setAvgQual(((avgQual*numberOfEntries + currentQual)/(numberOfEntries+1)).toFixed(3));
        setAvgPer(((avgPer*numberOfEntries + currentPer)/(numberOfEntries+1)).toFixed(3));

        console.log(avgOEE+" "+avgAvail+" "+avgPer+" "+avgQual)


    })
  }, [])
return{
    avgOEE,
    avgAvail,
    avgPer,
    avgQual,
    currentAvail,
    currentOEE,currentPer,
    currentQual
}
}

/*const onRefresh = chart => {
  const now = Date.now();
  numberOfEntries += 1;
  let currentOEE =0;
  let currentAvail =0;
  let currentQual =0;
  let currentPer =0;
  if( props.token ){
  db.collection('Realtime').doc('WS 1').get().then((doc) => {
    console.log('hello')
    currentOEE = doc.data().oee + Math.random()*100
    currentAvail = doc.data().availability +  Math.random()*100
    currentQual = doc.data().quality +  Math.random()*100
    currentPer = doc.data().performance +  Math.random()*100
    console.log(avgOEE + "," + avgAvail+','+avgPer+','+avgQual);
    //chart.data.datasets.forEach((dataset,id) => {
      //dataset.data.push({
       // x: now,
        //y: doc.data().id
      //});
    //});
    chart.data.datasets[0].data.push({x: now, y: currentOEE})
    chart.data.datasets[1].data.push({x: now, y: currentPer})
    chart.data.datasets[2].data.push({x: now, y: currentQual})
    chart.data.datasets[3].data.push({x: now, y: currentAvail})



    
  })
  setAvgOEE((avgOEE*numberOfEntries + currentOEE)/(numberOfEntries+1));
  setAvgAvail((avgAvail*numberOfEntries + currentAvail)/(numberOfEntries+1));
  setAvgQual((avgQual*numberOfEntries + currentQual)/(numberOfEntries+1));
  setAvgPer((avgPer*numberOfEntries + currentPer)/(numberOfEntries+1));


};
}*/