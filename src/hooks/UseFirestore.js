import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

//collection here is images
const useFirestore = (collection) => {

    //collection we want to get documents from
    //for retrival of documents i.e. images from firestore n display on screen

    const[docs, setDocs] =  useState([]);

    useEffect(() => {
        const unSub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) =>  {
          //it snapshots database i.e documents in it at that moment of time
          let documents = [];
          //it cycle through the documents currently in db at tht moment
          snap.forEach(doc => {
              //pushing data from that doument into document array
              //doc.data()  //it gets us data inside the document, we an acess id as well
              //spread op gets all properties from data 
              documents.push({...doc.data(), id:doc.id})
          });

          setDocs(documents);
        })
        
        //cleanup functn 
        return () => unSub();
    }, [collection])

    return  { docs };
}

export default useFirestore;

//unSub returns functn n that fuctn is used to unsubscribe from collection 
//as we dont want to be listening to that collection to retrieve documents
//We want to do that if we want to unmount grid component which is what is going to be be usingthis
//hook to get data

