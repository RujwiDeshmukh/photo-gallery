import React from 'react';
import {motion} from 'framer-motion';
import useStorage  from '../hooks/useStorage';
import useFirestore  from '../hooks/UseFirestore';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

const Delete = ({ selectedImg, setSelectedImg }) =>  {

    const {docs} = useFirestore('images');



    return (
        <div className="drop">
        { docs && docs.map(doc  => ( <div className="drop" key={doc.id} onClick={(doc,e) => {

            if(selectedImg.id  === doc.id)
            {
            let id = doc.id;

            projectFirestore.collection('images').id.delete().then( () => {
                console.log('File Deleted');
            }).catch((error) => {
                console.log(error);
            })
        }
            setSelectedImg(null);
        }

        }> </div> ))} 
            <h1>Deleted Succeddfully!!!!</h1>
        </div>
    )
}

export default Delete;