import React from 'react';
import useFirestore from '../hooks/UseFirestore';
import { motion } from 'framer-motion';
//for applying motion to image

//We want to access data from firestore databse so we can cycle through those urls n output images for each one 
const ImageGrid = ({ setSelectedImg }) => {

    const { docs } = useFirestore('images');
    //console.log(docs);

    return(
        <div className="img-grid">
            { docs && docs.map(doc  => (
                <motion.div className="img-wrap" key={doc.id}
                layout /*earlier when we add new image it will pop to next , bt now it ll animate to new position*/
                 whileHover={ {opacity : 1 }}
                 onClick={() => setSelectedImg(doc.url)}>
                     {/*Changing the value of selected image to doc.url */}
                <motion.img src={doc.url} alt="uploaded pic" 
                /*when img first comes on page */
                initial ={{opacity : 0}}
                animate ={{opacity : 1}}
                /*wait for sec before animation */
                transition = {{delay: 1}}/>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;