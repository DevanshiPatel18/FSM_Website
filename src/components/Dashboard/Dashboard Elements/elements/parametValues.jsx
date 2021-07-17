import { useEffect } from "react";
import { useState } from "react";
import React from 'react'
import db from '../../../../firebase';
import { sendAverage, useSendAverage } from "./average";
const firebase = require('firebase');

require('firebase/firestore')
require('firebase/auth')


let oee =0;
let avail =0;
let qual =0;
let per =0;

let oeecount =0;
let percount =0;
let availcount =0;
let qualcount =0;

export default function useParameterValues(){
    const [currentOEE, setCurrentOEE] = useState(0);
    const [currentAvail, setCurrentAvail] = useState(0);
    const [currentQual, setCurrentQual] = useState(0);
    const [currentPer, setCurrentPer] = useState(0);
    const [flag, setFlag] = useState(0);

  React.useEffect(() => {
    db.collection('Realtime').doc('WS 1').onSnapshot((doc) => {
     
        
        let OEE = doc.data().oee;
        let AVAIL = doc.data().availability;
        let PER = doc.data().performance;
        let QUAL = doc.data().quality;

        setCurrentOEE(OEE);
        setCurrentAvail(AVAIL);
        setCurrentPer(PER);
        setCurrentQual(QUAL);
      
        if(OEE > 0){
          oee += OEE;
          oeecount += 1;
          //console.log('*OEE:' + oee + " " + oeecount);
        }

        if(PER > 0){
          per += PER;
          percount += 1;
          //console.log('*PER:' + per + " " + percount);
        
        }

        if(QUAL > 0){
          qual += QUAL;
          qualcount += 1;
          //console.log('*QUAL:' + qual + " " + qualcount);

        }

        if(AVAIL > 0){
          avail += AVAIL;
          availcount += 1;
          //console.log('*AVAIL:' +avail + " " + availcount);

        }

        //if(doc.data().status === 'Completed'){
         // console.log('Completed')
         // setFlag(1);
          
   //     }

    })
  }, [])

 // useEffect(() => {
   /// console.log('hello');
    //setFlag(0);
 // },[flag])
  

return{
   
    currentAvail,
    currentOEE,currentPer,
    currentQual,
    oee,oeecount,
    qual, qualcount,
    avail, availcount,
    per,percount
}
}


export {
  oee, oeecount,
  avail, availcount,
  per,percount,
  qual,qualcount
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