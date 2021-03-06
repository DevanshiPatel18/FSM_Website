import React from 'react';
import { useState} from 'react';
import db from '../../../../firebase';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')

export default function useOrderHistoryDetails() {
    const [history, setHistory] = useState([]);


    React.useEffect(() => {
    db.collection('Order').onSnapshot((doc) => {
        doc.forEach((document) => {
            
                setHistory([...history, document.data()])
        })
    })
}, []);
    return{
        history
    }
}